import axios from 'axios'

const Instance = axios.create({
    baseURL: 'https://dummyjson.com',
})

export default Instance