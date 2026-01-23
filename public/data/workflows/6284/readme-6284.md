# Automate multi-bank transaction sync & reporting with GoCardless & Maybe Finance

> # 🏦 GoCardless ⇄ Maybe Finance — Automatic Multi-Bank Sync & Weekly Overview 💸

### Who’s it for 🤔
Freelancers, founders, households, and side-hustlers who work with several bank accounts but want **one, always-up-to-date budget** inside Maybe Finance—no more CSV exports or copy-paste.

---

### How it works / What it does ⚙️
1. **Schedule Trigger** (cron) fires every Monday 📅  
   *(switch to Manual Trigger while testing)*  
2. **Get access token** — fresh 24 h GoCardless token 🔑  
3. **Fetch transactions** for each account:  
   - Revolut Pro  
   - Revolut Personal  
   - ABN AMRO  
   *(add extra HTTP Request nodes for any other GoCardless-supported banks)*  
4. **Extract booked** — keep only settled items 🗂️  
5. **Set transactions …** — map every record to Maybe Finance’s schema 📝  
6. **Merge all arrays** into one payload 🔄  
7. **Create transactions to Maybe** — POSTs each item via API 🚀  
8. **Resend Email** — sends you a “Weekly transactions overview” 📧

All done in a single run — your Maybe dashboard is refreshed and you get an inbox alert.

---

### How to set up 🛠️
1. **Import** the template into n8n (cloud or self-hosted).  
2. **Create credentials**  
   - GoCardless `secret_id` & `secret_key`  
   - Maybe Finance API key  
   - (Optional) Resend API key for email notifications  
3. **One-time GoCardless config** (run the blocks on the left):  
   1. `/token/new/` → obtain token  
   2. `/institutions` → find institution IDs  
   3. `/agreements/enduser/` → create agreements  
   4. `/requisitions/` → get the consent URL & finish bank login  
   5. `/requisitions/{id}` → copy the GoCardless `account_id`s  
4. **Create the same accounts in Maybe Finance** and run the HTTP GET request in the purple frame and copy their `account_id`s.  
5. Open each **Set transactions …** node and paste the correct Maybe `account_id`.  
6. Adjust the **Schedule Trigger** (e.g. daily, monthly).  
7. **Save & activate** 🎉

---

### Requirements 📋
- n8n 1.33 +  
- GoCardless app (secret ID & key, live or sandbox)  
- Maybe Finance account & API key  
- (Optional) Resend account for email

---

### How to customize ✨
- **Include pending transactions**: change the Item Lists filter.  
- **Add more banks**: duplicate the “Get … transactions” → “Extract booked” → “Set transactions” path and plug its output into the Merge node.  
- **Different interval**: edit the cron rule in Schedule Trigger.  
- **Disable emails**: just remove or deactivate the Resend node.  
- **Send alerts to Slack / Teams**: branch after the Merge node and add a chat node.

Happy budgeting! 💰

## 📊 Basic Information

- **Workflow ID:** 6284
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 957
- **Downloads:** 95
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6284)

## 👤 Author

- **Name:** Giannis Kotsakiachidis
- **Username:** @gianniskotsas

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **httpRequest** (×10)
- **stickyNote** (×5)
- **merge** 
- **n8n-nodes-resend.resend** 
- **itemLists** (×2)
- **set** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
