# Instagram full profile scraper with Apify and Google Sheets

> 
# 📸 Instagram Full Profile Scraper with Apify and Google Sheets

This n8n workflow automates the process of scraping full Instagram profiles using a [custom Apify actor](https://apify.com/mohamedgb00714/instagram-full-profile-scraper), and logs the results into a Google Sheet. It is designed to run at scheduled intervals and process a list of usernames by calling the API, appending the results, and marking them as processed.

---

## 🚀 Features

* ⏱ **Scheduled Execution** – Runs automatically every few minutes.
* 📄 **Google Sheets Integration** – Reads a list of Instagram usernames and updates the same sheet.
* 🧠 **Apify Actor** – Fetches full public Instagram profile data.
* 🧮 **Aggregation** – Batches usernames for bulk scraping.
* ✍️ **Data Logging** – Appends scraped data to a second sheet.
* ✅ **Tracking** – Marks usernames as processed once scraped.

---

## 📁 Workflow Structure

```mermaid
graph TD;
    ScheduleTrigger --&gt; GetUsernames;
    GetUsernames --&gt; LimitItems;
    LimitItems --&gt; AggregateUsernames;
    AggregateUsernames --&gt; CallApifyActor;
    CallApifyActor --&gt; AppendToSheet;
    CallApifyActor --&gt; MarkAsScraped;
```

---

## 🛠 Setup

1. **Google Sheet**

   Create a Google Sheet with:

   * **Sheet 1** named `Usernames` (GID: 0)
     Columns: `username`, `scraped`

   * **Sheet 2** named `fullprofiles` (GID: 458127000)

   Sample sheet:
   🔗 [`Instagram Profile Sheet`](https://docs.google.com/spreadsheets/d/1SQWfZLJscnPoVd7AgtMxo4mltpbZo3WtMzl0AM_lWE4/edit?usp=sharing)

2. **n8n Configuration**

   * Import this workflow into your n8n instance.
   * Set up your **Google Sheets credentials** (`googleSheetsOAuth2Api`).
   * Replace `apify_api_your token` in the HTTP Request node with your [Apify API token](https://console.apify.com/account/integrations).

---

## 📦 Required Credentials

* **Google Sheets OAuth2** – For reading and writing sheet data.
* **Apify API Token** – To call the custom actor for profile scraping.

---

## 📊 Sheets Used

| Sheet Name     | Purpose                          |
| -------------- | -------------------------------- |
| `Usernames`    | Source of usernames to scrape    |
| `fullprofiles` | Destination of full profile data |

---

## 📌 Apify Actor Info

&gt; **Instagram Full Profile Scraper**
&gt; This actor fetches extended profile information from public Instagram profiles.

🔗 [View on Apify](https://apify.com/mohamedgb00714/instagram-full-profile-scraper)

---

## 🔁 Workflow Nodes Overview

| Node                     | Purpose                                                           |
| ------------------------ | ----------------------------------------------------------------- |
| Schedule Trigger         | Triggers the workflow periodically.                               |
| Get Usernames            | Reads usernames from the `Usernames` sheet.                       |
| Limit                    | Limits processing to 20 usernames per run.                        |
| Aggregate                | Groups usernames into a batch for the API call.                   |
| Call Apify Actor         | Sends the usernames to the Apify actor and receives profile data. |
| Append Full Profiles     | Appends the scraped data to the `fullprofiles` sheet.             |
| Mark Username as Scraped | Marks the processed usernames as `scraped = TRUE`.                |
| Sticky Note              | Provides a reference link to the Apify actor used.                |

---

## 📌 Example Sheet Structure

### `Usernames` Sheet

| username     | scraped |
| ------------ | ------- |
| exampleuser1 |         |
| exampleuser2 | TRUE    |

### `fullprofiles` Sheet

| username | full\_name | biography | follower\_count | ... |
| -------- | ---------- | --------- | --------------- | --- |

---

## 🔐 Security & Notes

* This workflow **does not** bypass any Instagram privacy restrictions.
* It works **only with public Instagram profiles**.
* You are responsible for ensuring that scraping complies with **Instagram’s terms of service** and any applicable laws.

---

## 📬 Support

For any issues, feel free to reach out:
👤 [@mohamedgb00714](https://github.com/mohamedgb00714)
📧 [mohamedgb00714@gmail.com](mailto:mohamedgb00714@gmail.com)




## 📊 Basic Information

- **Workflow ID:** 6187
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 3077
- **Downloads:** 307
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6187)

## 👤 Author

- **Name:** Msaid Mohamed el hadi
- **Username:** @mohamedgb00714

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **aggregate** 
- **googleSheets** (×3)
- **httpRequest** 
- **limit** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
