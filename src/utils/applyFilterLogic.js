export function applyFilterLogic(data, filterOptions) {
    // Создаем копию массива для немутирующей фильтрации
    let filteredData = [...data];

    // Фильтрация по диапазону цен (actualPrice)
    if (filterOptions.minPrice) {
        const min = Number(filterOptions.minPrice);
        filteredData = filteredData.filter(item => item.actualPrice >= min);
    }
    if (filterOptions.maxPrice) {
        const max = Number(filterOptions.maxPrice);
        filteredData = filteredData.filter(item => item.actualPrice <= max);
    }

    // Фильтрация по наличию скидки
    if (filterOptions.discontOnly) {
        filteredData = filteredData.filter(item => item.discontPrice !== null);
    }

    // Сортировка
    if (filterOptions.sort === "price:low-high") {
        filteredData.sort((a, b) => a.actualPrice - b.actualPrice);
    } else if (filterOptions.sort === "price:high-low") {
        filteredData.sort((a, b) => b.actualPrice - a.actualPrice);
    } else if (filterOptions.sort === "alphabetical") {
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filteredData;
}
