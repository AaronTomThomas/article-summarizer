import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

//we are configuring a store, a global state, which saves all the information
//of our application
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});