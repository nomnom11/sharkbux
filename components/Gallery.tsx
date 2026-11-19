"use client";
import { motion } from "framer-motion";

const memes = [
  {
    title: "Shark Gangster",
    description: "Respect is earned. Fins are tipped.",
    image: "/images/gangster.jpg",
    color: "#D946EF"
  },
  {
    title: "Vice City Lifestyle",
    description: "0 to Vice City in 3 seconds.",
    image: "/images/lifestyle.jpg",
    color: "#FF35C5"
  },
  {
    title: "Shark Money",
    description: "Every bill has teeth marks.",
    image: "/images/money.jpg",
    color: "#00E5FF"
  },
  {
    title: "Shark Empire",
    description: "The throne is an ocean-view penthouse.",
    image: "/images/empire.jpg",
    color: "#FF35C5"
  },
  {
    title: "Shark Economy",
    description: "Green candles are just seaweed.",
    image: "/images/economy.jpg",
    color: "#7045FF"
  }
];

export default function Gallery() {
  return (
    <section id="memes" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-display text-5xl md:text-6xl font-black italic
          bg-gradient-to-r from-pink via-purple-400 to-cyan
          bg-clip-text text-transparent">
          MEME GALLERY
        </h2>
        <p className="mt-4 text-white/60">
          Welcome to the wild side of Vice City.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {memes.map((m, i) => (
          <motion.article
            key={m.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group relative overflow-hidden rounded-2xl
              border border-white/10 bg-[#10091D]
              shadow-[0_0_25px_rgba(255,53,197,0.08)]
              transition-all duration-300"
            style={{ borderColor: `${m.color}55` }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={m.image}
                alt={m.title}
                className="h-full w-full object-cover transition-transform
                  duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t
                from-[#10091D] via-transparent to-transparent" />
              <div
                className="absolute inset-0 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 35px ${m.color}66` }}
              />
            </div>

            <div className="relative px-5 pb-6 pt-2">
              <h3 className="text-xl font-extrabold text-white">
                {m.title}
              </h3>
              <p className="mt-1 text-white/65">
                {m.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
