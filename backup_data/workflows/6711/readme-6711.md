# Automated lead response template using Google Forms, Sheets, and Gmail

> ## 📋 What this workflow does

This automated workflow streamlines the process of responding to leads who submit a Google Form. It instantly sends a personalized confirmation email to the lead and notifies your internal team with the submission details — ensuring no lead goes unnoticed.

It’s perfect for freelancers, agencies, small businesses, or any team collecting lead information through Google Forms and looking to reduce response time while staying organized.

---

## ⚙️ Workflow Overview

- **Trigger**: A new row is added to a connected Google Sheet via Google Forms
- **Email to lead**: Sends a custom confirmation message using Gmail
- **Email to team**: Notifies internal staff with all the lead’s submitted details

The entire process happens instantly and automatically, creating a better user experience and improving lead management.

---

## 🛠️ Setup Instructions

1. **Connect your Google Form to a Sheet**
   - In Google Forms, click the green Sheets icon under “Responses”
2. **Create or connect Gmail & Google Sheets credentials in n8n**
3. **Update node field references if needed**
   - Your Google Sheet must include these columns:
     - `Timestamp`
     - `Full Name`
     - `Email`
     - `Phone Number (optional)`
     - `What are you interested in?`
     - `Additional message or query`
4. **Edit the Gmail nodes**
   - Replace the placeholder email `your@email.com` with your actual sending address
   - Personalize the subject and body text if desired
5. **Add your own notification recipient in the internal email node**

---

## 🗒️ Notes

- This workflow uses Spanish field labels — adapt field names if your form is in another language
- Sticky notes inside the workflow explain where to update text and variables
- All personal data has been removed from this public version

---

## ✅ Tools Used

- Google Forms
- Google Sheets
- Gmail
- n8n core nodes (no external APIs)

## 📊 Basic Information

- **Workflow ID:** 6711
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 295
- **Downloads:** 29
- **Created:** 2025/7/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6711)

## 👤 Author

- **Name:** youpath
- **Username:** @path

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **gmail** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
