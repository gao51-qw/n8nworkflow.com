# Meta ads bulk launcher with Google Drive integration and Slack notifications

> ## Who's it for

Marketing teams, agencies, and businesses who regularly create tens or hundreds of Facebook ads and store their creative assets in Google Drive. 

Perfect for teams who want to stop doing manual work of uploading and setting up ads.

## What it does

This workflow automates the entire Facebook ad creation process from a simple form submission. 

Users provide a Google Drive link to their media file, ad copy, and target URL through a form. 

The workflow then automatically fetches the media from Google Drive, creates a new Facebook ad with proper naming conventions (matching the Drive file name), applies tracking parameters, and publishes it to the specified ad set. 

It sends Slack notifications upon successful ad creation or if errors occur.

## How it works

1. User submits a form with Google Drive media link, ad set name, ad text, and destination URL
2. Workflow authenticates and fetches the image/video from Google Drive
3. Creates a Facebook ad with the media, using the Drive filename as the ad name
4. Applies UTM tracking parameters automatically
5. Disables Facebook's automated rules to maintain manual control
6. Sends status updates via Slack (success or failure notifications)

## Requirements

- Self-hosted n8n instance
- Google Drive account with API access
- Facebook Business Manager with active ad account(s)
- Slack workspace for notifications

## How to customize the workflow

- Connect multiple Facebook ad accounts for agency use
- Modify the form fields to include additional ad parameters
- Customize Slack notification messages and channels

## 📊 Basic Information

- **Workflow ID:** 8276
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 96
- **Downloads:** 9
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8276)

## 👤 Author

- **Name:** Chris Rudy
- **Username:** @chrisrudy

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **code** (×3)
- **facebookGraphApi** (×8)
- **splitInBatches** (×2)
- **wait** (×2)
- **errorTrigger** 
- **stopAndError** (×2)
- **slack** (×3)
- **stickyNote** (×6)
- **formTrigger** 
- **googleSheets** 
- **filter** 
- **googleDrive** (×2)
- **if** 
- **switch** (×2)
- **set** (×3)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
