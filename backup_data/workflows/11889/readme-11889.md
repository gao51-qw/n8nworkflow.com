# AI-powered webinar feedback replies with GPT-4, Google Sheets, and Gmail

> ## How it works
This workflow captures webinar feedback through a webhook and normalizes the submitted data for processing. It stores raw feedback in Google Sheets, uses an AI model to understand sentiment and intent, and generates a personalized response. A professional HTML thank-you email is sent automatically to each attendee. All replies and delivery details are logged back into the spreadsheet for tracking.

## Step-by-step
- **Receive webinar feedback**
  - **Feedback Webhook** – Accepts feedback submissions from a webinar form in real time.
  - **ID Generation** – Creates a human-readable, unique feedback ID for tracking.
  - **Normalize Feedback** – Cleans and standardizes incoming fields like name, email, rating, and comments.

- **Store and enrich feedback**
  - **Store Partial** – Saves the raw feedback data into Google Sheets.
  - **Common Resources** – Attaches shared webinar resources such as recordings and slides.

- **Analyze feedback with AI**
  - **Message a model** – Evaluates sentiment, engagement level, and intent using an AI model.
  - **Parse AI Response** – Extracts structured insights like segment, reply text, and next steps.

- **Generate and send follow-up**
  - **Merge** – Combines feedback data, AI response, and resources.
  - **Build Email HTML** – Creates a clean, professional HTML email tailored to each attendee.
  - **Send AI Thank You Email** – Sends the personalized follow-up via Gmail.

- **Log final outcome**
  - **Store Feedback** – Updates Google Sheets with the sent email content, timestamp, and status.

## Why use this?
- Save time by automating webinar feedback follow-ups end to end.
- Ensure every attendee receives a thoughtful, personalized response.
- Maintain a complete feedback and communication log in one place.
- Improve engagement without sounding promotional or generic.
- Scale post-webinar communication without manual effort.


## 📊 Basic Information

- **Workflow ID:** 11889
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 86
- **Downloads:** 8
- **Created:** 2025/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11889)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **code** (×5)
- **googleSheets** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
