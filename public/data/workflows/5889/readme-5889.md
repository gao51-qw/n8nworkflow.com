# Automation flow from Notion to GitHub with email notifications

> This automation allows you to track feature requests in Notion, create GitHub issues automatically, and notify your team via email based on issue status. It's ideal for technical and functional teams who collaborate on project delivery using Notion and GitHub.


## 🔹 SECTION 1: Detect and Sort Issues from Notion
**Combining**: Schedule Trigger + Notion Database + Field Mapping + Status Routing

## ⏰ 1. Schedule Trigger
🔧 **Node Type**: Schedule Trigger (you can use a webhook trigger if you are on Notion paid plan)

## 💬 Description: Triggers the workflow every X minutes to check for new or updated Notion database pages.

## 📑 2. Get Many Database Pages (Notion)
🔧 **Node Type**: Notion → Get All Database Pages

## 📋 What it does: Fetches all rows (pages) from a Notion database that represents tasks or feature requests.

✏️ 3. Sort Issues Fields
🔧 **Node Type**: Set

## 📋 Goal: Restructures or cleans data fields such as Title, Status, Labels, and Repository.

## 🔀 4. Switch: Issue Status Decision
🔧 **Node Type**: Switch

## 🎯 What it does: Separates logic based on the Status of the Notion item:

**If status is "To develop"** → proceed to create issue

**Else** → send notification to the team

## 🔹 SECTION 2: GitHub Issue Creation (IF "To develop")
**Combining**: GitHub Node + Notion Update

## 🐙 5. Create an Issue (GitHub)
🔧 **Node Type**: GitHub → Create Issue

## ⚙️ What it does: Creates a new issue on the GitHub repo defined in the Notion row.

## 📥 Inputs: Uses dynamic fields: Title, Description, Labels, Repository.

## 🧩 6. Set Status and Issue URL (Notion Update)
🔧 **Node Type**: Notion → Update Database Page

## 🧠 Role: Updates the status of the issue in Notion to In progress and stores the created GitHub Issue URL.

## 🔹 SECTION 3: Notify Team on Already In-Progress Items (IF NOT "To develop")
Combining: Notion Users + Filtering + Email Grouping + Gmail

## 👥 7. Get Many Users (Notion Users)
🔧 **Node Type**: Notion → Get All Users

## 📥 What it does: Retrieves the list of team members (to be notified).

## 🧠 8. Map Notion Users
🔧 **Node Type**: Set

## 📋 Role: Maps and formats data for each user (e.g., Name, Email, Role).

## 🧹 9. Exclude Bot
🔧 **Node Type**: Switch

## 🚫 What it does: Excludes automation/bot users (e.g., notifications@noreply).

## 🧮 10. Group Recipients
🔧 **Node Type**: Aggregate

## 🎯 Goal: Collects all user emails into a single array to send one email to all recipients.

## 📬 11. Send a Message (Gmail)
🔧 **Node Type**: Gmail → Send Email

## 📊 Basic Information

- **Workflow ID:** 5889
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 687
- **Downloads:** 68
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5889)

## 👤 Author

- **Name:** Fady Bekkar
- **Username:** @fadybekkar

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **notion** (×3)
- **github** 
- **set** (×2)
- **scheduleTrigger** 
- **switch** (×2)
- **gmail** 
- **aggregate** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
