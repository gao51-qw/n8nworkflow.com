*Tired of shelling out big bucks for newsletters?*

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
