import axios from 'axios'

const app = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default app
