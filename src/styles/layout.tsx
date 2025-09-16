import Head from "next/head";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import SideNavbar from "@/components/SideNavbar/SideNavbar";

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
