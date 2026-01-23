# Recover abandoned onboarding users with personalized emails via Postgres, Gmail & Slack

> ## How it works  
This workflow automatically identifies users who started but did not complete the signup process. It runs on a fixed schedule, checks your database for inactive and incomplete users, and validates the results before proceeding. Each user is then processed individually to send a personalized recovery email and enroll them in a follow-up sequence. Finally, the workflow updates the database to avoid duplicate outreach and notifies the sales team in Slack.

## Step-by-step  
- **Step 1: Run scheduled check and identify abandoned users**  
  - **Schedule Trigger** – Executes the workflow automatically every 24 hours.  
  - **Find Abandoned Users** – Queries Postgres for users marked as incomplete and inactive for over 24 hours.  
  - **If** – Confirms that valid user records exist before continuing.  

- **Step 2: Process users and send recovery emails**  
  - **Loop Over Items** – Processes users one at a time to avoid rate limits and execution errors.  
  - **PrepareEmail email** – Generates a personalized recovery email using a predefined template.  
  - **Send a message** – Sends the recovery email through Gmail.  
  - **Get a message** – Retrieves the sent email details for tracking and thread reference.  
  - **StartSequence email** – Adds the email to a follow-up sequence for engagement tracking.  

- **Step 3: Update records and notify the team**  
  - **Update rows in a table** – Marks the user as contacted to prevent duplicate recovery emails.  
  - **Alert Sales Team** – Sends a Slack notification with user details and recovery status.  

## Why use this?  
- Recover users who abandon onboarding without manual follow-ups  
- Ensure each user receives only one recovery email  
- Keep your Postgres user data accurate and up to date  
- Provide sales teams with real-time visibility via Slack alerts  
- Improve signup completion and activation rates automatically  


## 📊 Basic Information

- **Workflow ID:** 12069
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 18
- **Downloads:** 1
- **Created:** 2025/12/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12069)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **postgres** (×2)
- **slack** 
- **if** 
- **splitInBatches** 
- **@itechnotion/n8n-nodes-inboxplus.inboxPlus** (×2)
- **gmail** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
