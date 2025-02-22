export interface MovieDTO {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MovieListDTO {
  page: number;
  results: MovieDTO[];
  total_pages: number;
  total_results: number;
}
