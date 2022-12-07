/** @format */

import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref } from 'firebase/database';

const BASE_URL = 'https://hacker-news.firebaseio.com';
const BASE_REF = 'v0';

const app = initializeApp({ databaseURL: BASE_URL });
const dbRef = ref(getDatabase(app), BASE_REF);

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getItemById: build.query({
      async queryFn(id) {
        try {
          const dataRef = child(dbRef, `item/${id}`);
          const snapshot = await get(dataRef);
          return { data: snapshot.val() };
        } catch (error) {
          return { error };
        }
      },
    }),
    getStoryIdsByType: build.query({
      async queryFn(type) {
        try {
          const dataRef = child(dbRef, `${type}stories`);
          const snapshot = await get(dataRef);
          return { data: snapshot.val() };
        } catch (error) {
          return { error };
        }
      },
    }),
    getUserById: build.query({
      async queryFn(id) {
        try {
          const dataRef = child(dbRef, `user/${id}`);
          const snapshot = await get(dataRef);
          return { data: snapshot.val() };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
  reducerPath: 'api',
});

export const {
  useGetItemByIdQuery,
  useGetStoryIdsByTypeQuery,
  useGetUserByIdQuery,
} = api;
