import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Token from "@/components/Token";
import { About, Roadmap, Community, Footer } from "@/components/Sections";
export default function Page() {
  return (<><Nav /><main><Hero /><About /><Gallery /><Token /><Roadmap /><Community /></main><Footer /></>);
}
