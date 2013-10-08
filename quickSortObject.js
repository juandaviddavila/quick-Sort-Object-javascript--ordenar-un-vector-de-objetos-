var QuickSortObject = (function () {

/**
   * Swaps two values in the heap
   *
   * @param {int} indexA Index of the first item to be swapped
   * @param {int} indexB Index of the second item to be swapped
   */
function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

  /**
   * Partitions the (sub)array into values less than and greater
   * than the pivot value
   *
   * @param {Array} array The target array
   * @param {int} pivot The index of the pivot
   * @param {int} left The index of the leftmost element
   * @param {int} left The index of the rightmost element
   */
function partition(items,objeto,order, left, right) {

    var pivot = items[Math.floor((right + left) / 2)][objeto];
        i = left,
        j = right;

    while (i <= j) {

        if (order == 'ASC') {
            while (items[i][objeto] < pivot) {
                i++;
            }

            while (items[j][objeto] > pivot) {
                j--;
            }
        }
        else {
            while (items[i][objeto] > pivot) {
                i++;
            }

            while (items[j][objeto] < pivot) {
                j--;
            }
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
/**
   * QuickSortObject the (sub-)array
   *
   * @param {Array} array The target array
   * @param {int} left The index of the leftmost element, defaults 0
   * @param {int} left The index of the rightmost element,
   defaults array.length-1
   */
function quickSortObject(items, objeto, order, left, right) {

    order = order == undefined ? 'ASC' : order.toUpperCase();
    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = partition(items, objeto,order, left, right);

        if (left < index - 1) {
            quickSortObject(items, objeto, order, left, index - 1);
        }

        if (index < right) {
            quickSortObject(items, objeto, order, index, right);
        }

    }

    return items;
}

 return {
     quickSortObject: quickSortObject
  };
})();
