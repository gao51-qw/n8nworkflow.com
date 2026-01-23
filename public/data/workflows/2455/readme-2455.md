# Check for bargain flights and get notified using Amadeus and Gmail

> ## What this template does
This workflow uses the Amadeus API, every day to check for bargain flights for an itinerary and price target of your choice. It then automatically emails you once it found a match.

## Setup
1. Create an api account on https://developers.amadeus.com/
2. In **Amadeus Flight Search**, connect to Oauth2 API:
  -- Grant Type - Client Credentials
  -- Access Token URL - https://test.api.amadeus.com/v1/security/oauth2/token
  -- Client ID/Secret - from your account
3. Set your details in **Gmail**
4. Set your desired Origin/Destination airports in FromTo
5. Set the dates ahead you wish to search in **Get Dates** (default is 7 days and 14 days)
6. Set the price target in **Under Price**

## How to test it
After completing the setup steps above, just hit 'Test workflow'!

## 📊 Basic Information

- **Workflow ID:** 2455
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 7599
- **Downloads:** 759
- **Created:** 2024/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2455)

## 👤 Author

- **Name:** Jay Hartley
- **Username:** @jay

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **code** (×3)
- **gmail** 
- **splitInBatches** 
- **wait** 
- **filter** 
- **set** 
- **httpRequest** (×2)
- **stickyNote** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
