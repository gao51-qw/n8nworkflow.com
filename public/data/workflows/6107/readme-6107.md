# Telegram bot for finding top-rated restaurants with Google Maps via SerpAPI

> # Telegram Restaurant Bot Workflow
![Screenshot 20250718 at 3.07.08 AM.png](fileId:1773)
---
This workflow creates a Telegram bot that fetches the top 5 rated restaurants for any specified area in Egypt using SerpAPI's Google Maps search. It's designed to provide quick, detailed, and richly formatted information directly in your chat.

## Key Features

- **Simple Command Trigger**: Activate the search with a straightforward command (e.g., التحرير)
- **Real-Time Restaurant Data**: Utilizes SerpAPI to pull live data, ratings, and details from Google Maps
- **Top 5 Ranking**: Automatically sorts restaurants by their rating in descending order and presents the top five
- **Richly Formatted Replies**: Generates a clean, user-friendly Markdown message with essential details:
  - Rating ⭐
  - Phone Number ☎️
  - Website 🌐
  - Service Options (Dine-in ✅ | Takeaway ❌)
  - A direct link to the location on a map 📍
- **Arabic Language Focused**: The workflow is initially configured to process requests and format replies in Arabic

## How It Works

1. A user sends a place name like `التحرير` to the Telegram bot
2. The **Parse Area** node extracts the location name from the message text
3. The **Geocode (Nominatim)** node finds the geographic coordinates for the area (this can be adapted for more precise location searches)
4. The **Find Restaurants (SerpAPI)** node uses this area to perform a Google Maps search
5. The **Format Reply** node processes the search results. It sorts them by rating, takes the top 5, and builds a detailed Markdown-formatted string
6. The **Send to Telegram** node delivers the final formatted message back to the user who made the request

## Setup

- **Telegram**: Configure your credentials in the Telegram Trigger and Send to Telegram nodes
- **SerpAPI**: Add your free or paid API key in the Find Restaurants (SerpAPI) HTTP Request node

## 📊 Basic Information

- **Workflow ID:** 6107
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 529
- **Downloads:** 52
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6107)

## 👤 Author

- **Name:** M Sayed
- **Username:** @msayed-cs

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **telegramTrigger** 
- **function** (×2)
- **httpRequest** (×2)
- **telegram** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
