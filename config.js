import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = "https://api.giphy.com/v1/gifs/search";
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const API_KEY = publicRuntimeConfig.API_KEY;
