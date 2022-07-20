import { useState,useEffect } from "react";

const useGetComments = (commentId) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((response) => {
            response.json()
            .then(result => setComment(result))
        })
        .catch((err) => console.log(err)) ;
    }, [commentId])

    return comment
}

export default useGetComments