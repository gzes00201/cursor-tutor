// 這是一個展示 Command+K 功能的示例文件

// 定義一些常用的工具函數
function calculateSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 定義一些示例數據
const sampleData = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    users: [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 }
    ]
};

// 使用工具函數的示例
function processData() {
    const numbers = sampleData.numbers;

    console.log("原始數組:", numbers);
    console.log("數組總和:", calculateSum(numbers));
    console.log("數組平均值:", calculateAverage(numbers));
    console.log("偶數列表:", filterEvenNumbers(numbers));
}

// 用戶相關操作
function findUserById(id) {
    return sampleData.users.find(user => user.id === id);
}

function getUserNames() {
    return sampleData.users.map(user => user.name);
}

// 台灣國定假日資料
const taiwanHolidays = [
    { date: '2025-01-01', name: '元旦' },
    { date: '2025-01-29', name: '農曆春節' },
    { date: '2025-01-30', name: '農曆春節' },
    { date: '2025-01-31', name: '農曆春節' },
    { date: '2025-02-28', name: '和平紀念日' },
    { date: '2025-04-04', name: '兒童節' },
    { date: '2025-04-05', name: '清明節' },
    { date: '2025-05-01', name: '勞動節' },
    { date: '2025-05-31', name: '端午節' },
    { date: '2025-10-06', name: '中秋節' },
    { date: '2025-10-10', name: '國慶日' }
];

// 獲取假日的函數
function getHolidays() {
    return taiwanHolidays;
}

function findHolidayByDate(date) {
    return taiwanHolidays.find(holiday => holiday.date === date);
}

// 主函數
function main() {
    processData();

    console.log("所有用戶名稱:", getUserNames());
    console.log("ID為2的用戶:", findUserById(2));

    // 測試假日相關功能
    console.log("所有國定假日:", getHolidays());
    console.log("2025年元旦:", findHolidayByDate('2025-01-01'));
}

// 執行主函數
main();


// 提示：您可以使用 Command+K 來：
// 題目1: sampleData 資料生成10組
// 題目2: 快速生成台灣假期陣列, 希望有日期與名稱
// 題目3: 在Terminal中, 使用Command+K查看資料夾列表與查看權限
// 題目4: 試著使用Ｋ產生任何你想要的答案或結果
