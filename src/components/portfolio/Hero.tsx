import { ArrowUpRight, Download, CheckCircle2 } from "lucide-react";
import { personal } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-32 pb-16 overflow-hidden"
    >
      {/* subtle accent glow only — keeps page background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]"
      />
      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        {/* LEFT — bold intro */}
        <div className="animate-fade-in-up order-2 lg:order-1">
          <p className="eyebrow mb-6">{personal.name.toUpperCase()}</p>

          <h1 className="display-title text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-3">
            Do you need a
          </h1>
          <h1 className="display-title text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] mb-10">
            <span className="accent-text">Full Stack</span>
            <br />
            <span className="serif-italic">Developer?</span>
          </h1>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-sm md:text-base font-semibold uppercase tracking-wide">
            {[
              ["Frontend", "Development"],
              ["Backend", "Development"],
              ["Full Stack", "Apps"],
            ].map(([a, b]) => (
              <div key={a} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="accent-text shrink-0" />
                <span className="leading-tight">
                  {a}
                  <br />
                  {b}
                </span>
              </div>
            ))}
          </div>

{/* From backend logic to modern UI — I enjoy building it all. */}
          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            From <span className="font-semibold text-foreground">BACKEND LOGIC</span>, to modern UI — I'm up for it. <span className="inline-block">👋</span>
            <span className="block w-32 h-[3px] mt-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="ink-button inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium"
            >
              Hire me
              <ArrowUpRight size={16} />
            </a>
            <a
              href={personal.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border border-border hover:bg-muted transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        {/* RIGHT — 3D portrait with VAIBHAVI watermark */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
            {/* "VAIBHAVI" watermark — only on mobile/tablet (hidden on lg+) */}
            <div
              aria-hidden
              className="lg:hidden fixed-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen flex items-center justify-center pointer-events-none overflow-hidden z-0 px-3"
            >
              <span
                className="vaibhavi-poster uppercase leading-none text-center select-none block w-full"
                style={{ fontSize: "min(18vw, 22vh)" }}
              >
                VAIBHAVI
              </span>
            </div>
            <img
              src={personal.photo}
              alt={`${personal.name} 3D portrait`}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
