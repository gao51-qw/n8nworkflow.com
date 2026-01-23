# Track US Fintech & Healthtech Funding Rounds: Crunchbase to Google Sheets

### 🌍 **Overview**

This workflow fetches the **latest funding rounds from Crunchbase** (filtered by industry + location), formats the results, and saves them neatly into **Google Sheets** every day.

You end up with a **live deal flow tracker** that updates itself!

---

## 🟢 Section 1: Schedule & Data Fetch

🔗 **Nodes:**
1️⃣ **Daily Check for New Funding Rounds (Schedule Trigger)**
⏰ Runs automatically **every morning at 8 AM**.

* Why it’s useful: You don’t need to run it manually.

2️⃣ **Fetch Crunchbase Funding Rounds (HTTP Request)**
🌐 Pulls funding rounds from Crunchbase’s API.

* Filters:

  * 📍 Location → *United States*
  * 🏭 Industry → *Fintech, Healthtech*
  * ⏳ Sorted → newest first
  * 📄 Limit → 25 per run

💡 **Beginner Benefit**:
✅ No coding required to hit Crunchbase API
✅ Automated — always fetches fresh funding data

---

## 🔵 Section 2: Extract & Format

🔗 **Nodes:**
3️⃣ **Extract & Format Funding Data (Code)**
📑 Converts Crunchbase API JSON into **clean, readable rows** with:

* 🏢 Company Name
* 🏭 Industry
* 💵 Money Raised (USD)
* 📅 Announced Date
* 🏷️ Funding Round Type
* 👥 Investors
* 🔗 Crunchbase URL

💡 **Beginner Benefit**:
✅ No messy JSON → clean structured output
✅ Auto-creates a link to each funding round

---

## 🟣 Section 3: Save to Sheets

🔗 **Nodes:**
4️⃣ **Save to Google Sheets**
📊 Appends the formatted funding round data into your Google Sheet.

* Columns: Company, Industry, Investors, Amount, Date, URL, etc.

💡 **Beginner Benefit**:
✅ Data goes directly into Google Sheets → no copy-paste
✅ You can filter, chart, or connect Sheets to dashboards

---

## 📊 Final Overview

| Section   | What Happens          | Why It’s Useful                                 |
| --------- | --------------------- | ----------------------------------------------- |
| 🟢 Fetch  | Scheduler + API fetch | Always pulls new Crunchbase deals automatically |
| 🔵 Format | Extract + clean JSON  | Turns raw API data into readable rows           |
| 🟣 Save   | Google Sheets         | Creates your own funding tracker sheet          |

---

## 🚀 Why This Workflow is a Game-Changer

* ⏱️ **Zero manual work** → Wake up to fresh funding data daily
* 📊 **Deal flow in Sheets** → Perfect for VCs, founders, analysts
* 🔍 **Customizable filters** → Change location, industry, or # of results
* 🔗 **Action-ready** → Use Sheets to track trends, outreach investors, or monitor competitors

---

✨ With this workflow, you’ve basically built your **own Crunchbase alerts dashboard** — no coding required!

---