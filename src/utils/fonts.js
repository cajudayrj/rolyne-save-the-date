import { Great_Vibes, Montserrat, Poppins, Fleur_De_Leah } from "next/font/google";

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

export { greatVibes, fleur, poppins };
