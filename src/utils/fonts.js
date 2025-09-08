import { Great_Vibes, Merriweather } from "next/font/google";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "400"
});

export { greatVibes, merriweather };
