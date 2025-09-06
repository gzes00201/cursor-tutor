// 待辦事項應用 - 主要 JavaScript 文件
// 這個文件包含所有應用邏輯

class TodoApp {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.currentCategory = 'all';
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.render();
        this.updateStats();
    }
    
    bindEvents() {
        // 添加任務按鈕
        document.getElementById('add-task-btn').addEventListener('click', () => {
            this.addTask();
        });
        
        // 回車鍵添加任務
        document.getElementById('task-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });
        
        // 篩選器
        document.querySelectorAll('input[name="filter"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                this.render();
            });
        });
        
        // 分類篩選器
        document.getElementById('category-filter').addEventListener('change', (e) => {
            this.currentCategory = e.target.value;
            this.render();
        });
    }
    
    addTask() {
        const input = document.getElementById('task-input');
        const priority = document.getElementById('priority-select').value;
        const category = document.getElementById('category-select').value;
        const text = input.value.trim();
        
        if (text === '') {
            alert('請輸入任務內容');
            return;
        }
        
        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            category: category,
            createdAt: new Date().toISOString()
        };
        
        this.tasks.push(task);
        this.saveTasks();
        this.render();
        this.updateStats();
        
        input.value = '';
    }
    
    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
            this.updateStats();
        }
    }
    
    deleteTask(id) {
        if (confirm('確定要刪除這個任務嗎？')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveTasks();
            this.render();
            this.updateStats();
        }
    }
    
    editTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            const newText = prompt('編輯任務:', task.text);
            if (newText !== null && newText.trim() !== '') {
                task.text = newText.trim();
                this.saveTasks();
                this.render();
            }
        }
    }
    
    getFilteredTasks() {
        let filtered = this.tasks;
        
        // 按狀態篩選
        if (this.currentFilter === 'pending') {
            filtered = filtered.filter(task => !task.completed);
        } else if (this.currentFilter === 'completed') {
            filtered = filtered.filter(task => task.completed);
        }
        
        // 按分類篩選
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(task => task.category === this.currentCategory);
        }
        
        return filtered;
    }
    
    render() {
        const taskList = document.getElementById('task-list');
        const filteredTasks = this.getFilteredTasks();
        
        taskList.innerHTML = '';
        
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li class="no-tasks">沒有找到任務</li>';
            return;
        }
        
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
            
            li.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="todoApp.toggleTask(${task.id})">
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <span class="task-category">${this.getCategoryLabel(task.category)}</span>
                    <span class="task-priority priority-${task.priority}">${this.getPriorityLabel(task.priority)}</span>
                </div>
                <div class="task-actions">
                    <button onclick="todoApp.editTask(${task.id})" class="edit-btn">編輯</button>
                    <button onclick="todoApp.deleteTask(${task.id})" class="delete-btn">刪除</button>
                </div>
            `;
            
            taskList.appendChild(li);
        });
    }
    
    updateStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        
        document.getElementById('total-tasks').textContent = `總計: ${total}`;
        document.getElementById('completed-tasks').textContent = `已完成: ${completed}`;
        document.getElementById('pending-tasks').textContent = `待完成: ${pending}`;
    }
    
    getCategoryLabel(category) {
        const labels = {
            work: '工作',
            personal: '個人',
            shopping: '購物',
            other: '其他'
        };
        return labels[category] || category;
    }
    
    getPriorityLabel(priority) {
        const labels = {
            low: '低',
            medium: '中',
            high: '高'
        };
        return labels[priority] || priority;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveTasks() {
        try {
            localStorage.setItem('todo-tasks', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('保存任務失敗:', error);
        }
    }
    
    loadTasks() {
        try {
            const saved = localStorage.getItem('todo-tasks');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('載入任務失敗:', error);
            return [];
        }
    }
}

// 初始化應用
let todoApp;
document.addEventListener('DOMContentLoaded', () => {
    todoApp = new TodoApp();
});