import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://events-backend-ybfh.onrender.com',
  // }),
  tagTypes: ['Events'],
  endpoints: builder => ({
    getEventsAll: builder.query({
      query: () => '/events/all',
      providesTags: ['Events'],
    }),
    getEvents: builder.query({
      query: page => `/events?page=${page}&limit=4`,
      providesTags: ['Events'],
    }),
    getEventsFilter: builder.query({
      query: query => `/events/filter?organizer=${query}`,
      providesTags: ['Events'],
    }),
    getEventById: builder.query({
      query: id => ({
        url: `/events/${id}`,
        method: 'GET',
      }),
      providesTags: ['Events'],
    }),
    updateEvent: builder.mutation({
      query: ({ id, newData }) => ({
        url: `/events/${id}`,
        method: 'PUT',
        body: newData,
      }),
      invalidatesTags: ['Events'],
    }),
  }),
});

export const {
  useGetEventsAllQuery,
  useGetEventsQuery,
  useUpdateEventMutation,
  useGetEventByIdQuery,
  useGetEventsFilterQuery,
} = eventsApi;