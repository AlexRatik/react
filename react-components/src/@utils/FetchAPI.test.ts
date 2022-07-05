import { FetchAPI, ISearchParams } from './FetchAPI';
import { IRickAndMorty } from '@interfaces/IRickAndMorty';

const URL = 'https://rickandmortyapi.com/api/character';
const FetchService = new FetchAPI(URL);
const searchParams: ISearchParams = {
  name: 'rick',
  status: 'dead',
  species: '',
};
const page = 2;
const URL_WITH_SEARCH_PARAMS_AND_PAGE = `${URL}?status=${searchParams.status}&species=${searchParams.species}&name=${searchParams.name}&page=${page}`;

describe('Fetching Test', () => {
  test('Fetching all ', async () => {
    const data = await FetchService.fetchData<IRickAndMorty>();
    const response = await fetch(URL);
    const body = await response.json();
    expect(data).toStrictEqual(body);
  });
  test('Fetching  by name', async () => {
    const data = await FetchService.fetchDataByName<IRickAndMorty>('rick');
    const response = await fetch(URL + '?name=rick');
    const body = await response.json();
    expect(data).toStrictEqual(body);
  });
  test('Fetching  by name with error', async () => {
    const data = await FetchService.fetchDataByName<IRickAndMorty>('abdulgora');
    const response = await fetch(URL + '?name=abdulgora');
    const body = await response.json();
    expect(data).toStrictEqual(body);
  });
  test('Fetching  with search params and page', async () => {
    const data = await FetchService.fetchDataByNameAndPage<IRickAndMorty>(searchParams, page);
    const response = await fetch(URL_WITH_SEARCH_PARAMS_AND_PAGE);
    const body = await response.json();
    expect(data).toStrictEqual(body);
  });
});
