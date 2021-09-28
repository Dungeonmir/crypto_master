import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    /*... */
}
const baseUrl = 'https://api.coinpaprika.com/v1/';

export const cryptoApi = createApi({
reducerPath: 'cryptoApi', 
baseQuery: fetchBaseQuery({baseUrl}),
endpoints:(builder)=>({
    getGlobalStats: builder.query({
        query:()=>'/global'
    }),
    getCoins: builder.query({
        query:()=>'/coins'
    })
})
});

export const {
    useGetCoinsQuery, useGetGlobalStatsQuery
} = cryptoApi;
/*
https://api.coinpaprika.com/v1/coins

*/