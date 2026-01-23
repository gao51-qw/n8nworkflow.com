# Send scheduled financial digests to Telegram from Notion with multi-schedule alerts

> ### Who’s it for
Solo founders and spreadsheet gremlins who track everything in **Notion** and want crisp **Telegram** pings without opening a single page.

### What it does
This workflow runs on **daily**, **weekly**, and **monthly** schedules, queries multiple Notion databases, summarizes key numbers, formats human‑readable messages, and sends them to Telegram.

**Out of the box it sends:**
- **Daily**: *Total Expenses Today* (sum of `Debit` in **Financial Transaction** since start of day).
- **Weekly**: *Total Expenses This Week*, *Monthly Budget Left/Spent* per budget item, *Financial Obligations due* (from **Scheduler**).
- **Month End (28th by default)**: *Total Expenses This Month*, *Total Income This Month*, *Funds status*.
- **Month Start**: *Liquidity snapshot* — balances for **Liquid** and **Semi Liquid** assets (from **Assets and Liabilities**).

Messages are built via **Code** nodes (simple JS) and delivered to Telegram.

---

## How it works (nodes & flow)
- **Schedule Triggers**: Daily, Weekly, Monthly (start & end).
- **Notion queries** (selected DBs):
  - **Financial Transaction**: filters on `Created time`, `Type` = `Debit`/`Invoice`.
  - **Budget**: `Currently Applicable = true`, `Payment Schedule Type = Monthly`, formula: `Monthly Budget Left`.
  - **Income**: month-to-date `Created time` filter.
  - **Funds**: reads `Amount Left`, `Amount Spent`, `Amount Needed`.
  - **Scheduler**: `Next Date` on or before now, `Type = Financial`, `Repeat Type != off`.
  - **Assets and Liabilities**: `Liquidity` = `Liquid` or `Semi Liquid`.
- **Summarize nodes**: sum `property_cost` / `property_balance` fields.
- **Set/Code nodes**: reshape Notion properties (e.g., `property_next_date.start` → `next-date`) and format text blocks like:
  - `Total Expenses Today - Rs X`
  - `Monthly Budget Left - &lt;list&gt;`
  - `Invoices still to pay - &lt;list&gt;`
  - `Funds Info - spent/needed`
  - `Liquidity Balance - &lt;list&gt;`
- **Telegram**: sends the composed message to `chatId`.

&gt; Tip: If your Notion property names differ, adjust the `filters` and `Set` node mappings accordingly.

---

## Requirements
- n8n (Cloud or self‑hosted)
- Notion workspace with **[Personal Finance System Notion template](https://www.notion.so/templates/personal-finance-system)** cloned into your workspace. 
- Telegram account (for bot + chat)

---

## Setup (quick)
1. **Telegram**
   - Create a bot via **@BotFather** → get **Bot Token**.
   - Get your **Chat ID** (n8n Telegram Trigger “Run once”, then message your bot, copy `chat.id`).
   - In the Telegram **Send** node, set `chatId` (or use an env var/secret).

2. **Notion**
   - Create an **Internal Integration**, copy the token, and **share** each DB with the integration.
   - In the Notion nodes, select your **Notion credential** and map the DB IDs (already present in the JSON).

3. **n8n Credentials**
   - **Notion API** credential: paste the integration token.
   - **Telegram API** credential: paste Bot Token and set `chatId` in the node or via expression.

4. **Time windows**
   - Daily: `on_or_after: $now.startOf('day')`
   - Weekly: `on_or_after: $now.startOf('week')`
   - Monthly: `on_or_after: $now.startOf('month')`
   - Monthly end trigger runs on day `28` by default — change in the **Schedule** node.

---

## Customization
- Change the **date ranges**, add **currency symbol**, or swap **summaries** for **tables**.
- Add more **filters** (labels, categories) to the Notion nodes.
- Replace Telegram with Slack/Email by swapping the final node.
- To avoid “expects dateTime but got object”, convert `$now` to string: `{{$now.toISO()}}` or parse Notion dates with `DateTime.fromISO(...)` as needed.

---

## Example messages
```
Total Expenses Today - Rs 1,840
Monthly Budget Left - 3
1) Groceries: Rs 4,500
2) Dining Out: Rs 1,200
3) Utilities: Rs 800

Invoices still to pay - 2
1) Figma Pro: Rs 3,000
2) AWS: Rs 2,450
```

---

## Why this is useful
- Keeps your **spend & cash** visibility tight without opening Notion.
- Turns your financial system into **low‑effort telemetry** — you just look at Telegram.

---

### Credentials you’ll likely name in n8n
- **Notion**: `Notion account`
- **Telegram**: `Accountant AI`

&gt; Works great with the “Personal Finance System” style schemas. Adjust property keys (`property_*`) if your Notion columns differ.

## 📊 Basic Information

- **Workflow ID:** 10669
- **Complexity:** advanced
- **Node Count:** 46
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10669)

## 👤 Author

- **Name:** Anoop
- **Username:** @anoop

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** (×4)
- **set** (×6)
- **code** (×12)
- **telegram** 
- **notion** (×12)
- **summarize** (×6)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 46 nodes with 40 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
