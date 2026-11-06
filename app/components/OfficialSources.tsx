export type OfficialLink = {
  name: string;
  url: string;
  blurb: string;
};

type OfficialSourcesProps = {
  gov: OfficialLink;
  authority: OfficialLink;
};

/**
 * Site-wide "Official sources" box. Every guide renders exactly one
 * .gov link plus one authoritative link (NIST or vendor support).
 * Placed after the FAQ and before the "Keep reading" nav.
 */
export function OfficialSources({ gov, authority }: OfficialSourcesProps) {
  return (
    <section
      aria-label="Official sources"
      className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5"
    >
      <p className="text-sm font-semibold">Official sources</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed opacity-90">
        <li>
          <a className="underline" href={gov.url} rel="noopener">
            {gov.name}
          </a>{" "}
          — {gov.blurb}
        </li>
        <li>
          <a className="underline" href={authority.url} rel="noopener">
            {authority.name}
          </a>{" "}
          — {authority.blurb}
        </li>
      </ul>
    </section>
  );
}
