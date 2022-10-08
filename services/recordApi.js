import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getSession} from './AsyncStorage';

export const userAuthApi = createApi({
  reducerpath: 'recordApi',
  //   baseQuery: fetchBaseQuery({baseUrl: 'https://dojuapp.heroku.com/api/'}),
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.3:8000/api/record/'}),
  endpoints: builder => ({
    createRecord: builder.mutation({
      query: data => {
        return {
          url: 'create',
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${getSession()}`,
          },
        };
      },
    }),
    getAllRecord: builder.query({
      query: () => ({
        url: 'getAllRecord',
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const {useCreateRecordMutation, useGetAllRecordQuery} = userAuthApi;
