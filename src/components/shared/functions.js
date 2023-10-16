import { API_KEY } from "./apikey"
import { API_ENDPOINT, SEARCH_ENDPOINT } from "./constant"

export const get_images = async (page='') => {
    return await fetch(API_ENDPOINT + "&" + page, {
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => undefined)
}

export const search_images = async (query, page=1) => {
    return await fetch(SEARCH_ENDPOINT + query + "&page=" + page, {
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => undefined)
}