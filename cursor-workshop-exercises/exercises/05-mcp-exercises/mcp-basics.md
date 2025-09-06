# MCP 基礎配置練習

## 🎯 練習目標
學習 MCP (Model Context Protocol) 的基本配置和使用

## 📋 練習步驟

### 練習 1: 創建 MCP 配置文件
**任務**: 創建基本的 MCP 配置文件

**操作步驟**:
1. 在專案根目錄創建 `.cursor/mcp.json` 文件
2. 添加基本配置結構：

```json
{
  "mcpServers": {
    "example-server": {
      "command": "node",
      "args": ["path/to/server.js"],
      "env": {
        "API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### 練習 2: 配置 NASA MCP 伺服器
**任務**: 配置 NASA API MCP 伺服器

**操作步驟**:
1. 獲取 NASA API Key：
   - 訪問 https://api.nasa.gov/
   - 申請免費的 API Key

2. 在 `.cursor/mcp.json` 中添加配置：

```json
{
  "mcpServers": {
    "nasa-mcp": {
      "command": "npx",
      "args": ["@programcomputer/nasa-mcp-server"],
      "env": {
        "NASA_API_KEY": "your-nasa-api-key-here"
      }
    }
  }
}
```

3. 重啟 Cursor

### 練習 3: 測試 NASA MCP 功能
**任務**: 在 Chat 中測試 NASA MCP 功能

**操作步驟**:
1. 開啟 Chat (`⌘+L` 或 `Ctrl+L`)
2. 輸入以下提示：

```
請使用 NASA API 獲取今天的每日天文圖片
```

3. 觀察 AI 如何使用 MCP 工具：
   - 是否自動調用了 NASA API
   - 是否正確處理了 API 響應
   - 是否提供了有用的信息

### 練習 4: 配置天氣 MCP 伺服器
**任務**: 配置天氣 API MCP 伺服器

**操作步驟**:
1. 獲取天氣 API Key：
   - 訪問 OpenWeatherMap 或其他天氣 API 服務
   - 申請免費的 API Key

2. 在 `.cursor/mcp.json` 中添加配置：

```json
{
  "mcpServers": {
    "weather-mcp": {
      "command": "npx",
      "args": ["@programcomputer/weather-mcp-server"],
      "env": {
        "WEATHER_API_KEY": "your-weather-api-key-here"
      }
    }
  }
}
```

3. 重啟 Cursor

### 練習 5: 測試天氣 MCP 功能
**任務**: 在 Chat 中測試天氣 MCP 功能

**操作步驟**:
1. 在 Chat 中輸入：

```
請獲取台北市的天氣信息
```

2. 觀察 AI 如何：
   - 調用天氣 API
   - 處理天氣數據
   - 提供有用的天氣信息

### 練習 6: 配置多個 MCP 伺服器
**任務**: 同時配置多個 MCP 伺服器

**操作步驟**:
1. 更新 `.cursor/mcp.json` 文件：

```json
{
  "mcpServers": {
    "nasa-mcp": {
      "command": "npx",
      "args": ["@programcomputer/nasa-mcp-server"],
      "env": {
        "NASA_API_KEY": "your-nasa-api-key-here"
      }
    },
    "weather-mcp": {
      "command": "npx",
      "args": ["@programcomputer/weather-mcp-server"],
      "env": {
        "WEATHER_API_KEY": "your-weather-api-key-here"
      }
    },
    "filesystem-mcp": {
      "command": "npx",
      "args": ["@programcomputer/filesystem-mcp-server"]
    }
  }
}
```

2. 重啟 Cursor

### 練習 7: 測試多個 MCP 伺服器
**任務**: 測試多個 MCP 伺服器的協同工作

**操作步驟**:
1. 在 Chat 中輸入：

```
請創建一個天氣和天文信息的儀表板，包含：
1. 當前天氣信息
2. 今天的每日天文圖片
3. 將這些信息保存到文件中
```

2. 觀察 AI 如何：
   - 使用多個 MCP 伺服器
   - 整合不同 API 的數據
   - 創建完整的應用

## 🔍 觀察要點

### MCP 配置要點
1. **配置文件位置**: `.cursor/mcp.json`
2. **伺服器命令**: 必須是可執行的命令
3. **環境變數**: 用於傳遞 API Key 等敏感信息
4. **重啟要求**: 配置更改後需要重啟 Cursor

### MCP 使用要點
1. **自動調用**: AI 會根據需要自動調用 MCP 工具
2. **上下文理解**: AI 理解 MCP 工具的功能和用途
3. **錯誤處理**: AI 會處理 MCP 工具的錯誤
4. **結果整合**: AI 會將 MCP 工具的結果整合到回應中

### MCP 限制
1. **工具數量**: 最多只能使用前 40 個工具
2. **本地運行**: MCP 伺服器必須在本地運行
3. **SSH 限制**: 通過 SSH 使用時可能無法正常工作
4. **只支援 Tools**: 不支援 Resources

## 💡 進階練習

### 練習 8: 創建自定義 MCP 伺服器
創建一個簡單的自定義 MCP 伺服器：

```javascript
// custom-mcp-server.js
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');

const server = new Server(
  {
    name: "custom-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler("tools/list", async () => {
  return {
    tools: [
      {
        name: "get_current_time",
        description: "獲取當前時間",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler("tools/call", async (request) => {
  if (request.params.name === "get_current_time") {
    return {
      content: [
        {
          type: "text",
          text: `當前時間: ${new Date().toLocaleString()}`,
        },
      ],
    };
  }
  throw new Error(`未知工具: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
```

### 練習 9: 故障排除
學習 MCP 的常見問題和解決方法：

1. **MCP 伺服器無法啟動**
   - 檢查命令和參數是否正確
   - 確認依賴是否已安裝
   - 檢查環境變數是否設置

2. **工具無法調用**
   - 檢查工具名稱是否正確
   - 確認工具是否在列表中
   - 檢查工具參數是否正確

3. **API 調用失敗**
   - 檢查 API Key 是否有效
   - 確認 API 端點是否可訪問
   - 檢查網路連接

## 📝 反思問題
1. MCP 如何擴展 Cursor 的功能？
2. 什麼時候使用 MCP 比直接調用 API 更好？
3. 如何設計一個好的 MCP 伺服器？
4. MCP 的限制如何影響使用策略？