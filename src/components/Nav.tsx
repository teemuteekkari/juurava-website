export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
         style={{ background: 'rgba(11,14,46,0.75)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(123,92,255,0.2)' }}>
      <a href="#top" className="flex items-center gap-2">
        <img
          src="/images/juurava_favicon_tab_bg.png"
          alt="Juurava Systems"
          style={{ height: '104px', width: 'auto', objectFit: 'contain' }}
        />
      </a>

      <div className="hidden items-center gap-8 text-sm md:flex">
        {['Company','Products','Approach','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
             className="text-mist/70 transition hover:text-bone" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            {l}
          </a>
        ))}
      </div>

      <a href="#contact"
         className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition"
         style={{ background: 'linear-gradient(135deg,#FF3DA8,#7B5CFF)', color: '#fff', fontFamily: 'JetBrains Mono, monospace' }}>
        Get in touch
      </a>
    </nav>
  );
}
