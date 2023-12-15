import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  tagTypes: ["incomedetails", "expensedetails"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-database.onrender.com/",
  }),
  endpoints: (builder) => ({
    GetIncome: builder.query({
      query: () => ({
        url: "income",
        method: "GET",
      }),
      providesTags: ["incomedetails"],
    }),
    GetExpense: builder.query({
      query: () => ({
        url: "expense",
        method: "GET",
      }),
      providesTags: ["expensedetails"],
    }),
    getIncomeById: builder.query({
      query: (id) => ({
        url: `income/${id}`,
        method: "GET",
      }),
    }),
    getExpenseById: builder.query({
      query: (id) => ({
        url: `expense/${id}`,
        method: "GET",
      }),
    }),
    createIncome: builder.mutation({
      query: (newIncome) => ({
        url: "income",
        method: "POST",
        body: newIncome,
      }),
      invalidatesTags: ["incomedetails"],
    }),
    createExpense: builder.mutation({
      query: (newExpense) => ({
        url: "expense",
        method: "POST",
        body: newExpense,
      }),
      invalidatesTags: ["expensedetails"],
    }),
    deleteIncome: builder.mutation({
      query: (id) => ({
        url: `income/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["incomedetails"],
    }),
    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `expense/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["expensedetails"],
    }),
  }),
});

export const {
  useGetIncomeQuery,
  useGetExpenseQuery,
  useGetIncomeByIdQuery,
  useGetExpenseByIdQuery,
  useCreateIncomeMutation,
  useCreateExpenseMutation,
  useDeleteExpenseMutation,
  useDeleteIncomeMutation,
} = expenseApi;
