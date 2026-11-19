"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
const CONTRACT = "TBA";
export default function Token() {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(CONTRACT); setDone(true); setTimeout(()=>setDone(false), 1800); } catch { /* clipboard blocked */ }
  };
  const rows = [["Name","SHARKBUX"],["Ticker","$SHARK"],["Network","[NETWORK TO BE CONFIRMED]"],["Total supply","TBA"]];
  return (
    <section id="token" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="font-display text-4xl neon">TOKEN INFORMATION</h2>
      <dl className="glass mt-8 divide-y divide-white/10 rounded-2xl">
        {rows.map(([k,v])=><div key={k} className="flex justify-between gap-4 p-4"><dt className="text-white/60">{k}</dt><dd className="font-bold">{v}</dd></div>)}
        <div className="flex items-center justify-between gap-4 p-4"><dt className="text-white/60">Contract address</dt>
          <dd className="flex items-center gap-3 font-bold">{CONTRACT}
            <button onClick={copy} aria-label="Copy contract address" className="rounded-lg bg-pink p-2 text-ink">{done?<Check size={16}/>:<Copy size={16}/>}</button></dd></div>
      </dl>
      <p className="mt-3 text-sm text-white/50">Details will be published once confirmed. No price or market data is shown.</p>
    </section>
  );
}
