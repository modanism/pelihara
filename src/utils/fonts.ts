import { DM_Sans, Inter, Plus_Jakarta_Sans, Raleway } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const jkt_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jkt-sans",
});
const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-raleway",
  });

  const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
  });

export const fonts = {
  dm_sans,
  jkt_sans,
  raleway,
  inter
};

// HOW TO ADD GOOGLE FONTS
// 1. Import the fonts here
// 2. In layout.tsx, put the font variable inside the classname of the <body/>
// 3. In theme.ts, add the new fonts inside the fontFamily attributes
