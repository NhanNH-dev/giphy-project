import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.APP_DEVELOPMENT;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const API_KEY = publicRuntimeConfig.API_KEY;
