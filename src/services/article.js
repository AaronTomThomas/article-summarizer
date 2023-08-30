//This imports the necessary functions from the Redux Toolkit
// library for creating an API client and handling queries.


import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Fetch the RapidAPI key from environment variables

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


// Create an API client using createApi
export const articleApi = createApi({
    // Name of the slice for the generated Redux reducer
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        //which API to call
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }

    }),

    endpoints: (builder) => ({
         getSummary: builder.query({
              query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
          })
     })
              
   
});


export const {useLazyGetSummaryQuery} = articleApi;

