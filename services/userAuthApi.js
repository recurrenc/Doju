import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
  reducerpath: 'userAuthApi',
  //   baseQuery: fetchBaseQuery({baseUrl: 'https://dojuapp.heroku.com/api/'}),
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.3:8000/api/user/'}),
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => {
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: user => {
        return {
          url: 'login',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
    }),
  }),
});

export const {useRegisterUserMutation, useLoginUserMutation} = userAuthApi;
