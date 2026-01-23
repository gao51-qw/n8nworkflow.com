# Schedule social media posts from Google Sheets to Twitter & Instagram

> # Social Media Auto-Poster (Google Sheets → Twitter & Instagram)

This workflow automatically:
1. Pulls rows marked as `Pending` from a Google Sheet.
2. Generates a formatted Instagram caption and HTML preview.
3. Converts the HTML into an image via HCTI.io.
4. Posts the content:
   - As a tweet (text only) to Twitter (X).
   - As a post (image + caption) to Instagram via the Facebook Graph API.
5. Marks the row in Google Sheets as `Posted` with a timestamp.

It runs **every 5 hours** (configurable via the `Schedule Trigger`).

---

## Requirements

- **Google Sheets API Credentials** connected in n8n.
- **HCTI.io account** (HTML → Image API).
- **Twitter (X) OAuth1 credentials**.
- **Facebook/Instagram Graph API** access token (for the business account/page).
- A Google Sheet with at least these columns:
  - `RowID`
  - `Caption`
  - `Desc`
  - `Hashtags`
  - `Status`

Set `Status` to `Pending` for any row you want posted.

---

## Setup

1. Import the JSON workflow (`My_workflow.json`) into your n8n instance.
2. Link all credentials (replace placeholders with your own API keys and tokens).
3. Update the Google Sheet ID and Sheet Name inside the `Get row(s) in sheet` and `Update Status Posted` nodes.
4. (Optional) Adjust the posting interval in the `Schedule Trigger` node.

---

## How It Works

1. **Trigger**: Runs every 5 hours.
2. **Fetch Rows**: Reads Google Sheets for rows with `Status = Pending`.
3. **Caption Generation**: Combines `Desc` + `Hashtags` into `final_caption`.
4. **HTML → Image**: Converts caption to a styled 1080x1080 post.
5. **Social Posting**:
   - Posts the caption to Twitter (text only).
   - Uploads the image + caption to Instagram.
6. **Update Status**: Marks the row as `Posted on [timestamp]`.

---

## Notes

- Facebook/Instagram tokens **expire**; refresh or use long-lived tokens.
- HCTI.io may require a paid plan for high volumes.
- Works best with a **business Instagram account linked to a Facebook Page**.

---

## License

This workflow can be reused and adapted freely under the MIT license.


## 📊 Basic Information

- **Workflow ID:** 6342
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1394
- **Downloads:** 139
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6342)

## 👤 Author

- **Name:** Parag Javale
- **Username:** @pollar-beer

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **set** 
- **httpRequest** (×2)
- **facebookGraphApi** (×2)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
