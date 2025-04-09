## 🔍 **I. Sliding Window là gì?**

Là kỹ thuật dùng một "cửa sổ" có kích thước cố định hoặc thay đổi, trượt qua mảng hoặc chuỗi để **tính toán nhanh một đoạn con liên tiếp**, thay vì tính lại từ đầu mỗi lần.

---

## ✅ **II. Khi nào dùng Sliding Window?**

Dùng khi:
- Bài toán yêu cầu **xử lý chuỗi/mảng liên tiếp nhau (subarray, substring)**
- Muốn tìm **tổng, trung bình, số lượng, tần suất, độ dài, v.v.** của đoạn con
- Bạn muốn tối ưu từ **O(nk)** xuống còn **O(n)**

---

## 🛠️ **III. Có 2 loại Sliding Window:**

### 1. **Cửa sổ cố định (Fixed-size window)**
> Dùng khi độ dài đoạn con là cố định (`k`)

**Ví dụ bài toán:**
- Tìm đoạn con độ dài `k` có **tổng/trung bình lớn nhất**
- Tìm đoạn con độ dài `k` có số số âm/lẻ/chẵn lớn nhất

**Cách làm:**
```js
let sum = 0;
// Bước 1: tổng k phần tử đầu
for (let i = 0; i < k; i++) {
  sum += nums[i];
}
let maxSum = sum;

// Bước 2: trượt cửa sổ
for (let i = k; i < nums.length; i++) {
  sum = sum - nums[i - k] + nums[i]; // bỏ trái, thêm phải
  maxSum = Math.max(maxSum, sum);
}
```

---

### 2. **Cửa sổ linh hoạt (Variable-size window / two pointers)**
> Dùng khi **không biết trước độ dài**, mà cần tìm **ngắn nhất / dài nhất / số lượng nhiều nhất** mà thỏa 1 điều kiện nào đó

**Ví dụ bài toán:**
- Tìm **độ dài ngắn nhất** của đoạn con có tổng ≥ `target`
- Tìm **chuỗi con dài nhất** không lặp ký tự
- Tìm đoạn con có tối đa `k` số khác nhau

**Cách làm:**
```js
let left = 0;
for (let right = 0; right < nums.length; right++) {
  // thêm nums[right] vào cửa sổ

  while (điều kiện không thỏa) {
    // thu hẹp cửa sổ bên trái
    left++;
  }

  // cập nhật kết quả nếu cần
}
```

---

## 📘 **IV. Tổng kết cách áp dụng**

| Loại bài toán                                      | Dạng cửa sổ     | Gợi ý áp dụng                     |
|---------------------------------------------------|-----------------|-----------------------------------|
| Tính tổng, trung bình đoạn con độ dài `k`         | Cửa sổ cố định  | Dùng sum ban đầu và trượt         |
| Tìm độ dài ngắn nhất/dài nhất thỏa điều kiện      | Cửa sổ linh hoạt| Dùng 2 con trỏ: left và right     |
| Đếm số đoạn con thỏa mãn                          | Cửa sổ linh hoạt| Lặp right, co left khi cần        |
| Xử lý chuỗi không lặp, tần suất, chữ cái          | Cửa sổ linh hoạt| Dùng `Map` hoặc `Set` để theo dõi |

---

## 🧠 **V. Một số bài mẫu để luyện tập**

1. Leetcode 643 - [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
2. Leetcode 209 - Minimum Size Subarray Sum
3. Leetcode 3 - Longest Substring Without Repeating Characters
4. Leetcode 424 - Longest Repeating Character Replacement
5. Leetcode 1004 - Max Consecutive Ones III
