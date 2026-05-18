/* Logo strip — edit `logos` to swap names */
const logos = [
  "Frame Blox",
  "Supa Blox",
  "Hype Blox",
  "Ultra Blox",
  "Ship Blox",
  "Pixel Lab",
];

export const TrustedBy = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-start mb-8 reveal">
          <p className="eyebrow">Trusted by</p>
          <p className="md:col-span-2 text-sm text-muted-foreground max-w-md">
            Collaborated with founders, indie makers and small teams to ship
            meaningful products on the web.
          </p>
        </div>

        <div className="surface overflow-hidden reveal">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-border">
            {logos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center gap-2 px-6 py-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-foreground/40" />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
