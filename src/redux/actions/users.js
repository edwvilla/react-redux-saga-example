import * as types from '../types'

export const getUsers = (users) => {
    return {
        type: types.GET_USERS_REQUESTED,
        payload: users
    }
}