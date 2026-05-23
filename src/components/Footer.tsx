export default function Footer() {
  return (
    <footer className="border-t px-6 pb-8 pt-16 md:px-12"
            style={{ background: '#06081F', borderColor: 'rgba(123,92,255,0.2)' }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]"
           style={{ borderColor: 'rgba(123,92,255,0.15)' }}>
        <div>
          <div className="mb-5">
            <img
              src="/images/juurava_favicon_tab_bg.png"
              alt="Juurava Systems"
              style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'rgba(216,220,240,0.6)' }}>
            AI-assisted decision-support infrastructure for high-stakes work — in the field and at the bedside.
          </p>
        </div>

        {[
          { h: 'Products', links: ['Pelturi · Agritech','Dalili · Healthtech'] },
          { h: 'Company',  links: ['About','Approach','Contact'] },
          { h: 'Connect',  links: ['hello@juurava.com'] },
        ].map(col => (
          <div key={col.h}>
            <h5 className="mb-4 font-mono text-[11px] uppercase tracking-widest"
                style={{ color: '#FF3DA8', fontFamily: 'JetBrains Mono, monospace' }}>{col.h}</h5>
            {col.links.map(l => (
              <a key={l} href="#" className="block py-1.5 text-sm transition hover:text-bone"
                 style={{ color: 'rgba(216,220,240,0.65)' }}>{l}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-2 font-mono text-[11px] tracking-wider md:flex-row"
           style={{ color: 'rgba(216,220,240,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>
        <span>© {new Date().getFullYear()} JUURAVA SYSTEMS · ALL RIGHTS RESERVED</span>
        <span>BUILT FOR HIGH-STAKES WORK · ONLINE OR OFFLINE</span>
      </div>
    </footer>
  );
}
