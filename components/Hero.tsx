"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "linear-gradient(180deg,#160D27 0%,#852BFF 45%,#FF35C5 68%,#080711 69%)" }}>

      <div className="absolute left-1/2 top-[25%] -translate-x-1/2 h-72 w-72 md:h-[26rem] md:w-[26rem] rounded-full"
        style={{ background: "linear-gradient(#ffd36e,#FF35C5)", maskImage: "repeating-linear-gradient(#000 0 14px,transparent 14px 18px)" }} />

      <svg className="absolute bottom-0 inset-x-0 w-full h-[45%]" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden>
        <path fill="#080711" d={"M0 300V170"+[...Array(24)].map((_,i)=>`h${20+(i*37)%30}v${-(30+(i*53)%90)}h${15+(i*29)%25}v${20+(i*41)%60}`).join("")+"V300Z"} opacity=".9"/>
        <path d="M0 270H1200" stroke="#00E5FF" strokeWidth="2"/>
        <g stroke="#FF35C5" strokeWidth="1.5" opacity=".6">{[...Array(14)].map((_,i)=><path key={i} d={`M600 270L${i*92-50} 300`}/>)}</g>
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 pt-28 pb-20 md:grid-cols-2">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl neon leading-none">SHARKBUX</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }} className="mt-4 text-xl font-bold text-cyan">THE SHARK ECONOMY IS COMING.</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-2 text-2xl font-black text-white">GET RICH OR GET EATEN.</motion.p>
          <p className="mt-5 max-w-md text-white/85">Welcome to the streets of Vice City, where money moves fast, sharks rule the streets, and nobody plays by the rules.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="rounded-full bg-pink px-6 py-3 font-bold text-ink shadow-[0_0_30px_#FF35C5] transition hover:scale-105">ENTER THE SHARK ECONOMY</a>
            <a href="#community" className="rounded-full border border-cyan px-6 py-3 font-bold text-cyan transition hover:bg-cyan/10">JOIN COMMUNITY</a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .3 }}
          className="flex items-center justify-center">
          <motion.img
            src="/images/sharkbux-logo.png"
            alt="SHARKBUX Shark Mascot Logo"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full max-w-[440px] object-contain drop-shadow-[0_0_45px_rgba(255,53,197,.65)]"
          />
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"><ArrowDown /></a>
    </section>
  );
}
