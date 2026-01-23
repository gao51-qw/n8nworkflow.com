# Smart travel package finder: Search flights & hotels with Skyscanner-Booking.com

> ## Introduction
Automates travel itinerary creation by searching flights and hotels via APIs, then uses AI to generate personalized recommendations delivered as HTML emails through Gmail.
## How It Works
Webhook receives travel requests, searches Skyscanner and Booking.com APIs in parallel, merges results, uses AI to create optimized itineraries, formats as HTML email, sends via Gmail.
## Workflow Template
Webhook → Parse & Validate → Parallel Searches (Flights: Skyscanner | Hotels: Booking.com) → Merge Data → AI Generate Itinerary → Format HTML Email → Send Gmail → Webhook Response
## Workflow Steps
1. Trigger & Validate: Webhook receives request, extracts destination/dates/budget/preferences, validates data, converts to API parameters.
2. Parallel Search: Skyscanner fetches flights with price/duration/airline. Booking.com retrieves hotels with ratings/pricing. Merge combines both into single JSON object.
3. AI Generation: AI analyzes merged data, evaluates by price/duration/rating, creates itinerary with daily schedule, pairings, costs, and rankings.
4. Delivery: Converts JSON to HTML email with tables and booking links. Gmail sends email. Webhook confirms success.
## Setup Instructions
1. API Configuration: Add Skyscanner and Booking.com API credentials in n8n.
2. Gmail Setup: Configure OAuth2 authentication.
3. Customization: Copy webhook URL, adjust validation rules, modify AI prompts and HTML template.
## Prerequisites
- Skyscanner API key
- Booking.com API credentials
- Gmail with OAuth2
- n8n instance
## Use Cases
- Personal vacation planning
- Business travel arrangements
## Customization
- Add APIs (Kiwi, Expedia)
- Filter by budget, Modify email design
## Benefits
- Saves 2-3 hours per trip
- Real-time pricing comparison



## 📊 Basic Information

- **Workflow ID:** 10354
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1003
- **Downloads:** 100
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10354)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **httpRequest** (×2)
- **merge** 
- **code** (×2)
- **gmail** 
- **respondToWebhook** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
