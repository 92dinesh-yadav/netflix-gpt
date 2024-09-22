export const APP_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_AVTAR_URL =
  "https://avatars.githubusercontent.com/u/19631177?s=400&u=e58e64dac6fb9062bdcf84c6e0cd0f6d7bb2903e&v=4";

export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_SECRET_KEY,
  },
};

export const TMDB_CDN_IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

export const SUPPOERED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const OPEN_AI_SCRET_KEY = process.env.REACT_APP_OPEN_AI_SCRET_KEY;
