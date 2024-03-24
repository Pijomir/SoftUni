import { del, get, post, put } from "./request.js"

const endpoints = {
    dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
    motorcycle: '/data/motorcycles',
    motorcycleById: '/data/motorcycles/'
}

export async function getAllMotorcycles() {
    return get(endpoints.dashboard);
}

export async function getMotorcycleById(id) {
    return get(endpoints.motorcycleById + id);
}

export async function createMotorcycle(model, imageUrl, year, mileage, contact, about) {
    return post(endpoints.motorcycle, {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    });
}

export async function updateMotorcycle(id, data) {
    return put(endpoints.motorcycleById + id, data);
}

export async function deleteMotorcycle(id) {
    return del(endpoints.motorcycleById + id);
}