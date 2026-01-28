# Telegram chat access control with user permission database

> # 🔐 n8n Workflow: Access Control for Internal Chats or Chatbots

This n8n workflow helps you restrict access to your internal chats or chatbots so that only authorized team members can interact with them. It's perfect for setups using Telegram, Slack, or other corporate messengers, where you need to prevent unauthorized users from triggering internal automations.

---

## 📌 Section 1: Trigger & Input

### ⚡ Receive Message (Telegram Trigger)

**Purpose:** Captures every incoming message from a user interacting with your Telegram bot (or another messenger).

**How it works:** When a user sends a message, it instantly triggers the workflow and passes their username or ID as input data.

**Benefit:** Acts as the entry point for verifying whether a user is allowed to proceed.

---

## 📌 Section 2: Access Table Lookup

### 📋 User Access Table (Data Node / Spreadsheet / DB Query)

**Purpose:** Stores all your team members and their current access status.

**Structure Example:**

| Username | Access Status |
|----------|---------------|
| user1    | granted       |
| user2    | denied        |
| user3    | granted       |

**Benefit:** Centralized access control — you can easily update user permissions without editing the workflow.

---

## 📌 Section 3: Permission Check

### 🧩 Check Access (IF Node)

**Purpose:** Compares the incoming user's name or ID against the access table.

**Logic:**

```
If status = granted → Allow message to continue  
If status = denied → Stop workflow execution
```

**Benefit:** Ensures only approved users can interact with your automations or receive responses.

---

## 📌 Section 4: Response Handling

### 💬 Send Reply (Telegram Node)

**Purpose:** Sends a message back to the user depending on their access level.

**Paths:**

* ✅ **Granted:** Sends the normal bot response or triggers the main process.
* ❌ **Denied:** Sends no reply (or an optional "Access denied" message).

**Benefit:** Prevents unauthorized access while maintaining a seamless experience for approved users.

---

## 📊 Workflow Overview Table

| Section | Node Name | Purpose |
|---------|-----------|---------|
| 1. Trigger | Receive Message | Captures incoming messages |
| 2. Access Table | User Access Table | Stores usernames + permissions |
| 3. Check | Check Access | Verifies if user has permission |
| 4. Response | Send Reply | Sends or blocks response based on status |

---

## 🎯 Key Benefits

* 🔐 **Secure access control:** Only trusted users can trigger your internal automations.
* ⚙️ **Dynamic management:** Easily update user permissions from a table or database.
* 🧠 **Lightweight setup:** Just three nodes create a fully functional access gate.
* 🚀 **Scalable foundation:** Extend it with role-based access or activity logging later.

## 📊 Basic Information

- **Workflow ID:** 9615
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 109
- **Downloads:** 10
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9615)

## 👤 Author

- **Name:** Yehor EGMS
- **Username:** @egm-systems

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **noOp** 
- **stickyNote** (×8)
- **switch** 
- **telegram** 
- **telegramTrigger** 
- **slackTrigger** 
- **googleSheets** 
- **airtable** 
- **notion** 
- **if** 
- **filter** 
- **dataTable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
