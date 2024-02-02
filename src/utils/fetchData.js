export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d382c6219dmsh17d3362586704cfp10de91jsnfc58caea0a94",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d382c6219dmsh17d3362586704cfp10de91jsnfc58caea0a94",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
