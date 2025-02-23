export type Movie = {
  id: number;
  title: string;
  posterUrl: string | null;
  description: string;
};

export type MovieList = {
  page: number;
  movies: Movie[];
  totalPages: number;
  totalResults: number;
};

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};
