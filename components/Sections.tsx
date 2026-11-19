import { Send, Twitter } from "lucide-react";
export const X_URL = "https://x.com/"; // TODO: replace with real URL
export const TG_URL = "https://t.me/"; // TODO: replace with real URL
export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="font-display text-4xl neon">WELCOME TO THE SHARK ECONOMY.</h2>
      <p className="mt-6 text-lg text-white/85">SHARKBUX is bringing the wild energy of Vice City into meme culture. A place where sharks swim, degens hustle, and the streets never sleep.</p>
      <p className="mt-4 font-bold text-cyan">No promises. No rules. Just pure meme energy.</p>
    </section>
  );
}
const phases = [
  ["PHASE 1 — ENTER VICE CITY",["Launch SHARKBUX branding","Website launch","Community formation","Meme campaign"]],
  ["PHASE 2 — SHARK TAKEOVER",["Community expansion","Meme competitions","Social media campaigns","Community partnerships"]],
  ["PHASE 3 — THE SHARK ECONOMY",["Ecosystem expansion","Community-driven initiatives","Future utility exploration"]],
] as const;
export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-display text-4xl neon">ROADMAP</h2>
      <ol className="mt-10 space-y-6 border-l-2 border-pink pl-6">
        {phases.map(([t,items])=>(
          <li key={t} className="glass rounded-2xl p-6"><h3 className="font-bold text-cyan">{t}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-white/85">{items.map(i=><li key={i}>{i}</li>)}</ul></li>
        ))}
      </ol>
    </section>
  );
}
export function Community() {
  return (
    <section id="community" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="font-display text-4xl neon">THE STREETS ARE CALLING.</h2>
      <p className="mt-6 text-white/85">The shark movement is bigger than one wallet. Join the community and become part of the Shark Economy.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={X_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-pink px-6 py-3 font-bold text-ink"><Twitter size={18}/>FOLLOW ON X</a>
        <a href={TG_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-cyan px-6 py-3 font-bold text-cyan"><Send size={18}/>JOIN TELEGRAM</a>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="border-t border-pink/30 px-6 py-10 text-center">
      <p className="font-display text-2xl text-pink">SHARKBUX © 2026</p>
      <p className="mt-1 font-bold">GET RICH OR GET EATEN.</p>
      <p className="mt-3 flex justify-center gap-5 text-cyan"><a href={X_URL}>X</a><a href={TG_URL}>Telegram</a></p>
      <p className="mx-auto mt-4 max-w-xl text-xs text-white/50">SHARKBUX is an independent meme project and is not affiliated with Rockstar Games, Take-Two Interactive, or Grand Theft Auto.</p>
    </footer>
  );
}
