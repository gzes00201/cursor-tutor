# Background Agent 基礎練習

## 🎯 練習目標
學習 Background Agent 的基本使用，體驗 AI 在後台持續工作的能力

## 📋 練習步驟

### 練習 1: 啟用 Background Agent
**任務**: 啟用並配置 Background Agent

**操作步驟**:
1. 開啟 Cursor 設定
2. 找到 Background Agent 選項
3. 啟用 Background Agent
4. 配置相關參數：
   - 工作間隔時間
   - 監控的文件類型
   - 自動修復選項

### 練習 2: 代碼質量監控
**任務**: 讓 Background Agent 監控代碼質量

**操作步驟**:
1. 在 `sample-projects/todo-app/` 中創建一個有問題的 JavaScript 文件：

```javascript
// problematic-code.js
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

// 問題：沒有錯誤處理
// 問題：沒有參數驗證
// 問題：沒有註解
```

2. 觀察 Background Agent 如何：
   - 自動檢測代碼問題
   - 提供改進建議
   - 自動修復簡單問題

### 練習 3: 自動重構
**任務**: 讓 Background Agent 自動重構代碼

**操作步驟**:
1. 創建一個需要重構的代碼文件：

```javascript
// legacy-code.js
var users = [];
var currentUser = null;

function addUser(name, email, age) {
    var user = {
        name: name,
        email: email,
        age: age,
        id: Date.now()
    };
    users.push(user);
    return user;
}

function findUser(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return null;
}
```

2. 觀察 Background Agent 如何：
   - 自動將 var 改為 const/let
   - 添加現代 JavaScript 語法
   - 改進函數結構
   - 添加錯誤處理

### 練習 4: 依賴管理
**任務**: 讓 Background Agent 管理專案依賴

**操作步驟**:
1. 創建一個 `package.json` 文件
2. 添加一些過時的依賴
3. 觀察 Background Agent 如何：
   - 檢測過時的依賴
   - 建議更新
   - 自動更新安全的依賴

### 練習 5: 安全檢查
**任務**: 讓 Background Agent 進行安全檢查

**操作步驟**:
1. 創建一個有安全問題的代碼文件：

```javascript
// security-issues.js
function processUserInput(input) {
    // 問題：沒有驗證輸入
    eval(input); // 危險操作
    
    // 問題：直接使用用戶輸入
    document.innerHTML = input;
    
    // 問題：沒有清理輸入
    localStorage.setItem('userData', input);
}
```

2. 觀察 Background Agent 如何：
   - 檢測安全問題
   - 提供安全建議
   - 自動修復簡單的安全問題

### 練習 6: 性能優化
**任務**: 讓 Background Agent 進行性能優化

**操作步驟**:
1. 創建一個性能有問題的代碼文件：

```javascript
// performance-issues.js
function processLargeArray(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i].id === data[j].id) {
                result.push(data[i]);
            }
        }
    }
    return result;
}

function inefficientSearch(items, target) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].name === target) {
            return items[i];
        }
    }
    return null;
}
```

2. 觀察 Background Agent 如何：
   - 檢測性能問題
   - 建議優化方案
   - 自動應用簡單的優化

## 🔍 觀察要點

### Background Agent 的特點
1. **持續監控**: 在後台持續監控代碼變化
2. **自動修復**: 自動修復簡單的問題
3. **智能建議**: 提供改進建議
4. **非侵入性**: 不會打斷開發流程

### 監控範圍
1. **代碼質量**: 語法錯誤、風格問題
2. **安全問題**: 安全漏洞、危險操作
3. **性能問題**: 低效算法、內存洩漏
4. **依賴管理**: 過時依賴、安全漏洞

### 自動修復能力
1. **語法修復**: 自動修復語法錯誤
2. **風格統一**: 統一代碼風格
3. **簡單重構**: 自動應用簡單的重構
4. **依賴更新**: 自動更新安全的依賴

## 💡 進階練習

### 練習 7: 自定義 Background Agent 規則
**任務**: 自定義 Background Agent 的行為

**操作步驟**:
1. 在 `.cursor/rules` 中添加 Background Agent 規則：

```markdown
## Background Agent 規則
- 自動修復 ESLint 錯誤
- 統一使用 2 個空格縮排
- 自動添加 JSDoc 註解
- 檢測並修復安全問題
- 自動優化性能問題
```

2. 測試自定義規則是否生效

### 練習 8: Background Agent 與其他功能整合
**任務**: 整合 Background Agent 與其他 Cursor 功能

**操作步驟**:
1. 同時使用 Background Agent 和 Chat
2. 觀察兩者如何協同工作
3. 測試 Background Agent 如何影響其他功能

## 📝 反思問題
1. Background Agent 如何提高開發效率？
2. 什麼時候需要手動干預？
3. 如何平衡自動化和控制？
4. Background Agent 的局限性是什麼？