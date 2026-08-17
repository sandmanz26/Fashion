import Image from "next/image";

export function EditorialIntro() {
  return (
    <section className="bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="md:col-span-7 md:col-start-1">
          <p className="text-[11px] uppercase tracking-[0.25em] text-clay">
            The Philosophy
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-balance sm:text-5xl md:text-[3.4vw]">
            Not everything beautiful needs to be{" "}
            <span className="italic text-ink-soft">mass produced.</span>
          </h2>
          <div className="mt-10 max-w-lg space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>
              Somewhere between fast fashion and the back of a craft store,
              knitting lost its place in culture. We think it belongs on the
              runway, not in the clearance bin.
            </p>
            <p>
              PURL exists for people who love fashion as much as they love
              making things — who see a hand-knit piece not as a hobby
              project, but as a garment worth being seen in. Every pattern we
              publish is designed first as a fashion object, then written so
              you can build it yourself, stitch by stitch.
            </p>
            <p className="font-serif text-xl italic text-ink">
              We&apos;re not selling knitting. We&apos;re selling the feeling
              of making something worth wearing.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden md:col-span-4 md:col-start-9">
          <Image
            src="/images/editorial-texture.jpg"
            alt="Macro texture photograph of a cream cable knit stitch pattern"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
