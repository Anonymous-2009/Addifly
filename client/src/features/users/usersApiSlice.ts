// features/users/usersApiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UsersResponse } from '../../utils/types/users.types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'crud/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => 'users',
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
