import { FetchAPI } from './FetchAPI';
const RICKANDMORTYURL = 'https://rickandmortyapi.com/api/character';
export const RICKANDMORTY_CARDS_IN_RESPONSE = 20;
export const rickAndMortyAPI = new FetchAPI(RICKANDMORTYURL);
