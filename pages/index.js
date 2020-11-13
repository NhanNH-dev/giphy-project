import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GirdImage from "../components/GirdImage";
import { API, API_KEY } from "../config";
import Head from "next/head";
function Index({ data }) {
  const router = useRouter();
  const handleClick = () => {
    console.log("chay ko", router);
  };
  return (
    <>
      <Head>
        <title>giphy</title>
      </Head>
      <Layout>
        <Header />
        <GirdImage listGif={data} />
        <button className="btn btn-primary" onClick={handleClick}>
          Fetch More
        </button>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { value, limit } = context.query;
  console.log('context===', context.query)
  const res = await fetch(`${API}?api_key=${API_KEY}&q=${value}&limit=${limit}`);
  const listGif = await res.json();
  const { data } = listGif;
  return {
    props: { data },
  };
}

export default Index;
