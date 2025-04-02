/*
You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.

Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
*/

function maxOperations(nums: number[], k: number): number {
  // Khởi tạo hash map để lưu tần suất các phần tử
  const freq: Map<number, number> = new Map();
  let count: number = 0;

  // Duyệt qua mảng
  for (const num of nums) {
    console.log('check',freq)
      const complement: number = k - num;
      // Nếu complement tồn tại và còn tần suất > 0
      if (freq.has(complement) && (freq.get(complement) as number) > 0) {
          count++; // Tăng số cặp
          freq.set(complement, (freq.get(complement) as number) - 1); // Giảm tần suất của complement
      } else {
          // Nếu không tìm thấy cặp, tăng tần suất của num
          freq.set(num, (freq.get(num) || 0) + 1);
      }
  }

  return count;
}

// Test với input của bạn
const nums: number[] = [
  3,1,3,4,3
];
const k: number = 6;

console.log(maxOperations(nums, k));