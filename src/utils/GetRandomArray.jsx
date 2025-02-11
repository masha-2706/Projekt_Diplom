 // функция возвращает N случайных и неповторяющихся элементов массива    
 // можно вынести логику в отдельный файл, тогда не забыть импортировать
export const getRandomArray = (array, n) => {
    const result = [];
    const usedIndices = [];
  
    while (result.length < n && result.length < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!usedIndices.includes(randomIndex)) {
        usedIndices.push(randomIndex);
        result.push(array[randomIndex]);
      }
    }
  
    return result;
  };