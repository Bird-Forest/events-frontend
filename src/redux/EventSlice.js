import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Events'],
  endpoints: builder => ({
    getEventsAll: builder.query({
      query: () => '/events/all',
      providesTags: ['Event'],
    }),
    getEvents: builder.query({
      query: page => `/events?page=${page}&limit=4`,
      providesTags: ['Event'],
    }),
    getEventsCategory: builder.query({
      query: search => `/events/${search}`,
      providesTags: ['Event'],
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
  useGetEventsCategoryQuery,
} = eventsApi;
