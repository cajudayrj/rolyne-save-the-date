import { Great_Vibes, Merriweather } from "next/font/google";
import localFont from "next/font/local";

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

const magnificChaos = localFont({
  src: '../../public/fonts/magnificchaos.ttf',
  variable: '--font-magnific-chaos',
  display: 'swap'
})

const cinzel = localFont({
  src: '../../public/fonts/cinzel.otf',
  variable: '--font-cinzel',
  display: 'swap'
})

const mathilda = localFont({
  src: '../../public/fonts/mathilda.otf',
  variable: '--font-mathilda',
  display: 'swap'
})

const mutiara = localFont({
  src: '../../public/fonts/mutiara.ttf',
  variable: '--font-mutiara',
  display: 'swap'
})

export { greatVibes, merriweather, magnificChaos, cinzel, mutiara, mathilda };
