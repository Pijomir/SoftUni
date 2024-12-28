import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/data/cyberpunk?sortBy=_createdOn%20desc',
    itemToSell: '/data/cyberpunk',
    itemById: '/data/cyberpunk/'
}

export async function getAllItemsToSell() {
    return get(endpoints.dashboard);
}

export async function getItemById(id) {
    return get(endpoints.itemById + id);
}

export async function createItem(item, imageUrl, price, availability, type, description) {
    return post(endpoints.itemToSell, {
        item,
        imageUrl, 
        price, 
        availability,
        type,
        description
    });
}
export async function updateItem(id, data) {
    return put(endpoints.itemById + id, data);
}

export async function deleteItem(id) {
    return del(endpoints.itemById + id);
}
