import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabañas Las Golondrinas, Potrerillos, Mendoza",
  description: "Disfruta de una estadía única en Cabañas Las Golondrinas, rodeado de naturaleza y tranquilidad, con una vista panorámica sin obstrucciones de la Cordillera de los Andes.",
  keywords: [
    "cabañas", "turismo", "naturaleza", "descanso", "Las Golondrinas",
    "Potrerillos", "Mendoza", "montaña", "vistas", "pileta"
  ],
  icons: {
    icon: "/favicon.ico"
  },
  verification: {
    google: "Rc9LdxB2CDKO4y4SUPfiso9EHfGnq0HZnFY1mWzSZr0"
  },
  openGraph: {
    title: "Cabañas Las Golondrinas, Potrerillos, Mendoza",
    description: "Disfruta de una estadía única en Cabañas Las Golondrinas, rodeado de naturaleza y tranquilidad, con una vista panorámica sin obstrucciones de la Cordillera de los Andes.",
    images: "",  // Ruta a una imagen representativa
    url: "https://cabañaslasgolondrinas.com.ar", // dominio final
    type: "website",
    siteName: "Cabañas Las Golondrinas"
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-400`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
