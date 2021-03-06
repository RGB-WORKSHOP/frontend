import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reducer from './modules/index'

import logger from 'redux-logger'

const makeStore = (context: any) =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    })

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
})
