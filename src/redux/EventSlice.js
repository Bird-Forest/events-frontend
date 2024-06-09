import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'events',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://events-backend-ybfh.onrender.com',
  }),
  tagTypes: ['Events'],
  endpoints: builder => ({
    getEventsAll: builder.query({
      query: () => '/events/all',
      providesTags: ['Events'],
    }),
    getEvents: builder.query({
      query: ({ param1, param2, param3, page }) => ({
        url: `/events?page=${page}&limit=4`,
        method: 'GET',
        params: {
          organizer: param1,
          title: param2,
          date: param3,
        },
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
  useGetEventsAllQuery,
  useGetEventsQuery,
  useUpdateEventMutation,
  useGetEventByIdQuery,
} = eventsApi;
