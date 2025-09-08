import { Great_Vibes, UnifrakturMaguntia, Montserrat, Poppins, Fleur_De_Leah, Updock } from "next/font/google";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fleur = Fleur_De_Leah({
    variable: "--font-fleur",
    subsets: ["latin"],
    weight: "400"
})

const unifraktur = UnifrakturMaguntia({
  variable: "--font-unifraktur",
  subsets: ["latin"],
  weight: "400"
})

const updock = Updock({
  variable: "--font-updock",
  subsets: ["latin"],
  weight: "400"
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export { greatVibes, fleur, unifraktur, montserrat, updock, poppins };
