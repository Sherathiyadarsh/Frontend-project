import axios from "axios"
import { get } from "react-hook-form"

const BASE_URL_USERS = "https://6663dc9c932baf9032a92f34.mockapi.io/users";
const BASE_URL_PRODUCTS = "https://6663dc9c932baf9032a92f34.mockapi.io/products"

export let axiosfetchdata = () => axios.get(BASE_URL_PRODUCTS)
export let axiosdeletedata = (id) => axios.delete(`${BASE_URL_PRODUCTS}/${id}`)
// export let axiospostdata = (product)=>axios.post(BASE_URL_PRODUCTS,product)

export let fetchpostdata = (product) => {
    return fetch(BASE_URL_PRODUCTS, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(product)
    })
}

export let fetchputdata = (id, product) => {
    return fetch(`${BASE_URL_PRODUCTS}/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(product)
    })
}

export let fetchbyid = (id) => {
    return fetch(`https://6663dc9c932baf9032a92f34.mockapi.io/products/${id}`)

}

export const registerUser = async (userData) => {
    return axios.post(BASE_URL_USERS, userData);
}
export const loginUser = async (email) => {
    return axios.get(`${BASE_URL_USERS}?email=${email}`);
};