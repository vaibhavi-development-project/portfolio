import { Download, GraduationCap, Briefcase } from "lucide-react";
import { timeline, personal } from "@/data/portfolio";

export const Resume = () => {
  return (
    <section id="resume" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12 reveal">
          <p className="eyebrow">Resume</p>
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="display-title text-3xl md:text-4xl">
              Experience &amp; <span className="serif-italic">education</span>.
            </h2>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border hover:bg-muted transition-colors w-fit"
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>

        <div className="surface divide-y divide-border reveal">
          {timeline.map((item, i) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 hover:bg-muted/40 transition-colors"
              >
                <div className="md:col-span-3 flex md:flex-col gap-2 md:gap-1">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Icon size={12} /> {item.type}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm accent-text mb-2">{item.place}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
