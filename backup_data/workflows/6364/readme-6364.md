# Reddit to Google Sheets: tracking freelance/job leads

> ## 🧩 n8n Workflow Overview:

**Goal:**  
Get Reddit posts from specific subreddits, filter those mentioning freelance/gigs and n8n, extract top-level comments, remove mod replies, and store everything into Google Sheets.

---

## ⚙️ Step-by-step Node Explanation

### **Start (Trigger)**  
**Type:** Cron node  
**Runs:** Every 2 hours  
**Purpose:** Starts the workflow at regular intervals  

---

### **HTTP Request - Get Posts from Reddit**  
**Type:** HTTP Request  
**Method:** GET  
**Auth:** OAuth2 (Reddit App)  
**Purpose:** Pulls the 10 latest posts from any subreddits of your choice  

---

### **Filter Relevant Posts**  
**Type:** IF Node  
**Purpose:** Filters out noise, keeps only potential job leads  

---

### **HTTP Request - Get Post Comments**  
**Type:** HTTP Request  
**Auth:** OAuth2  
**Purpose:** Gets full comment thread for each post  

---

### **Extract Top-Level Comments**  
**Type:** Function Node  
**Purpose:** Code filters only top-level comments (ignores nested ones)  

---

### **Remove Mod Comments**  
**Type:** IF Node  
**Purpose:** Excludes mod replies that are usually auto-messages or rule enforcement  

---

### **Format Clean Data**  
**Type:** Set Node  
**Fields captured:**  
- Subreddit  
- Post Title  
- Post URL  
- Comment Body  
- Reddit Username  
- Timestamp  

---

### **Append to Google Sheets**  
**Type:** Google Sheets Node  
**Operation:** Append Row  
**Sheet:** Pre-created sheet with matching column names  
**Purpose:** Logs everything into your spreadsheet neatly  

---

## 💡 Bonus Logic:
- If a post has no comment → adds a blank  
- Runs smoothly with Reddit’s OAuth2 (no scraping)  
- All tools used are free-tier  

---

## 📹 See It in Action:
I posted a quick video walkthrough on YouTube (no audio, just execution):  
👉 [https://youtu.be/JsUVVhYm8p4](https://youtu.be/JsUVVhYm8p4)


## 📊 Basic Information

- **Workflow ID:** 6364
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 82
- **Downloads:** 8
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6364)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **filter** 
- **scheduleTrigger** 
- **httpRequest** (×8)
- **set** (×8)
- **splitOut** (×8)
- **merge** 
- **reddit** 
- **if** 
- **googleSheets** (×2)
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
