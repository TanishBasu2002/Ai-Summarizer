import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const articleAPI = createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','306fa2f339msh9991a49b63a92e9p1df88fjsnfc64ce36221b');
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }

    }),
    endpoints:(builder)=>({
        getSummary: builder.query({
            query:(params)=>`/summarize?url=${
           encodeURIComponent(params.articleUrl) }&length=3`
        })
    })
});
export const {useLazyGetSummaryQuery} = articleAPI;