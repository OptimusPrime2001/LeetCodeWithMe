# Two Pointers - Kỹ Thuật Hai Con Trỏ

## 1. Giới Thiệu
Kỹ thuật **Two Pointers** là một phương pháp hiệu quả trong lập trình khi làm việc với một danh sách hoặc chuỗi.

Kỹ thuật này dùng hai con trỏ (điểm truy cập trong dữ liệu) để giảm độ phức tạp thời gian từ **O(n^2)** xuống **O(n)** trong nhiều trường hợp.

---

## 2. Các Loại Two Pointers
### a) **Two Pointers Trái - Phải**
- Hai con trỏ đặt ở hai đầu danh sách/chuỗi và dần di chuyển vào trong.
- Dùng trong các bài toán:
  - Tìm cặp số thỎc hiện **target sum**
  - Kiểm tra chuỗi palindrome
  - Sắp xếp danh sách theo quy tắc nhất định

🔹 **VD:** Bài toán **Two Sum II** (`LeetCode 167`)
```ts
function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        if (sum < target) left++;
        else right--;
    }
    return [];
}
```

---

### b) **Two Pointers Cùng Chiều (Fast & Slow)**
- Dùng hai con trỏ di chuyển với tốc độ khác nhau.
- Dùng trong các bài toán:
  - Phát hiện vòng lặp trong danh sách liên kết (Floyd’s Cycle Detection)
  - Tìm giữa danh sách liên kết

🔹 **VD:** Bài toán **Linked List Cycle** (`LeetCode 141`)
```ts
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
```

---

### c) **Two Pointers trong Xử Lý Chuỗi**
- Dùng trong bài toán:
  - Xoá ký tự thừa
  - Sắp xếp hoàn văn chuỗi

🔹 **VD:** Bài toán **Valid Palindrome** (`LeetCode 125`)
```ts
function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !/^[a-z0-9]$/i.test(s[left])) left++;
        while (left < right && !/^[a-z0-9]$/i.test(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
}
```

---

## 3. Khi Nào Dùng Two Pointers?
- Khi cần tìm cặp giá trị thoả mãn điều kiện nhanh chóng.
- Khi cần dịch chuyển trên danh sách có thứ tự.
- Khi muốn tối ưu tốc độ tìm kiếm so với brute-force.

---

## 4. Lời Khuyên
- Dùng **while (left < right)** thay vì **for** khi duyệt danh sách hai chiều.
- Kiểm tra kỹ lưỡng trước khi thay đổi con trỏ.
- Luôn xác định trước con trỏ bắt đầu từ đâu và di chuyển như thế nào.

---

## 5. Bài Tập Luyện Tậu Trên LeetCode
1. **Two Sum II** (167)
2. **Valid Palindrome** (125)
3. **Linked List Cycle** (141)
4. **Container With Most Water** (11)
5. **Trapping Rain Water** (42)
6. **Remove Duplicates from Sorted Array** (26)
7. **Merge Sorted Array** (88)

---

## 6. Kết Luận
Kỹ thuật Two Pointers rất hữu dụng trong nhiều bài toán với dữ liệu dài. Việc hiểu và áp dụng sẽ giúp bạn có lời thế lớn khi luyện tập và giải các bài toán trên LeetCode.

