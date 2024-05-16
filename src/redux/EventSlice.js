import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Events'],
  endpoints: builder => ({
    getEvents: builder.query({
      query: page => ({
        url: `/events?page=${page}&limit=4`,
        method: 'GET',
      }),
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
  useGetEventsQuery,
  useUpdateEventMutation,
  useGetEventByIdQuery,
} = eventsApi;
