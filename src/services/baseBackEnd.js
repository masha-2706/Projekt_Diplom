export const BASE_URL = "https://telran-project-backend-a392.onrender.com";

// Получить все категории
export function getAllCategories() {
  return (
    fetch(`${BASE_URL}/categories/all`)
      .then((response) => {
        // проверяем прошел запрос или нет, с помощью response.ok
        if (!response.ok) {
          throw new Error(
            `Ошибка запроса HTTP: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      // проверяем полученные данные, массив это или нет
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error(
            `Некорректный формат данных: ожидался массив категорий`
          );
        }
        return data;
      })
      .catch((error) => {
        console.error("Ошибка при получении категорий:", error);
        throw error; // Пробрасываем ошибку дальше для обработки в вызывающем коде
      })
  );
}

// Получить продукты по id категории
export function getProductsByCategoryId(id) {
  return (
    fetch(`${BASE_URL}/categories/${id}`)
      .then((response) => {
        // проверяем прошел запрос или нет, с помощью response.ok
        if (!response.ok) {
          throw new Error(
            `Ошибка запроса HTTP: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data.data)) {
          throw new Error(
            "Некорректный формат данных: ожидался массив продуктов по категориям"
          );
        }
        return data;
      })
      .catch((error) => {
        console.error("Ошибка при получении продуктов по категории:", error);
        throw error;
      })
  );
}

// Получить все продукты
export function getAllProducts() {
  return (
    fetch(`${BASE_URL}/products/all`)
      .then((response) => {
        // проверяем прошел запрос или нет, с помощью response.ok
        if (!response.ok) {
          throw new Error(
            `Ошибка запроса HTTP: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      // проверяем полученные данные, массив это или нет
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error(
            `Некорректный формат данных: ожидался массив всех продуктов`
          );
        }
        return data;
      })
  );
}

// Получить продукт по id
export function getProductById(id) {
  return fetch(`${BASE_URL}/products/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Ошибка запроса HTTP: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error(
          `Некорректный формат данных: ожидался массив с информацией о продукте по id`
        );
      }
      return data;
    });
}

//получить все скидки
export function getAllDiscounts() {
  return fetch(`${BASE_URL}/products/all`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Ошибка запроса HTTP: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error(
          `Некорректный формат данных: ожидался массив продуктов со скидками`
        );
      }
      return data.filter((item) => item.discont_price !== null);
    });
}
