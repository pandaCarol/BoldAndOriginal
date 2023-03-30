import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hasAds: false,
    url: '',
    painPoints: '',
    package: ''
}

const usersSlice = createSlice({
    name: 'users', 
    initialState,
    reducers: {
        userAdded: {

        }
    }
})