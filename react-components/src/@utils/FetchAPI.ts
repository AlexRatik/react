export class FetchAPI {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }

  async fetchData<T>(): Promise<T> {
    const response = await fetch(this.url);
    return await response.json();
  }
  async fetchDataByName<T>(name: string): Promise<T> {
    const response = await fetch(`${this.url}?name=${name.toLowerCase()}`);
    return await response.json();
  }
  async fetchDataWithFilters<T>(
    searchParams: ISearchParams = { name: '', species: '', status: '' },
    page = 1
  ): Promise<T> {
    const response = await fetch(
      `${this.url}?status=${searchParams.status}&species=${searchParams.species}&name=${searchParams.name}&page=${page}`
    );
    return await response.json();
  }
}

export type ISearchParams = {
  name: string;
  species: string;
  status: string;
};
