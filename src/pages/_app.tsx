import "@/globals.css";
// import "../../../styles/loader.css";
import type { AppProps } from "next/app";
import RootLayout from "@/styles/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
