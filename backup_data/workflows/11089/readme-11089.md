# Send server-side conversions to the Meta Ads API (CAPI)

> Struggling with inaccurate Meta Ads tracking due to iOS 14+ and ad blockers? 📉 This workflow is your solution. It provides a robust, server-side endpoint to reliably send conversion events directly to the Meta Conversions API (CAPI).

By bypassing the browser, you can achieve more accurate ad attribution and optimize your campaigns with better data. This template handles all the required data normalization, hashing, and formatting, so you can set up server-side tracking in minutes.

## ⚙️ How it works
This workflow provides a webhook URL that you can send your conversion data to (e.g., from a web form, CRM, or backend). Once it receives the data, it:

- Sanitizes User Data: Cleans and normalizes PII like email and phone numbers.
- Hashes PII: Securely hashes the user data using SHA-256 to meet Meta's privacy requirements.
- Formats the Payload: Assembles all the data, including click IDs (fbc, fbp) and user info, into the exact format required by the Meta CAPI.
- Sends the Event: Makes a direct, server-to-server call to Meta, reliably logging your conversion event.
## 👥 Who’s it for?
- Performance Marketers: Improve ad performance and ROAS with more accurate conversion data.
- Lead Generation Businesses: Reliably track form submissions as conversions.
- E-commerce Stores: Send purchase events from your backend to ensure nothing gets missed.
- Developers: A ready-to-use template for implementing server-side tracking without writing custom code from scratch.


## 🛠️ How to set up
Setup is straightforward. You'll need your Meta Pixel ID and a CAPI Access Token.

For a complete walkthrough, check out the tutorial video for this workflow on YouTube: https://youtu.be/_fdMPIYEvFM

The basic steps are to copy the webhook URL, configure your form or backend to send the correct data payload, and add your Meta Pixel ID and Access Token to the final HTTP Request node.

👉 For a detailed, step-by-step guide, please refer to the yellow sticky note inside the workflow.

## 📊 Basic Information

- **Workflow ID:** 11089
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 400
- **Downloads:** 40
- **Created:** 2025/11/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11089)

## 👤 Author

- **Name:** JJ Tham
- **Username:** @jj-tham

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** (×2)
- **crypto** (×4)
- **httpRequest** 
- **webhook** 
- **respondToWebhook** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
