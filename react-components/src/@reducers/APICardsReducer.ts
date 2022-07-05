import { IRickAndMortyResult } from '@interfaces/IRickAndMorty';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@store/store';
import { RICKANDMORTY_CARDS_IN_RESPONSE, rickAndMortyAPI } from '@utils/FetchRickAndMorty';
import { IRickAndMorty } from '@interfaces/IRickAndMorty';
import { ISearchParams } from '@utils/FetchAPI';

export type dataInMemoryType = {
  page: number;
  keywords: string;
  filter: string;
  data: IRickAndMortyResult[];
};
type initialStateType = {
  dataInMemory: dataInMemoryType[];
  visibleCards: IRickAndMortyResult[];
  page: number;
  filter: string;
  limit: number;
  keywords: string;
  total: number;
  directlyCard: IRickAndMortyResult;
  error: string;
  isLoading: boolean;
};

const initialDirectlyCard: IRickAndMortyResult = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [''],
  url: '',
  created: '',
};

const initialState: initialStateType = {
  dataInMemory: [],
  visibleCards: [],
  page: 1,
  filter: 'name',
  limit: 20,
  keywords: '',
  total: 0,
  directlyCard: initialDirectlyCard,
  error: '',
  isLoading: false,
};

export const fetchAPIData = createAsyncThunk<
  IRickAndMortyResult[],
  void,
  { state: RootState; dispatch: AppDispatch; rejectValue: string }
>('APICards/fetchData', async function (_, { getState, dispatch, rejectWithValue }) {
  const { page, limit, dataInMemory, keywords, filter, total } = getState().APICardsReducer;
  const totalPages = Math.ceil(total / limit);
  const pageForFetch = determinePageNumberForFetching(
    limit,
    page,
    RICKANDMORTY_CARDS_IN_RESPONSE,
    totalPages
  );
  const { firstIndex, lastIndex } = determineFirstAndLastIndexForVisibleCards(
    limit,
    page,
    RICKANDMORTY_CARDS_IN_RESPONSE
  );
  const cachedData = dataInMemory.filter((dataInfo) => {
    return (
      dataInfo.page === pageForFetch && dataInfo.keywords === keywords && dataInfo.filter === filter
    );
  });
  if (cachedData.length) {
    return cachedData[0].data.slice(firstIndex, lastIndex);
  } else {
    const searchParams: ISearchParams = {
      name: '',
      species: '',
      status: '',
    };
    if (filter === 'name' || filter === 'species' || filter === 'status') {
      searchParams[filter] = keywords;
    }
    try {
      const response = await rickAndMortyAPI.fetchDataWithFilters<IRickAndMorty>(
        searchParams,
        pageForFetch
      );
      if (response.error) {
        return Promise.reject(Error('No cards there=('));
      }
      const dataForMemory: dataInMemoryType = {
        page: page,
        keywords: keywords,
        filter: filter,
        data: response.results || [],
      };
      dispatch(APICardsActions.pushDataInMemory(dataForMemory));
      dispatch(APICardsActions.setTotal(response.info!.count));
      return response.results!.slice(firstIndex, lastIndex);
    } catch (e) {
      const err = e as Error;
      return rejectWithValue(err.message);
    }
  }
});

const determinePageNumberForFetching = (
  limit: number,
  page: number,
  cardsInResponse: number,
  total: number
): number => {
  const maxPagesWithThisLimit = total * (cardsInResponse / limit);
  const currentPage = Math.ceil((limit * page) / cardsInResponse);
  return currentPage > maxPagesWithThisLimit ? maxPagesWithThisLimit : currentPage;
};

const determineFirstAndLastIndexForVisibleCards = (
  limit: number,
  page: number,
  cardsInResponse: number
): { firstIndex: number; lastIndex: number } => {
  const multiplier = (page - 1) % (cardsInResponse / limit);
  return { firstIndex: limit * multiplier, lastIndex: limit * (multiplier + 1) };
};

export const APICardsSlice = createSlice({
  name: 'APICards',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setKeywords(state, action: PayloadAction<string>) {
      state.keywords = action.payload;
    },
    setVisibleCards(state, action: PayloadAction<IRickAndMortyResult[]>) {
      state.visibleCards = action.payload;
    },
    setDirectlyCard(state, action: PayloadAction<IRickAndMortyResult>) {
      state.directlyCard = action.payload;
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    pushDataInMemory(state, action: PayloadAction<dataInMemoryType>) {
      state.dataInMemory = [...state.dataInMemory, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPIData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAPIData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = '';
      state.visibleCards = payload;
    });
    builder.addCase(fetchAPIData.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
      state.visibleCards = [];
    });
  },
});

export const APICardsReducer = APICardsSlice.reducer;
export const APICardsActions = APICardsSlice.actions;
