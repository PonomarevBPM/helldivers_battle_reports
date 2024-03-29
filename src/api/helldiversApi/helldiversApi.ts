import { SectorsDTO } from '../../models/SectorDTO';
import { baseApi } from '../baseApi';

const helldiversApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSectors: builder.query<SectorsDTO, void>({
      query: () => ({ url: '/sectors' }),
    }),
  }),
});

export const { useGetSectorsQuery } = helldiversApi;
