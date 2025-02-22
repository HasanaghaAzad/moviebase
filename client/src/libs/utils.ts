export const getRelativePageNumber = (pageOfPer10: number): number => {
  // to make pagination system work as 10 items per page while TMDB API works only with 20 per page
  const perPageInUI = 10; //not changeable. this method designed only for 10
  const perpageInAPI = 20; //not changeable. always 20.  TMDB rule.
  const ratio = perpageInAPI / perPageInUI;
  const pageOfPer20 = Math.ceil(pageOfPer10 / ratio);
  return pageOfPer20;
};

export const getRelativeDataPartition = (dataOfPer20: [], pageOfPer10: number) => {
  // to make pagination system work as 10 items per page while TMDB API works only with 20 per page
  const perPageInUI = 10; //not changeable. this method designed only for 10
  const perpageInAPI = 20; //not changeable. always 20.  TMDB rule.
  const ratio = perpageInAPI / perPageInUI; // as ratio is 2 there are 2 same size parts
  const shouldShowFirstPart = pageOfPer10 % ratio !== 0;

  const dataOfPer10 = shouldShowFirstPart ? dataOfPer20.slice(0, perPageInUI) : dataOfPer20.slice(perPageInUI);

  return dataOfPer10;
};
