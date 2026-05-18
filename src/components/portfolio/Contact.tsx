import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send, Twitter, CheckCircle2, Loader2 } from "lucide-react";
import { personal } from "@/data/portfolio";
import { toast } from "sonner";

/**
 * Real email sending via Web3Forms (https://web3forms.com).
 * 1. Go to https://web3forms.com → enter your email → get a FREE access key.
 * 2. Paste it below (or set VITE_WEB3FORMS_KEY in your .env).
 * No backend needed — works on any static host (Netlify / Vercel / GitHub Pages).
 */
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // If no key configured → graceful mailto fallback so it still works locally
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      const body = `Hi, I'm ${name} (${email}).%0D%0A%0D%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${body}`;
      toast.info("Add a Web3Forms key in Contact.tsx to enable real sending.");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject: subject || "New portfolio message",
          message,
          from_name: name,
          replyto: email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        toast.success("Message sent! I'll reply within 24h.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (err) {
      setStatus("idle");
      toast.error("Couldn't send — please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="surface p-8 md:p-14 reveal">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side - Info */}
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="display-title text-3xl md:text-4xl lg:text-5xl mb-4 leading-[0.95]">
                Let's create
                <br />
                something
                <br />
                <span className="serif-italic accent-text">meaningful.</span>
              </h2>
              <p className="text-muted-foreground mb-6">
Reach out via the form or email me directly.              </p>

              <a
                href={`mailto:${personal.email}`}
                className="ink-button inline-flex items-center gap-2 text-sm font-medium px-6 py-3 mb-6"
              >
                <Mail size={16} />
                {personal.email}
                <ArrowUpRight size={14} />
              </a>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <MapPin size={14} /> {personal.location}
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={14} /> Replies within 24h
                </span>
              </div>

              <div className="flex gap-2">
                {[
                  { Icon: Github, href: personal.socials.github, label: "GitHub" },
                  { Icon: Linkedin, href: personal.socials.linkedin, label: "LinkedIn" },
                  { Icon: Twitter, href: personal.socials.twitter, label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:-translate-y-1 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="ink-button inline-flex items-center gap-2 px-8 py-3 text-sm font-medium w-full justify-center disabled:opacity-70"
              >
                {status === "sending" ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending…</>
                ) : status === "sent" ? (
                  <><CheckCircle2 size={16} /> Sent</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
