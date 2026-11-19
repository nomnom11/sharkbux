"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["About","#about"],["Memes","#memes"],["Token","#token"],["Roadmap","#roadmap"],["Community","#community"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="#top" className="flex items-center">
          <img src="/images/sharkbux-logo.png" alt="SHARKBUX" className="h-14 w-14 object-contain" />
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map(([l,h])=><li key={h}><a href={h} className="hover:text-cyan">{l}</a></li>)}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
          {open?<X/>:<Menu/>}
        </button>
      </nav>
      {open && <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden">{links.map(([l,h])=><li key={h}><a href={h} onClick={()=>setOpen(false)}>{l}</a></li>)}</ul>}
    </header>
  );
}
