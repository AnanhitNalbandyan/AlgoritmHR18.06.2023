    function maxSumSlidingWindow(arr, k) {
        const n = arr.length;
        if (k > n) {
        return null; // Обработка исключительной ситуации, если k больше размера массива
        }
    
        let maxSum = 0;
        let currentSum = arr.slice(0, k).reduce((sum, num) => sum + num, 0); // Инициализация текущей суммы
    
        for (let i = k; i < n; i++) {
        currentSum += arr[i] - arr[i - k]; // Обновляем текущую сумму, вычитая первый элемент окна
        maxSum = Math.max(maxSum, currentSum);
        }
    
        return maxSum;
    }
    
    // Пример использования
    const arr = [10, 20, 30, 40];
    const k = 2;
    const result = maxSumSlidingWindow(arr, k);
    console.log(result); // Выводит 70
    
    const arr2 = [1, 45, 2, 10, 23, 3, 1, 0, 20];
    const k2 = 4;
    const result2 = maxSumSlidingWindow(arr2, k2);
    console.log(result2); // Выводит 80