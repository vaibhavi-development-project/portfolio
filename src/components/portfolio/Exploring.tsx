import { exploring } from "@/data/portfolio";

export const Exploring = () => {
  return (
    <section id="exploring" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12 reveal">
          <p className="eyebrow">Journey</p>
          <h2 className="md:col-span-2 display-title text-3xl md:text-4xl">
            From web development to <span className="serif-italic">intelligent</span> systems.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {exploring.map((item, i) => (
            <div
              key={item.title}
              className="surface p-7 reveal hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold accent-text mb-5">
                {item.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
