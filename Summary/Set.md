

## ✅ **`Set` là gì?**

`Set` là một **kiểu dữ liệu lưu trữ các giá trị duy nhất** (không trùng lặp).

```js
const mySet = new Set();
mySet.add('a');
mySet.add('b');
mySet.add('a'); // bị bỏ qua vì 'a' đã có rồi

console.log(mySet); // Set(2) { 'a', 'b' }
```

---

## 📌 **Các method phổ biến của Set:**

| Method              | Mô tả |
|---------------------|-------|
| `add(value)`        | Thêm giá trị vào set |
| `has(value)`        | Kiểm tra set có chứa giá trị không |
| `delete(value)`     | Xóa giá trị khỏi set |
| `clear()`           | Xóa toàn bộ set |
| `size`              | Số lượng phần tử trong set |
| Duyệt bằng `for..of` | Duyệt qua từng phần tử |

---

### 🔸 Ví dụ đơn giản:

```js
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

console.log(vowels.has('a')); // true
console.log(vowels.has('b')); // false
```

📍 Rất tiện để kiểm tra xem 1 ký tự có phải là nguyên âm không (như bài toán của bạn trước đó).

---

## 🔁 Duyệt Set:

```js
for (const ch of vowels) {
  console.log(ch);
}
```

---

## 🧠 Tóm lại: Khi nào dùng `Set`?

- Khi bạn **không muốn có phần tử trùng lặp**.
- Khi bạn cần **kiểm tra nhanh một giá trị có tồn tại hay không** (tốt hơn array `includes` vì `Set.has()` nhanh hơn).
- Khi làm bài toán kiểu: **tập hợp ký tự đặc biệt**, **filter trùng**, **vowel checking** (như của bạn).

-