const BASE_URL = 'http://localhost:3333';

// Получить все категории
export function getAllCategories() {
    return fetch(`${BASE_URL}/categories/all`)
        .then(response => response.json())
        .then(data => data);
}

// Получить все продукты
export function getAllProducts() {
    return fetch(`${BASE_URL}/products/all`)
        .then(response => response.json())
        .then(data => data);
}

// Получить продукты по id категории
export function getProductsByCategoryId(id) {
    return fetch(`${BASE_URL}/products/category/${id}`)
        .then(response => response.json())
        .then(data => data);
}

// Получить продукт по id
export function getProductById(id) {
    return fetch(`${BASE_URL}/products/${id}`)
        .then(response => response.json())
        .then(data => data);
}