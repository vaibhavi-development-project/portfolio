import { Code2, Server, Database, Wrench } from "lucide-react";

/* Edit / add freely — 4-column services grid */
const services = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "Pixel-perfect, responsive UIs with React, TypeScript and Tailwind — fast, accessible and SEO-friendly.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "REST APIs and server-side logic in Node.js, Express and .NET / C# with auth, validation and clean architecture.",
  },
  {
    icon: Database,
    title: "Databases & Data Modeling",
    desc: "Schema design, queries and optimization across SQL Server and MongoDB .",
  },
  {
    icon: Wrench,
    title: "Full Stack Delivery",
    desc: "End-to-end web apps — from setup and Git workflow to deployment, debugging and maintenance.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12 reveal">
          <p className="eyebrow">What I do</p>
          <h2 className="md:col-span-2 display-title text-3xl md:text-4xl">
            Solutions built with <span className="serif-italic">creativity, logic, and modern </span> 
           technology
          </h2>  
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border surface overflow-hidden reveal">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-card p-7 flex flex-col gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
