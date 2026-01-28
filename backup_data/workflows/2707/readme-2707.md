# Food delivery notifications and easy expense tracking

> # Workflow Description
This workflow automates the process of retrieving emails from a food delivery platform, extracting key order details, and sending notifications to a Slack channel. Additionally, the Slack message includes a **Moze accounting app URL scheme** link for quick expense tracking.

---

## Key Features
1. **Manual Trigger**: Allows the workflow to be executed manually for immediate testing.
2. **Gmail Integration**: Retrieves emails containing specific keywords in the subject line (e.g., "透過 Uber Eats 系統送出的訂單"). (You can adjust the keywords to fit your language.)
3. **Data Extraction**: Parses the email content to extract key details such as:
   - Order price
   - Shop name
   - Order date and time
4. **Slack Notification**: Sends a notification to a specified Slack channel using a structured block format, including a link to record the expense in the **Moze accounting app**.

---

## Node Configurations

### 1. Manual Trigger
- **Purpose**: Starts the workflow manually for testing or immediate execution.
- **Configuration**: No setup needed.

---

### 2. Gmail Trigger
- **Purpose**: Automatically polls Gmail for new emails matching specific subject keywords.
- **Configuration**:
  - **Filters**:
    - `q`: `subject:透過 Uber Eats 系統送出的訂單` (You can adjust the keywords to fit your language.)
  - **Polling Frequency**: Every hour at 30 minutes past the hour.
  - **Credentials**: Linked Gmail account.

---

### 3. Extract Price, Shop, Date, Time
- **Purpose**: Extracts key information from the email content using regular expressions.
- **Extracted Data**:
  - `price`: Order price (e.g., `$200`).
  - `shop`: Shop name (e.g., "店名").
  - `date`: Order date (e.g., `2024.01.01`).
  - `time`: Order time converted to 24-hour format (e.g., `14:30`).

---

### 4. Slack Notification
- **Purpose**: Sends a formatted message to a Slack channel with extracted order details.
- **Message Content**:
  - **Text**:
    ```
    Ubereat 訂餐資訊:
    商家: {{ shop }}
    金額: {{ price }}
    日期: {{ date }}
    ```
  - **Moze App Link**: Includes a clickable button in the Slack message with a pre-filled Moze app URL scheme:
    ```
    moze3://expense?amount={{ price }}&account=信用卡&subcategory=外送&store={{ shop }}&date={{ date }}&time={{ time }}&project=生活開銷
    ```
  - **Channel**: Slack channel ID associated with food delivery notifications.

---

## Additional Notes
- **Customization**: Adjust the email subject filter (`subject`) to match other types of food delivery platforms or services.
- **Error Handling**: Ensure regular expressions for data extraction match the email format. Test with sample emails before deployment.
- **Moze URL Scheme Reference**: Learn more about Moze app URL schemes for customization by visiting the [Moze Documentation](https://moze.app/).

This workflow is ideal for automating expense tracking and centralizing notifications for food delivery orders, streamlining personal or team expense management.

---

Image:
UberEat Gmail with order information
![n8n_delievery_slack_moze_step1.PNG](fileId:890)

Slack text with button
![n8n_delievery_slack_moze_step2.jpg](fileId:888)

Click the button will call moze url scheme
![n8n_delievery_slack_moze_step3.jpg](fileId:889)

---

# 工作流程描述
此工作流程自動化從外送平台獲取郵件，提取關鍵訂單詳細資訊，並將通知發送到指定的 Slack 頻道。此外，Slack 消息中包含一個 **Moze 記帳 App URL Scheme** 的連結，方便快速記帳。

---

## 主要功能
1. **Manual Trigger**：允許手動執行工作流程，方便測試。
2. **Gmail Integration**：從 Gmail 中提取包含特定關鍵字（例如：「透過 Uber Eats 系統送出的訂單」）的郵件。
3. **資料提取**：解析郵件內容，提取以下關鍵資訊：
   - 訂單金額
   - 商家名稱
   - 訂單日期與時間
4. **Slack 通知**：將結構化的通知發送到指定的 Slack 頻道，並包含一個連結供用戶快速記帳。

---

## 節點設定

### 1. Manual Trigger
- **用途**：手動啟動工作流程以進行測試或即時執行。
- **設定**：無需額外設定。

---

### 2. Gmail Trigger
- **用途**：自動檢查 Gmail 中是否有符合特定主題關鍵字的新郵件。
- **設定**：
  - **篩選條件**：
    - `q`: `subject:透過 Uber Eats 系統送出的訂單`
  - **檢查頻率**：每小時的 30 分。
  - **憑證**：已連結的 Gmail 帳號。

---

### 3. Extract Price, Shop, Date, Time
- **用途**：使用正則表達式從郵件內容中提取關鍵資訊。
- **提取的資料**：
  - `price`：訂單金額（例如：`$200`）。
  - `shop`：商家名稱（例如：「店名」）。
  - `date`：訂單日期（例如：`2024.01.01`）。
  - `time`：訂單時間（24 小時制，例如：`14:30`）。

---

### 4. Slack 通知
- **用途**：將訂單詳細資訊以格式化消息發送到 Slack。
- **消息內容**：
  - **文字**：
    ```
    Ubereat 訂餐資訊:
    商家: {{ shop }}
    金額: {{ price }}
    日期: {{ date }}
    ```
  - **Moze App 連結**：Slack 消息中包含一個可點擊按鈕，預填 Moze App URL Scheme：
    ```
    moze3://expense?amount={{ price }}&account=信用卡&subcategory=外送&store={{ shop }}&date={{ date }}&time={{ time }}&project=生活開銷
    ```
  - **頻道**：與外送通知相關的 Slack 頻道。

---

## 補充說明
- **自訂化**：可調整郵件主題篩選條件（`subject`），以匹配其他外送平台或服務。
- **錯誤處理**：確保正則表達式匹配郵件格式。在部署前使用樣本郵件進行測試。
- **Moze URL Scheme 參考**：了解更多關於 Moze App URL Scheme 的客製化資訊，請參閱 [Moze 官方文件](https://moze.app/)。

此工作流程適合自動化費用記帳以及集中管理外送訂單通知，提升個人或團隊的費用管理效率。

## 📊 Basic Information

- **Workflow ID:** 2707
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2308
- **Downloads:** 230
- **Created:** 2025/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2707)

## 👤 Author

- **Name:** darrell_tw
- **Username:** @darrelltw

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **splitInBatches** 
- **manualTrigger** 
- **gmail** 
- **gmailTrigger** 
- **set** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
