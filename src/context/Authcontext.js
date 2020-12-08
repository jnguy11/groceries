import React, { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthReducer(state, action) {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                token: action.store.token,
                id: action.store.id,
            };
        case 'LOGIN':
            return {
                ...state,
                token: action.store.token,
                id: action.store.id,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                id: null,
                userPic: null,
                permission: null
            };
    };
}
