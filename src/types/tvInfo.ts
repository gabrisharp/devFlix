import iGenre from "./genre";


export default interface iTvInfo{
  genres: iGenre[],
  title: string,
  number_of_seasons: number,
  name: string,
  original_name: string,
  backdrop_path: string,
  vote_avarage: number,
}