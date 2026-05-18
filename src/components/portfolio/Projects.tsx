import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Link } from "react-router-dom";

export const Projects = () => {
  const PREVIEW_COUNT = 3;
  const previewProjects = projects.slice(0, PREVIEW_COUNT);
  const hasMore = projects.length > PREVIEW_COUNT;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10 reveal">
          <p className="eyebrow">Portfolio</p>
          <div className="md:col-span-2">
            <h2 className="display-title text-4xl md:text-5xl mb-4">
              Selected <span className="serif-italic">work</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
            A look at recent full-stack web development projects I've built.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewProjects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative surface rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] uppercase tracking-wider font-semibold text-primary">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-1.5 group-hover:accent-text transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ink-button inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium"
                    >
                      Demo <ArrowUpRight size={12} />
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-border hover:bg-muted transition-colors"
                    >
                      <Github size={12} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {hasMore && (
            <Link
              to="/projects"
              className="reveal group relative rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 min-h-[280px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.2),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                <ArrowRight size={24} className="text-primary-foreground" />
              </div>
              <div className="relative text-center">
                <h3 className="font-display text-xl font-semibold mb-1">
                  View All <span className="serif-italic accent-text">Projects</span>
                </h3>
                <p className="text-muted-foreground text-sm">
                  Explore all {projects.length}+ works
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
