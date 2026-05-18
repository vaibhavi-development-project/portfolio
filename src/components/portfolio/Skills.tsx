import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Skills = () => {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="eyebrow mb-4">Tech Stack</p>
          <h2 className="display-title text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4">
            My favorite <span className="serif-italic accent-text">toolkit</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A handpicked stack I use daily to design, build, and ship modern web experiences.
          </p>
        </div>

        {/* Marquee strip */}
        <div className="relative mb-14 overflow-hidden rounded-2xl border border-border/60 bg-card/60 py-5 reveal">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee-track flex gap-10 w-max">
            {[...allSkills, ...allSkills].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <Icon size={22} style={{ color: s.color }} />
                  <span className="text-sm font-semibold tracking-wide">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-3 gap-6 reveal">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="depth-3d group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-primary/30 via-border/40 to-secondary/30 hover:from-primary/60 hover:to-secondary/60"
            >
              <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-card p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden">
              {/* corner number */}
              <div className="absolute top-6 right-6 text-5xl font-display font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-colors">
                0{idx + 1}
              </div>

              <div className="relative">
                <h3 className="font-display text-xl font-semibold mb-1">{cat.title}</h3>
                <div className="w-10 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mb-7" />

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.name}
                        className={cn(
                          "depth-3d group/chip relative flex items-center gap-2 pl-2 pr-4 py-2 rounded-full",
                          "bg-background border border-border/60",
                          "hover:border-transparent"
                        )}
                        style={{
                          // @ts-ignore
                          "--c": s.color,
                        } as React.CSSProperties}
                      >
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/chip:scale-110"
                          style={{ backgroundColor: `${s.color}18` }}
                        >
                          <Icon size={15} style={{ color: s.color }} />
                        </span>
                        <span className="text-xs font-semibold text-foreground tracking-wide">
                          {s.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* hover glow */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
