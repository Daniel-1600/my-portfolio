import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import SideNavbar from "@/components/SideNavbar/SideNavbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-Space_Grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-IBM_Plex_Mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Daniel Mungai • Portfolio</title>
        <meta
          name="description"
          content="Daniel mungai personal portfolio showcasing projects, skills, and experience."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <div className="flex items-start w-full">
        <SideNavbar />
        <div className="w-full lg:flex-1">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
