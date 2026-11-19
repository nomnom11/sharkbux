import type { Metadata } from "next";
import { Monoton, Space_Grotesk } from "next/font/google";
import "./globals.css";
const display = Monoton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: "SHARKBUX ($SHARK) — Get rich or get eaten.",
  description: "Welcome to the Shark Economy. Independent fan-made meme project.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} font-body`}>{children}</body></html>;
}
