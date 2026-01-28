# Scan URLs with urlscan.io and send results via Gmail

> ## Overview
Receive a URL via Webhook, submit it to **urlscan.io**, **wait ~30 seconds** for artifacts (e.g., screenshot), then email a clean summary with links to the result page, screenshot, and API JSON.

## What this template does
- Ingests a URL from a POST request.
- Submits the URL to **urlscan.io** and captures the scan UUID.
- **Waits 30s** to give urlscan time to generate the screenshot and result artifacts.
- Sends a formatted HTML email via **Gmail** with all relevant links.

## Nodes used
- **Webhook** (POST `/urlscan`)
- **urlscan.io → Perform a scan**
- **Wait** (30 seconds; configurable)
- **Gmail → Send a message**

## Input
```json
{ "url": "https://example.com" }


## 📊 Basic Information

- **Workflow ID:** 6946
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 210
- **Downloads:** 21
- **Created:** 2025/8/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6946)

## 👤 Author

- **Name:** Calistus Christian
- **Username:** @ca7ai

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **stickyNote** (×2)
- **webhook** 
- **urlScanIo** 
- **wait** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
