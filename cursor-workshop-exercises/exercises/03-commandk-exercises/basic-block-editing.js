// ⌘K 練習 1: 基礎區塊編輯
// 目標: 學習 ⌘K 的基本區塊編輯功能

// 練習 1.1: 簡單的變數重命名
// 選中下面的代碼，按 ⌘K，輸入 "將變數名改為更描述性的名稱"
let x = 10;
let y = 20;
let z = x + y;

// 練習 1.2: 添加註解
// 選中下面的函數，按 ⌘K，輸入 "為這個函數添加詳細的註解"
function calculate(a, b) {
    return a * b;
}

// 練習 1.3: 改進變數宣告
// 選中下面的代碼，按 ⌘K，輸入 "使用 const 和 let 來改進變數宣告"
var name = "John";
var age = 30;
var isActive = true;

// 練習 1.4: 添加錯誤處理
// 選中下面的函數，按 ⌘K，輸入 "添加錯誤處理和參數驗證"
function divide(a, b) {
    return a / b;
}

// 練習 1.5: 改進字串處理
// 選中下面的代碼，按 ⌘K，輸入 "使用模板字串來改進字串拼接"
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Hello, " + fullName + "!");

// 練習 1.6: 添加類型檢查
// 選中下面的函數，按 ⌘K，輸入 "添加參數類型檢查"
function processUser(user) {
    return user.name.toUpperCase();
}

// 練習 1.7: 改進陣列操作
// 選中下面的代碼，按 ⌘K，輸入 "使用現代 JavaScript 方法來改進陣列操作"
let numbers = [1, 2, 3, 4, 5];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// 練習 1.8: 添加預設值
// 選中下面的函數，按 ⌘K，輸入 "為參數添加預設值"
function greet(name, message) {
    return message + ", " + name + "!";
}

// 練習 1.9: 改進條件判斷
// 選中下面的代碼，按 ⌘K，輸入 "使用更簡潔的條件判斷"
if (user !== null && user !== undefined && user.name !== null && user.name !== undefined) {
    console.log(user.name);
}

// 練習 1.10: 添加日誌記錄
// 選中下面的函數，按 ⌘K，輸入 "添加詳細的日誌記錄"
function processData(data) {
    // 處理數據
    let result = data.map(item => item.value);
    return result;
}

// 進階練習: 觀察 ⌘K 如何理解上下文
// 選中下面的整個物件，按 ⌘K，輸入 "將這個物件轉換為類別"
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

// 練習: 複雜的重構
// 選中下面的代碼，按 ⌘K，輸入 "重構這個代碼，使其更加模組化和可測試"
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].price && items[i].quantity) {
            total += items[i].price * items[i].quantity;
        }
    }
    return total;
}