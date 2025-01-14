import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coloshopApi = createApi({
    reducerPath: 'coloshopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllColoshop: builder.query({
            query: () => `coloshop`,
        }),
        getByID: builder.query({
            query: (id) => `coloshop/${id}`,
        }),
        deleteColoshop: builder.mutation({
            query: (id) => ({
                url: `coloshop/${id}`,
                method: 'DELETE'
            }),
        }),
        postColoshop: builder.mutation({
            query: (newColoshop) => ({
                url: `coloshop`,
                method: 'POST',
                body: newColoshop,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }),
        }),
    }),
})

export const { useGetAllColoshopQuery, useGetByIDQuery, useDeleteColoshopMutation, usePostColoshopMutation } = coloshopApi

