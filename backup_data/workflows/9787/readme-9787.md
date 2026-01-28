# Collect star rating feedback with self-contained HTML forms and data tables

> ## Customer Feedback Survey

This n8n template lets you collect lightweight customer feedback through a responsive HTML form with a mandatory 1–5 star rating and an optional message. Submissions are stored in an n8n Data Table (including any query-string context like `userId` or `source`) and the user is redirected to a branded “Thank you” page.

### How it works
* **Form page** (`/feedback`): Renders a styled HTML form (stars + message) with configurable text, colors, and button labels.  
* **POST handler** (`/feedback`): Receives form data, saves `rating`, `message`, and serialized query params to a Data Table.  
* **Confirmation page**: Returns a clean success screen after a valid submission.  
* **No external services**: Runs fully on n8n nodes (Webhook, HTML, Data Table, Set, Respond to Webhook).

### Use cases
* Capture quick CSAT/NPS-style ratings after support chats or trials.  
* Embed lightweight feedback on landing pages or in-product prompts.  
* Attribute feedback to campaigns by passing URL parameters (e.g., `?plan=pro&source=email`).

### Setup
1. Import the template and **publish** the two webhooks (`GET /feedback` for the form, `POST /feedback` for submissions).  
2. Open **Form Configuration** and adjust title, copy, button labels and make sure the POST URL is set correctly.  
3. (Optional) Edit **Theme Configuration** to match your brand (colors, radius, shadow, max width).  
4. Verify the **Data Table** mapping or point it to your own table.  
5. Visit the form URL, submit test feedback, and confirm rows appear in the Data Table.

### Requirements
* Works entirely within n8n — **no external credentials needed**.

### Privacy notes
* Only the fields you submit are stored.  
* If you include URL query parameters, they are saved as JSON for attribution or debugging.

### Screenshots

![Screenshot 20251016 164423.png](fileId:2987)![Screenshot 20251016 164442.png](fileId:2985)![Screenshot 20251016 164503.png](fileId:2986)

## 📊 Basic Information

- **Workflow ID:** 9787
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 238
- **Downloads:** 23
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9787)

## 👤 Author

- **Name:** Alexander Schnabl
- **Username:** @alexschnabl

## 🏷️ Categories

- Support Chatbot

## 🔗 Nodes Used

- **html** (×2)
- **set** (×4)
- **webhook** (×2)
- **respondToWebhook** (×2)
- **dataTable** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
