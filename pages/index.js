import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GirdImage from "../components/GirdImage";
import { API, API_KEY } from "../config";
import Head from "next/head";

const QUANTITY_PER_PAGE = 8;
let arrayForHoldingPosts = [];

function Index({ data }) {
  const router = useRouter();
  const [next, setNext] = useState(8);
  const [saveImgLocalStorage, setSaveImgLocalStorage] = useState([]);
  const [arrToShow, setArrToShow] = useState([]);
  const [fetchImgFromUrl, setFetchImgFromUrl] = useState(data);
  const [success, setSuccess] = useState(false);

  const handleClick = (item) => {
    if (saveImgLocalStorage.indexOf(item) == -1) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
      return setSaveImgLocalStorage((state) => [...state, item]);
    }
  };
  const loopWithSlice = (start, end) => {
    const slicedPosts = fetchImgFromUrl.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setArrToShow(arrayForHoldingPosts);
  };
  const getLocalStorage = () => {
    const valueLocalStorage = JSON.parse(
      window.localStorage.getItem("my-favorite" || [])
    );
    if (valueLocalStorage && valueLocalStorage.length > 0) {
      setSaveImgLocalStorage(valueLocalStorage);
    }
    return;
  };
  const handleShowMorePicture = () => {
    loopWithSlice(next, next + QUANTITY_PER_PAGE);
    setNext(next + QUANTITY_PER_PAGE);
  };

  useEffect(() => {
    getLocalStorage();
    loopWithSlice(0, QUANTITY_PER_PAGE);
  }, []);

  useEffect(() => {
    setFetchImgFromUrl(data);
  }, [data]);

  useEffect(() => {
    window.localStorage.setItem(
      "my-favorite",
      JSON.stringify(saveImgLocalStorage)
    );
  }, [saveImgLocalStorage]);
  return (
    <>
      <Head>
        <title>giphy</title>
      </Head>
      <Layout>
        <Header />
        {success && (
          <div className="alert alert-success" role="alert">
            Add Successfully!
          </div>
        )}
        <GirdImage listGif={arrToShow} handleClick={handleClick} />
        {next < fetchImgFromUrl.length && (
          <button
            className="btn btn-primary"
            disabled={false}
            onClick={handleShowMorePicture}
          >
            Fetch More
          </button>
        )}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { value } = context.query;
  const res = await fetch(`${API}?api_key=${API_KEY}&q=${value}`);
  const listGif = await res.json();
  const { data } = listGif;
  return {
    props: { data },
  };
}

export default Index;
