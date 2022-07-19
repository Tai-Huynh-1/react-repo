import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/profileUser/profileUserActions"


const useProfileUser = (userId) => {
    const dispatch = useDispatch()
    const profileUser = useSelector(state => state.profileUser)
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(({ data }) => dispatch(setUser(data)))
        .catch(err => console.log(err))
    }, [userId, dispatch, setUser])

    return profileUser
}

export default useProfileUser