/*
1657. Determine if Two Strings Are Close
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
*/

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  const a = new Map();
  const b = new Map();
  for (let i = 0; i < word1.length; i++) {
      const x1 = word1[i];
      const x2 = word2[i];
      a.set(x1, a.get(x1) + 1 || 0);
      b.set(x2, b.get(x2) + 1 || 0);
  }
  let result = false;
  const a1 = Array.from(a.values()).sort().join('');
  const a2= Array.from(b.values()).sort().join('');

  const b1 = Array.from(a.keys()).sort().join('');
  const b2 = Array.from(b.keys()).sort().join('');
  result = b1===b2 && a1===a2
  return result
};


/*
🎯 Mục tiêu của bài toán:
Chúng ta cần kiểm tra xem tần suất ký tự trong hai chuỗi có giống nhau không, không cần đúng ký tự, chỉ cần số lượng giống nhau.

🔍 Ví dụ:
Giả sử có 2 chuỗi:

txt
Sao chép
Chỉnh sửa
word1 = "aabbc"    → {'a': 2, 'b': 2, 'c': 1}
word2 = "ddeee"    → {'d': 2, 'e': 3}
Tần suất của word1 là [2, 2, 1]
Tần suất của word2 là [2, 3]
→ khác nhau ⇒ không thể "đổi nhãn ký tự" để thành giống nhau.

🧠 Giờ giả sử ta có:
txt
Sao chép
Chỉnh sửa
word1 = "aabbc"    → {'a': 2, 'b': 2, 'c': 1}
word2 = "ddeff"    → {'d': 2, 'e': 2, 'f': 1}
Tần suất:

word1: [2, 2, 1]

word2: [2, 2, 1]

=> Tưởng giống rồi, nhưng nếu không sắp xếp, thứ tự trong object có thể không giống nhau, dẫn đến so sánh bị sai.

🤔 Tại sao cần sort()?
Giả sử bạn có:

js
Sao chép
Chỉnh sửa
// Trường hợp giống nhau nhưng khác thứ tự
[2, 2, 1] !== [1, 2, 2]  // so sánh trực tiếp → sai
Nhưng sau khi sort():

js
Sao chép
Chỉnh sửa
sort([2, 2, 1]) → [1, 2, 2]
sort([1, 2, 2]) → [1, 2, 2]
→ giống nhau rồi ✅
*/