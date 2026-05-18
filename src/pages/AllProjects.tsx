import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

const AllProjects = () => {
  useScrollReveal();

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <section className="section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="mb-12 reveal">
            <p className="eyebrow mb-2">Portfolio</p>
            <h1 className="display-title text-4xl md:text-5xl mb-4">
              All <span className="serif-italic">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              A complete look at all the projects I've built.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="reveal group surface rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {p.category}
                    </span>
                    <span>{p.tags.slice(0, 2).join(" · ")}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1.5 group-hover:accent-text transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                    {p.description}
                  </p>
                  <div className="flex gap-2">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-button inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium"
                      >
                        Live Demo <ArrowUpRight size={12} />
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
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default AllProjects;