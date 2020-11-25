// import withCSS from "@zeit/next-css";
// export default withCSS()

// module.exports = withCSS({
//   publicRuntimeConfig: {
//     APP_NAME: "GIPHY",
//     APP_DEVELOPMENT: "https://api.giphy.com/v1/gifs/search",
//     PRODUCTION: false,
//     API_KEY: "4ehJ726BPs10cGcXK4FrIlJAsjqPqywX",
//   },
// });
const withTM = require('next-transpile-modules')(['@zeit/next-css']);

module.exports = withTM();