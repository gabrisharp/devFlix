import axios from 'axios';
import iMovie from './types/movie';

const ID_NETFLIX = 213; //network id to netflix
const ID_ACTION = 28;
const ID_COMEDY = 35;
const ID_TERROR = 27; 
const ID_ROMANCE = 10749;
const ID_DOCUMENTARY = 99;

console.log({
  baseURL: import.meta.env.VITE_API_BASE,
  key: import.meta.env.VITE_API_KEY
})

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers:{
    Authorization: `bearer ${import.meta.env.VITE_API_KEY}`
  }
})

async function basicRequest (endpoint: string): Promise<iMovie>{
  let response = await Axios.get(`${endpoint}`,{
    params:{
      language:'pt-BR'
    }
  });
  return response.data;
}

export default {
  getHomeList: async () =>{
    return [
      {
        slug: 'netflix originals',
        title: 'Netflix',
        items: await basicRequest(`/discover/tv?with_nework=${ID_NETFLIX}`)
      }, 
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicRequest('/trending/all/week')
      },
      {
        slug: 'top rated',
        title: 'Em Alta',
        items: await basicRequest('/movie/top_rated')
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicRequest(`/discover/movie?with_genres=${ID_ACTION}`)
      }, 
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicRequest(`/discover/movie?with_genres=${ID_COMEDY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicRequest(`/discover/movie?with_genres=${ID_TERROR}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicRequest(`/discover/movie?with_genres=${ID_ROMANCE}`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicRequest(`/discover/movie?with_genres=${ID_DOCUMENTARY}`)
      }
    ]
  }
}

