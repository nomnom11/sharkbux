export default function Shark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 360" className={className} role="img" aria-label="Gangster shark mascot with sunglasses and gold chain">
      <defs>
        <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5b6cff"/><stop offset="1" stopColor="#2a2f7a"/></linearGradient>
        <linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffe27a"/><stop offset="1" stopColor="#c8921b"/></linearGradient>
      </defs>
      <path d="M190 10 L240 110 L150 110Z" fill="#2a2f7a"/>
      <path d="M40 200 C40 110 130 70 210 80 C300 90 370 150 370 220 C370 290 290 330 200 330 C110 330 40 290 40 200Z" fill="url(#sk)"/>
      <path d="M90 250 C150 300 270 300 340 240 C300 330 140 340 90 250Z" fill="#e9e9ff"/>
      <path d="M110 255 Q200 300 330 245 L320 268 Q200 320 120 280Z" fill="#fff"/>
      {[130,165,200,235,270,300].map((x,i)=><path key={i} d={`M${x} 272 l9 18 l9 -18Z`} fill="#fff" stroke="#2a2f7a" strokeWidth="2"/>)}
      <g><rect x="80" y="150" width="110" height="52" rx="14" fill="#000"/><rect x="215" y="150" width="110" height="52" rx="14" fill="#000"/><rect x="185" y="165" width="35" height="10" fill="#000"/>
      <path d="M92 160 L140 160 L110 190Z" fill="#FF35C5" opacity=".45"/><path d="M227 160 L275 160 L245 190Z" fill="#00E5FF" opacity=".45"/></g>
      <path d="M85 135 L185 150" stroke="#160D27" strokeWidth="9" strokeLinecap="round"/><path d="M320 135 L220 150" stroke="#160D27" strokeWidth="9" strokeLinecap="round"/>
      <path d="M95 320 Q200 380 305 320" fill="none" stroke="url(#gd)" strokeWidth="10" strokeLinecap="round"/>
      <circle cx="200" cy="352" r="18" fill="url(#gd)"/><text x="200" y="359" textAnchor="middle" fontSize="20" fontWeight="900" fill="#160D27">$</text>
    </svg>
  );
}
