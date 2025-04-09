/*
#1004. Max Consecutive Ones III
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Ý tưởng : 
✅ Tóm tắt của bạn (đã chính xác):
🎯 Mục tiêu:
✔️ Tìm đoạn con dài nhất sao cho số lượng phần tử 0 trong đó ≤ k

⚙️ Cách triển khai:
- left và right là biên của khung cửa sổ
- zeroCount là số lượng 0 trong khung [left, right]
- right duyệt toàn bộ mảng (for)
- Nếu gặp 0, tăng zeroCount
- Nếu zeroCount > k ➜ tăng left đến khi zeroCount <= k
- Cập nhật maxLength = max(maxLength, right - left + 1)
*/
function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxLength = 0;
    for (right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
      }
      return maxLength
}
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))