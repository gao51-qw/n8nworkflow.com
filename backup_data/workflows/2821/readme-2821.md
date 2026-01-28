# Domain outbound : automate lead extraction, and targeted outreach

> # **Domain Outbound Machine: Automate Lead Generation, Email Extraction, and Targeted Outreach with n8n**

## **Description**  
**Domain Outbound Machine** is an n8n workflow designed to fully automate the domain sales process: lead generation, email extraction, personalized outreach, and automated email sending. It also stores extracted email addresses and sent emails in an Excel file for tracking and follow-up.

## **How It Works?**

### **1. Domain Input**  
You provide the domain name you want to sell. The workflow takes this domain as the starting point.

### **2. Google Maps Query Generation**  
The workflow automatically generates 100 Google Maps queries based on the domain's niche or industry. This ensures you target businesses or individuals who might be interested in acquiring the domain.

### **3. Web Scraping for Emails**  
Using the generated queries, the workflow scrapes relevant websites to extract email addresses. This step ensures you have a targeted list of potential buyers.

### **4. Email Enrichment**  
For each extracted email, the workflow gathers publicly available information (e.g., LinkedIn, company websites) to enhance personalization.

### **5. Personalized Email Creation**  
Based on the enriched data, the workflow crafts a custom email for each lead, emphasizing the domain’s value, its relevance to their business, and a compelling call-to-action.

### **6. Email Sending via Gmail**  
The workflow sends the personalized emails directly through your Gmail account, ensuring timely and professional outreach.

### **7. Email & Lead Tracking in Excel**  
All extracted email addresses and sent messages are automatically stored in an Excel file, allowing you to track responses and manage follow-ups efficiently.

## **Key Features**
✅ **Automated Lead Generation** – Saves time by automatically finding and extracting potential leads.  
✅ **Personalized Outreach** – Boosts engagement by tailoring each email to the recipient.  
✅ **Seamless Integration** – Uses n8n’s automation to connect Google Maps, web scraping tools, and Gmail in one workflow.  
✅ **Scalable & Trackable** – Adjust the number of queries or emails as needed, while keeping track of everything in Excel.  

**Domain Outbound Machine** is perfect for domain investors, digital marketers, and anyone looking to sell domains efficiently. By automating the tedious tasks, you can focus on closing deals and growing your business.


## 📊 Basic Information

- **Workflow ID:** 2821
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 3410
- **Downloads:** 341
- **Created:** 2025/1/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2821)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **removeDuplicates** (×2)
- **splitOut** 
- **aggregate** 
- **splitInBatches** (×4)
- **httpRequest** (×3)
- **wait** (×2)
- **manualTrigger** 
- **if** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **code** (×6)
- **stickyNote** (×4)
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
