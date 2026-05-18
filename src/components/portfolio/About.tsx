import { MapPin, Mail, Sparkles } from "lucide-react";
import { about, personal, currentlyLearning } from "@/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — heading */}
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-6">About</p>
            <h2 className="display-title text-4xl md:text-5xl lg:text-6xl mb-8">
              Crafting <span className="serif-italic">meaningful</span> products
              &amp; learning every day.
            </h2>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card">
                <MapPin size={13} /> {personal.location}
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition-colors"
              >
                <Mail size={13} /> {personal.email}
              </a>
            </div>
          </div>

          {/* RIGHT — paragraphs + currently learning */}
          <div className="lg:col-span-7 reveal space-y-6">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg md:text-xl leading-relaxed text-foreground"
                    : "text-base leading-relaxed text-muted-foreground"
                }
              >
                {p}
              </p>
            ))}

            <div className="surface p-6 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="accent-text" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold">
                  Currently Learning
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
