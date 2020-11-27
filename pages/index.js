import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GirdImage from "../components/GirdImage";
import { API, API_KEY } from "../config";
import Head from "next/head";

const QUANTITY_PER_PAGE = 4;

function Index({ data }) {
  const router = useRouter();
  const [next, setNext] = useState(4);
  const [saveImgLocalStorage, setSaveImgLocalStorage] = useState([]);
  const [fetchImgFromUrl, setFetchImgFromUrl] = useState([]);
  const [lengthData, setLengthData] = useState(data.length);
  //save img to myfavorite
  const handleAddImgToFavorite = (item) => {
    if (saveImgLocalStorage.indexOf(item) == -1) {
      showSuccess();
      return setSaveImgLocalStorage((state) => [...state, item]);
    }
  };
  const showSuccess = () => {
    var x = document.getElementById("myNotification");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
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
    setLengthData(lengthData - QUANTITY_PER_PAGE);
  };

  useEffect(() => {
    setLengthData(data.length - QUANTITY_PER_PAGE);
    getLocalStorage();
  }, []);

  useEffect(() => {
    setFetchImgFromUrl(data);
    setLengthData(data.length - QUANTITY_PER_PAGE);
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
        <div className="alert alert-success" id="myNotification" role="alert">
          Add Successfully!
        </div>
        <GirdImage
          listGif={fetchImgFromUrl.slice(0, next)}
          handleClick={handleAddImgToFavorite}
        />
        {fetchImgFromUrl.length < 1 && (
          <div className="indexPage-emptyImg">
            <h3 className="indexPage-text">Look it up here! :) </h3>
          </div>
        )}
        {next < fetchImgFromUrl.length && (
          <button
            className="btn btn-primary"
            disabled={false}
            onClick={handleShowMorePicture}
          >
            Fetch More ({lengthData})
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
