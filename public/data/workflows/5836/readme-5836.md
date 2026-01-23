# Create an offline DIGIPIN microservice API for precise location mapping in India

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**What is DIGIPIN?**
DIGIPIN (Digital Pincode) is a 10-character alphanumeric code introduced by India Post. It maps any 3x3 meter square in India to a unique digital address. This helps precisely locate homes, shops, or landmarks, especially in areas where physical addresses are inconsistent or missing.

**What this workflow does**
This workflow creates a fully offline DIGIPIN microservice using only JavaScript - no external APIs are used.

You get two HTTP endpoints:
- GET /generate-digipin?lat={latitude}&lon={longitude} → returns a DIGIPIN
- GET /decode-digipin?digipin={code} → returns the latitude and longitude

You can plug this into any system to:
- Convert GPS coordinates to a DIGIPIN
- Convert a DIGIPIN back to coordinates

**How it works**
1. An HTTP Webhook node receives the request
2. A JS Function node either encodes or decodes based on input
3. The result is returned as a JSON response

All the logic is handled inside the workflow - no API keys, no external calls.

**Why use this**
- Fast and lightweight
- Easily extendable: you can connect this to forms, CRMs, apps, or spreadsheets
- Ideal for field agents, address validation, logistics, or rural operations

## 📊 Basic Information

- **Workflow ID:** 5836
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 188
- **Downloads:** 18
- **Created:** 2025/7/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5836)

## 👤 Author

- **Name:** Srinivasan KB
- **Username:** @srinivasankb

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **respondToWebhook** (×4)
- **switch** (×2)
- **code** (×2)
- **webhook** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
