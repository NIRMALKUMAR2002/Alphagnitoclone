import axios from "axios"

const privateAPI  = axios.create({
    baseUrl:"https://fakestoreapi.com"
})

export default privateAPI