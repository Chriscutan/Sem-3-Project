export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "859c011ac9msh02fd1ce079af154p14538djsnbf59d373a056",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "859c011ac9msh02fd1ce079af154p14538djsnbf59d373a056",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
