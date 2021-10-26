import axios from "axios";

const getUserComments = async (id) => {
    const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return res?.data
}

export default getUserComments