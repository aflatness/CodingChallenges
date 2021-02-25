//Sorting algorithms

//Bubble sort
const bubbleSort = (arr, changed = false) => {
  arr.forEach((v, i) => {
    if (v > arr[i + 1]) {
      changed = true;
      arr[i] = arr[i + 1];
      arr[i + 1] = v;
    }
  })
  return changed ? bubbleSort(arr, false) : arr;
}

//Insertion sort
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > val) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = val;
  }
}