# Automatic pantry inventory management with Notion and email notifications

> 
## Pantry Soft-Stock Refill — Notion Thresholds → Grocery List + Email

### What it does (the vibe)

Your pantry’s calm concierge. Each evening it checks your Notion **Pantry** for items at or below your **Reorder Level**, adds tidy rows to **Grocery List**, and sends a pretty summary email you can shop from. ✨🛒

### Perfect for

Moms, home managers, and founders who want a kitchen that quietly manages itself—no last-minute “we’re out!” moments.

### Requirements

* n8n with **Notion** + **Email** credentials connected
* Two Notion databases: **Pantry** and **Grocery List**

### Notion schema (copy me)

**Pantry**

* `Name` (title)
* `Quantity` (number)
* `ReorderLevel` (number)
* `Notes` (rich\_text, optional)

**Grocery List**

* `Item` (title)
* `Qty` (number)
* `Status` (select: `To Buy`, `Done`)
* `Source` (text)
* `Notes` (rich\_text, optional)

### How it flows (nodes)

1. **Cron** – daily at 6pm (edit to taste)
2. **Notion: Search** – finds items at/below `ReorderLevel`
3. **Function** – calculates how many to add (`ReorderLevel − Quantity`, minimum 1)
4. **Notion: Create** – writes rows to **Grocery List** with `Status = To Buy`
5. **Function + Email** – sends a chic, readable checklist (or a “You’re fully stocked ✨” note if nothing to buy)

### 60-second setup

* Replace placeholders: `YOUR_NOTION_PANTRY_DB`, `YOUR_NOTION_GROCERY_DB`, `YOUR_EMAIL`
* Connect Notion + Email credentials (no secrets in nodes)
* Run once with a test item to confirm a new **Grocery List** row appears
* Adjust the **Cron** time to your evening rhythm

### Nice touches you can toggle

* Add `Source = Auto` to track automation adds
* CC a partner or roommate on the email
* Optional Telegram ping for “urgent” items (milk, diapers, coffee ☕)

### Submission notes

* Markdown only ✅
* No hardcoded API keys ✅
* Real-world use case, minimal setup ✅

Enjoy the quiet luxury of a pantry that plans ahead. 💖


## 📊 Basic Information

- **Workflow ID:** 7918
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 61
- **Downloads:** 6
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7918)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **cron** 
- **set** 
- **notion** (×3)
- **function** (×2)
- **emailSend** 
- **errorTrigger** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
