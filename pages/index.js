import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GirdImage from "../components/GirdImage";
import { API, API_KEY } from "../config";
import Head from "next/head";

const QUANTITY_PER_PAGE = 2;

function Index({ data }) {
  const router = useRouter();
  const [next, setNext] = useState(2);
  const [saveImgLocalStorage, setSaveImgLocalStorage] = useState([]);
  const [fetchImgFromUrl, setFetchImgFromUrl] = useState([]);
  const [success, setSuccess] = useState(false);
  //save img to myfavorite
  const handleClick = (item) => {
    if (saveImgLocalStorage.indexOf(item) == -1) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
      return setSaveImgLocalStorage((state) => [...state, item]);
    }
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
    setNext(next + QUANTITY_PER_PAGE);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setFetchImgFromUrl(data);
    setNext(QUANTITY_PER_PAGE);
  }, [data]);

  useEffect(() => {
    window.localStorage.setItem(
      "my-favorite",
      JSON.stringify(saveImgLocalStorage)
    );
  }, [saveImgLocalStorage]);
  return (
    <React.Fragment>
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
        <GirdImage
          listGif={fetchImgFromUrl.slice(0, next)}
          handleClick={handleClick}
        />
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
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { value } = context.query;
  const res = value
    ? await fetch(`${API}?api_key=${API_KEY}&q=${value}`)
    : await fetch(`${API}?api_key=${API_KEY}&q=''`);
  const listGif = await res.json();
  const { data } = listGif;
  return {
    props: { data },
  };
}

export default Index;
