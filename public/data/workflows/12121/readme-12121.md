# Generate recipe variations from ingredients using Google Gemini and Google Sheets

> **Description:** Don't just get a recipe. Get a Strategy. (Speed / Healthy / Creative) 🍳🤖

This workflow solves the "What should I eat?" problem by using Google Gemini to generate 3 distinct recipe variations simultaneously based on your fridge leftovers. It demonstrates advanced n8n concepts like Array Processing and Data Aggregation.

## Key Features:

Array Processing: Demonstrates how to handle JSON lists (Gemini outputs an array -&gt; n8n splits it -&gt; API calls run for each item).

Aggregation: Shows how to combine processed items back into a single summary email.

Visual Enrichment: Automatically searches for recipe images using Google Custom Search.

## How it works:

Input: Enter ingredients via the Form Trigger.

Generate: Gemini creates 3 JSON objects: "Speed (5min)", "Healthy", and "Creative".

Process: The workflow iterates through the 3 recipes, searching for images and logging data to Google Sheets.

Aggregate: The results are combined into one HTML comparison table.

Deliver: You receive an email with 3 options to choose from.

## Setup Requirements:

Google Sheets: Create a sheet named Recipes with headers: date, ingredients, style, recipe_name, recipe_text, image_url.

Credentials: Google Gemini API, Google Custom Search (API Key & Engine ID), Gmail, Google Sheets.

Configuration: Enter your IDs in the "1. Configuration" node.

## 📊 Basic Information

- **Workflow ID:** 12121
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 14
- **Downloads:** 1
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12121)

## 👤 Author

- **Name:** NODA shuichi
- **Username:** @shuichi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **formTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **code** (×2)
- **httpRequest** 
- **googleSheets** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
