import React from 'react';

export const isAuthenticated =()=>{
    if(localStorage.getItem('jwt')){
        return localStorage.getItem('jwt')
    } else{
        return false
    }
}