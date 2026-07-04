import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FormaMUN 2026 | Where Structure Shapes Diplomacy",
  description: "FormaMUN is a student-led Model United Nations conference in Riyadh, Saudi Arabia, founded on the principles of structure, innovation, and professionalism. Register TBD.",
  keywords: ["FormaMUN", "Model United Nations", "MUN Riyadh", "Saudi Arabia MUN", "Diplomacy", "Student Leadership"],
  authors: [{ name: "FormaMUN Secretariat" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} scroll-smooth h-full`}
    >
      <body className="bg-[#0B192C] text-slate-300 antialiased font-sans min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

