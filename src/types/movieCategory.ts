import iMovie from './movie';

export default interface iMovieCategory{
  slug: string,
  title: string,
  items: {results: iMovie[]}
}