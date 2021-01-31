import axios from 'axios'

const app = axios.create({
    baseURL: 'localhost:3000'
})

export default app