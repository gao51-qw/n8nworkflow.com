# Improving title clarity with Google Sheets and email notifications

> ## 🎁 Automate YouTube Giveaway Winner Selection with YouTube Comments Scraper API

**Description:**
Easily automate your YouTube video giveaways using n8n and the [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper). This workflow fetches comments, selects a random winner, logs results to Google Sheets, and notifies the admin—all hands-free!

---

## 🧩 Node-by-Node Breakdown

| Node | Name                             | Purpose                                                                                                                                      |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣  | **Form Trigger**                 | Captures a YouTube video URL from a user via form submission.                                                                                |
| 2️⃣  | **Fetch YouTube Comments**       | Makes a POST request to [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper) to retrieve comments. |
| 3️⃣  | **Check API Response Status**    | Ensures that the response status is `200` before proceeding.                                                                                 |
| 4️⃣  | **Select Random Commenter**      | Parses the comments and selects a random commenter as the giveaway winner.                                                                   |
| 5️⃣  | **Log Winner to Google Sheet**   | Appends winner name, video URL, and date to a Google Sheet for record-keeping.                                                               |
| 6️⃣  | **Notify Winner Email**          | Sends a congratulatory email to the admin with the selected winner's name.                                                                   |
| 7️⃣  | **Notify: Invalid API Response** | If the API fails, sends an alert to the admin about the issue.                                                                               |


---

## 🔑 How to Get Your RapidAPI Key

To use the [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper), follow these steps:

1. Go to [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper).
2. Sign in or create a free RapidAPI account.
3. Click the **"Subscribe to Test"** button.
4. Copy your **x-rapidapi-key** from the "Code Snippets" or "Header Parameters" section.
5. Paste it into your HTTP Request node in n8n.

---

## 🎯 Use Case & Benefits

### ✅ Use Case:

* Automatically pick a **random commenter** from a **YouTube video** as a **giveaway winner**.

### 🚀 Benefits:

* **Fully automated** – no manual comment scanning or random selection.
* **Accurate & fair** – random selection from valid commenters only.
* **Time-saving** – especially for creators running multiple giveaways.
* **Integrated logging** – keep a historical record of all winners in Google Sheets.
* **Email alerts** – get notified whether the flow succeeds or fails.

---

## 👥 Who Is This For?

* **YouTube Content Creators** running giveaways.
* **Marketing Teams** promoting products via YouTube contests.
* **Agencies** managing influencer campaigns.
* **Developers & Automation Enthusiasts** looking to simplify giveaway processes.

---

## 💡 Why Use YouTube Comments Scraper API?

The [**YouTube Comments Scraper API**](https://rapidapi.com/PrineshPatel/api/youtube-comments-scraper) offers a simple and effective way to extract public YouTube comments programmatically. It’s fast, reliable, and integrates smoothly with platforms like n8n.

You’ll use this API:

* To retrieve all comments from a YouTube video.
* To power fair and transparent giveaways.
* To trigger downstream automations like winner logging and notification.
---
Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!

## 📊 Basic Information

- **Workflow ID:** 8827
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8827)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** 
- **if** 
- **code** 
- **emailSend** (×2)
- **googleSheets** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
