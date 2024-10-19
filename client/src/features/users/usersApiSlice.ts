// features/users/usersApiSlice.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UsersResponse } from '../../utils/types/users.types';
import { AddFormData } from '../../validation';
import {
  AddUserResponse,
  DeleteUserResponse,
  FindUserResponse,
} from '../../utils/types/crud.types';

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
    // Delete user mutation (for POST request)
    deleteUser: builder.mutation<DeleteUserResponse, { name: string }>({
      query: (userData) => ({
        url: 'delete', // Assuming your delete route is '/crud/delete'
        method: 'DELETE', // Assuming it's a POST request
        body: userData,
      }),
    }),
    // Find user by name mutation
    findUserByName: builder.mutation<FindUserResponse, { name: string }>({
      query: (userData) => ({
        url: 'find', // Assuming your find route is '/crud/find'
        method: 'POST', // Assuming it's a POST request
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useFindUserByNameMutation,
} = usersApi;
