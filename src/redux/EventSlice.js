import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Events'],
  endpoints: builder => ({
    getEvents: builder.query({
      query: () => '/events',
      providesTags: ['Events'],
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
