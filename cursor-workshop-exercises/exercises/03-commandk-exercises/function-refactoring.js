// ⌘K 練習 2: 函數重構
// 目標: 使用 ⌘K 重構和改進函數

// 練習 2.1: 函數分解
// 選中下面的函數，按 ⌘K，輸入 "將這個大函數分解為多個小函數"
function processUserData(userData) {
    // 驗證用戶數據
    if (!userData || !userData.name || !userData.email) {
        throw new Error("Invalid user data");
    }
    
    // 格式化姓名
    let formattedName = userData.name.trim().toLowerCase();
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    
    // 驗證郵箱
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
        throw new Error("Invalid email format");
    }
    
    // 創建用戶對象
    let user = {
        name: formattedName,
        email: userData.email,
        id: Date.now(),
        createdAt: new Date()
    };
    
    // 保存到數據庫
    console.log("Saving user:", user);
    
    return user;
}

// 練習 2.2: 添加異步支持
// 選中下面的函數，按 ⌘K，輸入 "將這個函數改為異步函數，並添加錯誤處理"
function fetchUserData(userId) {
    // 模擬 API 調用
    setTimeout(() => {
        return { id: userId, name: "John", email: "john@example.com" };
    }, 1000);
}

// 練習 2.3: 使用現代 JavaScript 語法
// 選中下面的函數，按 ⌘K，輸入 "使用箭頭函數和現代 JavaScript 語法重構"
function filterAndSortUsers(users, minAge, sortBy) {
    var filteredUsers = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].age >= minAge) {
            filteredUsers.push(users[i]);
        }
    }
    
    filteredUsers.sort(function(a, b) {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'age') {
            return a.age - b.age;
        }
        return 0;
    });
    
    return filteredUsers;
}

// 練習 2.4: 添加參數驗證
// 選中下面的函數，按 ⌘K，輸入 "添加完整的參數驗證和錯誤處理"
function calculateDiscount(price, discountPercent, userType) {
    let discount = price * (discountPercent / 100);
    if (userType === 'premium') {
        discount *= 1.2;
    }
    return price - discount;
}

// 練習 2.5: 改進錯誤處理
// 選中下面的函數，按 ⌘K，輸入 "改進錯誤處理，使用 try-catch 和更詳細的錯誤信息"
function parseJSON(jsonString) {
    let data = JSON.parse(jsonString);
    return data;
}

// 練習 2.6: 添加日誌記錄
// 選中下面的函數，按 ⌘K，輸入 "添加詳細的日誌記錄和性能監控"
function processLargeDataset(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let processed = data[i] * 2;
        result.push(processed);
    }
    return result;
}

// 練習 2.7: 使用函數式編程
// 選中下面的函數，按 ⌘K，輸入 "使用函數式編程方法重構這個函數"
function processNumbers(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            let squared = numbers[i] * numbers[i];
            if (squared > 10) {
                result.push(squared);
            }
        }
    }
    return result;
}

// 練習 2.8: 添加緩存機制
// 選中下面的函數，按 ⌘K，輸入 "添加緩存機制來提高性能"
function expensiveCalculation(n) {
    // 模擬昂貴的計算
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

// 練習 2.9: 使用解構賦值
// 選中下面的函數，按 ⌘K，輸入 "使用解構賦值來改進參數處理"
function createUserProfile(userInfo) {
    let name = userInfo.name;
    let age = userInfo.age;
    let email = userInfo.email;
    let address = userInfo.address;
    
    return {
        displayName: name,
        userAge: age,
        contactEmail: email,
        userAddress: address
    };
}

// 練習 2.10: 添加類型註解
// 選中下面的函數，按 ⌘K，輸入 "添加 JSDoc 註解來描述函數的參數和返回值"
function calculateTax(income, taxRate) {
    return income * taxRate;
}

// 進階練習: 複雜重構
// 選中下面的整個類別，按 ⌘K，輸入 "重構這個類別，使其更加現代化和可維護"
function UserManager() {
    this.users = [];
    
    this.addUser = function(user) {
        this.users.push(user);
    };
    
    this.findUser = function(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                return this.users[i];
            }
        }
        return null;
    };
    
    this.updateUser = function(id, updates) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users[i] = Object.assign(this.users[i], updates);
                return true;
            }
        }
        return false;
    };
    
    this.deleteUser = function(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users.splice(i, 1);
                return true;
            }
        }
        return false;
    };
}