# Bugbot 錯誤修復練習

## 🎯 練習目標
學習使用 Bugbot 自動修復代碼錯誤，體驗 AI 的錯誤檢測和修復能力

## 📋 練習步驟

### 練習 1: 啟用 Bugbot
**任務**: 啟用並配置 Bugbot

**操作步驟**:
1. 開啟 Cursor 設定
2. 找到 Bugbot 選項
3. 啟用 Bugbot
4. 配置相關參數：
   - 自動修復選項
   - 錯誤檢測級別
   - 修復策略

### 練習 2: 語法錯誤修復
**任務**: 讓 Bugbot 修復語法錯誤

**操作步驟**:
1. 創建一個有語法錯誤的 JavaScript 文件：

```javascript
// syntax-errors.js
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity; // 缺少分號
    }
    return total;
}

function processUser(user) {
    if (user && user.name) {
        return user.name.toUpperCase();
    }
    return null;
}

// 語法錯誤：缺少閉合括號
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email;
}
```

2. 觀察 Bugbot 如何：
   - 自動檢測語法錯誤
   - 提供修復建議
   - 自動應用修復

### 練習 3: 邏輯錯誤修復
**任務**: 讓 Bugbot 修復邏輯錯誤

**操作步驟**:
1. 創建一個有邏輯錯誤的代碼文件：

```javascript
// logic-errors.js
function findMax(numbers) {
    let max = 0; // 問題：如果所有數字都是負數會出錯
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length; // 問題：沒有檢查除零
}

function isEven(number) {
    return number % 2 === 0; // 問題：沒有檢查輸入類型
}
```

2. 觀察 Bugbot 如何：
   - 檢測邏輯錯誤
   - 提供修復方案
   - 自動應用修復

### 練習 4: 類型錯誤修復
**任務**: 讓 Bugbot 修復類型錯誤

**操作步驟**:
1. 創建一個有類型錯誤的代碼文件：

```javascript
// type-errors.js
function processData(data) {
    // 問題：沒有檢查 data 的類型
    return data.map(item => item.value);
}

function formatDate(date) {
    // 問題：沒有檢查 date 是否為 Date 對象
    return date.toLocaleDateString();
}

function calculateSum(a, b) {
    // 問題：沒有檢查參數類型
    return a + b;
}
```

2. 觀察 Bugbot 如何：
   - 檢測類型錯誤
   - 添加類型檢查
   - 提供類型安全的修復

### 練習 5: 異步錯誤修復
**任務**: 讓 Bugbot 修復異步代碼錯誤

**操作步驟**:
1. 創建一個有異步錯誤的代碼文件：

```javascript
// async-errors.js
function fetchUserData(userId) {
    fetch(`/api/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data; // 問題：返回值不會被使用
        });
}

async function processUsers(userIds) {
    const results = [];
    for (let id of userIds) {
        const user = await fetchUserData(id); // 問題：fetchUserData 沒有返回值
        results.push(user);
    }
    return results;
}

function handleError(error) {
    console.log("Error:", error.message); // 問題：沒有檢查 error 是否有 message 屬性
}
```

2. 觀察 Bugbot 如何：
   - 檢測異步錯誤
   - 修復 Promise 鏈
   - 添加適當的錯誤處理

### 練習 6: 性能錯誤修復
**任務**: 讓 Bugbot 修復性能問題

**操作步驟**:
1. 創建一個有性能問題的代碼文件：

```javascript
// performance-errors.js
function findDuplicates(array) {
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                duplicates.push(array[i]);
            }
        }
    }
    return duplicates;
}

function inefficientSearch(items, target) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].name === target) {
            return items[i];
        }
    }
    return null;
}

function createLargeArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(i); // 問題：可以預分配大小
    }
    return array;
}
```

2. 觀察 Bugbot 如何：
   - 檢測性能問題
   - 提供優化建議
   - 自動應用性能優化

## 🔍 觀察要點

### Bugbot 的錯誤檢測能力
1. **語法錯誤**: 自動檢測語法錯誤
2. **邏輯錯誤**: 檢測邏輯問題
3. **類型錯誤**: 檢測類型不匹配
4. **性能問題**: 檢測性能瓶頸

### 修復策略
1. **自動修復**: 自動修復簡單錯誤
2. **建議修復**: 提供修復建議
3. **多種方案**: 提供多種修復方案
4. **上下文感知**: 根據上下文選擇最佳修復

### 修復質量
1. **準確性**: 修復是否正確
2. **完整性**: 是否修復了所有相關問題
3. **一致性**: 修復是否與代碼風格一致
4. **安全性**: 修復是否引入了新的問題

## 💡 進階練習

### 練習 7: 複雜錯誤修復
**任務**: 讓 Bugbot 修復複雜的錯誤

**操作步驟**:
1. 創建一個有複雜錯誤的代碼文件：

```javascript
// complex-errors.js
class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(user) {
        // 問題：沒有驗證 user 對象
        this.users.push(user);
    }
    
    findUser(id) {
        // 問題：沒有檢查 id 類型
        return this.users.find(user => user.id === id);
    }
    
    updateUser(id, updates) {
        const user = this.findUser(id);
        if (user) {
            // 問題：沒有驗證 updates 對象
            Object.assign(user, updates);
        }
        return user;
    }
    
    deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
        // 問題：沒有返回值
    }
}
```

2. 觀察 Bugbot 如何：
   - 檢測複雜錯誤
   - 提供綜合修復方案
   - 保持代碼結構完整性

### 練習 8: Bugbot 與其他功能整合
**任務**: 整合 Bugbot 與其他 Cursor 功能

**操作步驟**:
1. 同時使用 Bugbot 和 Chat
2. 觀察兩者如何協同工作
3. 測試 Bugbot 如何影響其他功能

## 📝 反思問題
1. Bugbot 如何提高代碼質量？
2. 什麼時候需要手動修復？
3. 如何平衡自動修復和控制？
4. Bugbot 的局限性是什麼？