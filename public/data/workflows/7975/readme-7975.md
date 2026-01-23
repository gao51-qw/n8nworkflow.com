# Automated AI & LLM newsletter with BrowserAI and email/Telegram delivery

> *Tired of shelling out big bucks for newsletters?*

This n8n workflow automates the delivery of personalized newsletters by leveraging **[BrowserAI](browser.ai)** for task management and scheduling. It simplifies the process of staying updated with daily news summaries, ensuring efficiency and consistency. BrowserAI is a serverless tool for web automation, solving CAPTCHAs, enabling seamless data extraction.

## Overview
This workflow provides a structured approach to automate newsletter delivery, perfect for anyone desiring regular updates without high costs. It's ideal for tech enthusiasts, marketers, or any individual or organization seeking timely, curated content.

## Setup Instructions

### Pre-conditions
1. **BrowserAI Account:** Ensure you have a BrowserAI account. If not, register!
2. **API Key:** Obtain your API key from your [BrowserAI dashboard](https://browser.ai/dashboard/page/account/tab/api_key).

### Step-by-Step Setup

### 🗓️ Start the Workflow and Get Yesterday’s Date
- Initiates every morning at 8 AM.
- Dynamically calculates and formats yesterday’s date to use as a reference for news content.

### 🌐 Create a BrowserAI Task
- Utilizes BrowserAI to gather relevant news articles and updates from various sources.
- Ensures the latest information is compiled efficiently through BrowserAI’s web extraction capabilities.

### ⏳ Wait for Task Completion
- Includes a control mechanism to pause until the BrowserAI task successfully completes.
- Regular status checks verify task completion to ensure smooth progression.

### 🔍 Retrieve and Verify Task Completion
- Retrieves task metadata with essential news article information upon completion.
- Evaluates completion status:
  - If finalized, moves to the next step.
  - If in fallback status, waits for fulfillment to ensure reliability.

### 📩 Send It to Your Email/WhatsApp/Telegram
- Prepares summarized news content for preferred communication channels.
- Reformats into an engaging newsletter format.
- Sends via email, WhatsApp, or Telegram for timely delivery.

## Customization Guidance
- **Personalize Content:** Tailor the newsletter content by specifying keywords or themes in BrowserAI.
- **Adjust Schedule:** Change the delivery time in n8n according to your preference.

This workflow efficiently automates the newsletter creation and distribution process, solving the problem of costly and manually-intensive updates.


## 📊 Basic Information

- **Workflow ID:** 7975
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 260
- **Downloads:** 26
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7975)

## 👤 Author

- **Name:** Alex Gurinovich
- **Username:** @alexg

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **httpRequest** (×2)
- **scheduleTrigger** 
- **telegram** 
- **switch** 
- **stickyNote** (×4)
- **wait** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
