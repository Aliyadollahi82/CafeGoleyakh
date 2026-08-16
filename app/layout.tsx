import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "کافه بستنی گل یخ",
  description: "طعم خنکی که همیشه در خاطر می‌ماند",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body
        className={`${vazir.className} bg-[#f7fbff] text-[#0f172a] antialiased selection:bg-[#4fc3f7] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}