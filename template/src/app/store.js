import {configureStore} from '@reduxjs/toolkit';
// import your reducers here, for example:
// import userReducer from '../slices/userSlice';

const store = configureStore({
    reducer: {
        // add your reducers here, for example:
        // user: userReducer,
    },
});

export default store;