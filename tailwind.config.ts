import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: {
    colors: { pink: "#FF35C5", violet: "#852BFF", cyan: "#00E5FF", ink: "#080711", plum: "#160D27" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
  } },
} satisfies Config;
