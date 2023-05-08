import iGenre from "./genre";


export default interface iTvInfo{
  id: number,
  genres: iGenre[],
  number_of_seasons: number,
  name: string,
  original_name: string,
  backdrop_path: string,
  vote_average: number,
  overview: string,
  first_air_date: string,
}