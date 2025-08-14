var pivotIndex = function (nums) {
    let pivot = 0;

    while (pivot < nums.length) {
        let left = 0; let right = 0;
        for (let i = 0; i < pivot; i++) {
            left += nums[i];
        }
        for (let i = pivot + 1; i < nums.length; i++) {
            right += nums[i];
        }
        if (left == right) {
            return pivot;
        }
        pivot++;
    }
    return -1;
};

nums = [1, 2, 3];

console.log(pivotIndex(nums));