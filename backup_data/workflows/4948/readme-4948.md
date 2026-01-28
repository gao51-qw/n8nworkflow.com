# Bulk delete Slack messages with smart filtering and confirmations

> # 🧹 Jedi Cleaner for Slack

## ❌ Slack's Limitation

Slack lacks a native bulk delete feature. Users must delete messages manually, which is time-consuming and inefficient for large volumes.

## ✅ Our Solution

**Jedi Cleaner** automates Slack message deletion using smart filters, safety confirmations, and enterprise-grade reliability.

---

## 🚀 Key Features & Capabilities

### ⚡ Lightning-Fast Bulk Operations

* Delete hundreds of messages in minutes
* Intelligent rate limiting prevents API throttling
* Auto-retry on failure ensures reliable operation

### 🎯 Smart Message Filtering

* **Keyword match** – Find messages with specific terms
* **User mentions** – Target messages that mention specific users
* **Exact phrases** – Use quotes for precision
* **Bot/User content** – Handle mixed sources seamlessly

---

## 🛡️ Enterprise-Grade Safety

* **Confirmation workflow** – No accidental deletions
* **Timeout** – Requests expire after 5 minutes
* **Preview-first** – Review messages before deletion
* **Granular control** – Choose exactly what to delete

---

## 🔍 Intelligent Search & Preview

* Flexible filters (words, phrases, patterns)
* Preview + count before deletion
* Multi-channel support with context isolation

## 📊 Complete Workflow Management

* Auto-cleanup of bot messages after execution
* Real-time progress tracking
* Debug logs and audit trail
* Static data persistence and cleanup

---

## 🧪 How It Works

### Phase 1: Search Request

```plaintext
User: /cleanup "error messages"
Bot Response:
🔍 Found 15 messages containing "error messages"
📊 Breakdown:
• Will be permanently deleted
• Cannot be undone
• Respond within 5 minutes

✅ Type: @cleaner_jedi yes
❌ Type: @cleaner_jedi cancel
```

### Phase 2: User Confirmation

```plaintext
User: @cleaner_jedi yes
Bot: 🗑️ Deleting 15 messages containing "error messages"
```

### Phase 3: Completion

```plaintext
✅ Cleanup Complete
• 15 messages deleted
• Channel cleaned
• Auto-deletes this message in 5 seconds
```

---

## 🛠️ Technical Architecture

### Core Components

* **Unified Webhook Handler**
  Handles slash commands & mentions, deduplicates events
* **Search Engine**
  Integrates Slack API, parses & filters search terms
* **Safety & Confirmation System**
  Temporary storage, expiration logic, user auth
* **Bulk Operations Engine**
  Message deletion, progress tracking, error handling
* **Cleanup & Memory Management**
  Deletes bot messages, static data cleanup

---

## 📱 User Commands

| Command                | Description                         | Example                    |
| ---------------------- | ----------------------------------- | -------------------------- |
| `/cleanup [term]`      | Search messages containing `[term]` | `/cleanup "webhook error"` |
| `@cleaner_jedi yes`    | Confirm deletion                    | After preview              |
| `@cleaner_jedi cancel` | Cancel pending deletion             | Cancels active request     |

### 🧩 Edge Cases

| Scenario             | Bot Response                                   |
| -------------------- | ---------------------------------------------- |
| No messages found    | "No messages found containing '\[term]'"       |
| Expired confirmation | "Request expired. Please run /cleanup again"   |
| No pending request   | "No pending cleanup found. Run /cleanup first" |
| Invalid search term  | "Please provide a valid search term"           |

---

## ⚙️ Setup Requirements

### Slack App Configuration

**OAuth Scopes:**

```plaintext
✅ chat:write
✅ chat:write.public
✅ channels:history
✅ groups:history
✅ app_mentions:read
✅ commands
```

**Event Subscriptions:**

```plaintext
✅ app_mention
✅ message.channels
```

**Slash Command:**

```plaintext
Command: /cleanup
URL: https://your-n8n.app.cloud/webhook/cleanerjedi
Hint: [search term]
```

### n8n Workflow Setup

Required Nodes:

* **Webhook Trigger** – Captures Slack events
* **Respond to Webhook** – Handles routing
* **Switch Node** – Event type routing
* **Slack API Nodes** – Search, delete, notify
* **JavaScript Nodes** – Logic & validation

---

## ⚡ Advanced Features

### 🧠 Intelligent Deduplication

```javascript
eventId = `cmd_${body.command}_${body.user_id}_${body.trigger_id}`;
if (staticData.recentEvents.includes(eventId)) {
  return []; // Skip duplicate
}
```

### 🔍 Flexible Search Terms

* **Single words:** `test`
* **Phrases:** `"error message"`
* **Special characters:** `webhook-failed`
* Case-insensitive by default

### ♻️ Auto-Cleanup

```javascript
setTimeout(() =&gt; {
  deleteMessage(completionMessage.ts);
  deleteMessage(progressMessage.ts);
}, 5000);
```

### 🧠 Storage Management

* Temp storage for requests
* Auto-expiry cleanup
* Memory-safe event trimming

---

## 📊 Error Handling & Logging

### Error Scenarios

```plaintext
❌ Invalid term
⏰ Expired request
🚫 Access denied
⚠️ Rate limit hit
```

### Debugging & Monitoring

* Event IDs, timestamps
* Key-value storage info
* API response codes

---

## ✅ Usage Examples

### Example 1: Delete Error Messages

```plaintext
/cleanup "error"
→ Bot: Found 23 messages
→ @cleaner_jedi yes
→ ✅ Deleted 23 messages
```

### Example 2: Cancel Midway

```plaintext
/cleanup "from:@john"
→ Bot: Found 8 messages
→ @cleaner_jedi cancel
→ ❌ Operation cancelled
```

### Example 3: Search by Date

```plaintext
/cleanup "2024-01-15"
→ Bot: Found 12 messages
→ @cleaner_jedi yes
→ ✅ 12 messages deleted
```

---

## 🔒 Security & Safety

* ✅ **User confirmation required**
* ✅ **5-minute time limits**
* ✅ **Permission-aware deletions**
* ✅ **Audit trail logging**

---

## 🚀 Performance Optimizations

* Minimal webhook/API usage
* Batch deletion
* Cached recent events

**Memory Handling:**

* Temp data cleanup
* Key expiration
* Cache trimming

---

## 📈 Monitoring & Analytics

### Metrics Tracked

* Messages per operation
* User response times
* Failure & error rates
* Storage performance

### Logging

```javascript
console.log('✅ SUCCESS:', operationDetails);
console.warn('⚠️ WARNING:', warningDetails);
console.error('❌ ERROR:', errorDetails);
console.info('ℹ️ INFO:', informationDetails);
```

---

## 🎉 Summary

### For Users

* ✅ Simple commands
* ✅ Preview + safety
* ✅ Fast processing
* ✅ Clear status feedback

### For Admins

* ✅ Lower API load
* ✅ Full logging
* ✅ Resilient to errors
* ✅ Lightweight memory footprint

### For Developers

* ✅ Modular, clean code
* ✅ Well-documented
* ✅ Scalable & robust
* ✅ Easy to extend

---

PDF how to do Document Included


## 📊 Basic Information

- **Workflow ID:** 4948
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 88
- **Downloads:** 8
- **Created:** 2025/6/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4948)

## 👤 Author

- **Name:** Elie Kattar
- **Username:** @solutionflows

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **code** (×9)
- **if** (×4)
- **slack** (×20)
- **splitInBatches** (×2)
- **wait** (×10)
- **webhook** 
- **set** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
