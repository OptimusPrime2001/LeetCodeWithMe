// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
function moveZeroes(nums: number[]): void {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero++] = nums[i];
    }
  }
  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log('nums', nums)
}
moveZeroes([0,1,0,3,12]);