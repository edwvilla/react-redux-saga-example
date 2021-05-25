import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/users'
import CardComponent from './CardComponent'

const UserComponent = (props) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <>
            {loading && <p>Loading...</p>}
            {users.length > 0 && users.map((user) => {
                   return <CardComponent key={user.id} user={user} />
                })}
            {users.length === 0 && !loading && <p>there are no users</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default UserComponent
