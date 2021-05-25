import { call, put, takeEvery } from 'redux-saga/effects'

const apiURL = 'https://jsonplaceholder.typicode.com/users'

const getData= () => {
    return fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
    .catch(err => {throw err})
}


function* fetchUsers() {
    try {
        const users = yield call(getData)
        yield put({type: 'GET_USERS_SUCCESS', users: users})
    } catch (e) {
        yield put({type: 'GET_USERS_FAILED', message: e.message})
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default userSaga