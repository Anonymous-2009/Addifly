// features/users/usersApiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UsersResponse } from '../../utils/types/users.types';
import { AddFormData } from '../../validation';
import { AddUserResponse } from '../../utils/types/add.types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'crud/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => 'users',
    }),
    // Add user mutation (for POST request)
    addUser: builder.mutation<AddUserResponse, AddFormData>({
      query: (newUser) => ({
        url: 'create',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useAddUserMutation } = usersApi;
