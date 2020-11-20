import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../node_modules/nprogress/nprogress.css";
import dynamic from "next/dynamic";
import Head from "next/head";
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false }
);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script type="module"></script>
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}
