import { getAllCategories, getProductsByCategoryId, getAllProducts } from "../services/baseBackEnd";
import { getRandomArray } from "./cardRenderLogic";

// Этап 1. Получить данные с сервера в зависимости от типа
export async function fetchData({ type, quantity, applyFilter, filterOptions, id = 0 }) {
    let data;

    // Выбираем API-запрос в зависимости от типа
    if (type === "categories") {
        data = await getAllCategories();
    } else if (type === "productsFromCategory") {
        data = await getProductsByCategoryId(id)
            .then(response => response.data);
        //массив пришлось "развернуть",
        // т.к. возвращается объект с полем data, содержащим нужный массив.
    } else if (type === "productsAll") {
        data = await getAllProducts();
    } else if (type === "sales") {
        data = await getAllProducts();
        data = data.filter(item => item.discont_price !== null);
    } else if (type === "randomSales") {
        data = await getAllProducts();
        // сразу фильтруем товары со скидкой
        data = data.filter(item => item.discont_price !== null);

        if (quantity !== 0) {
            data = getRandomArray(data, quantity);
        }
    }

    if (type !== "randomSales" && quantity !== 0) {
        data = data.slice(0, quantity);
    }

    // Если включена фильтрация, применяем фильтры и сортировку
    // см. applyFilterLogic
    if (applyFilter && filterOptions) {
        data = applyFilterLogic(data, filterOptions);
    }

    return data;
}

// Применяем фильтрацию и сортировку
export function applyFilterLogic(data, filterOptions) {
    // Создаем буферный массив, добавляя каждому элементу поле effectivePrice
    // effectivePrice - это цена со скидкой, если она есть, иначе обычная цена
    // Это нужно для фильтрации по диапазону цен
    const bufferedData = data.map(item => ({
        ...item,
        effectivePrice: item.discont_price !== null ? item.discont_price : item.price
    }));

    let filteredData = bufferedData;

    // Фильтрация по диапазону цен с использованием effectivePrice
    if (filterOptions.minPrice) {
        filteredData = filteredData.filter(item => item.effectivePrice >= filterOptions.minPrice);
    }
    if (filterOptions.maxPrice) {
        filteredData = filteredData.filter(item => item.effectivePrice <= filterOptions.maxPrice);
    }

    // Фильтрация по наличию скидки
    if (filterOptions.discontOnly) {
        filteredData = filteredData.filter(item => item.discont_price !== null);
    }

    // Сортировка
    if (filterOptions.sort === "price:low-high") {
        filteredData.sort((a, b) => a.effectivePrice - b.effectivePrice);
    } else if (filterOptions.sort === "price:high-low") {
        filteredData.sort((a, b) => b.effectivePrice - a.effectivePrice);
    } else if (filterOptions.sort === "alphabetical") {
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filteredData;
}
