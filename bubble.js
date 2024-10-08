// Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array.

function bubbleSort(arr) {
    const sort = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                sort(arr, j, j + 1);
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;