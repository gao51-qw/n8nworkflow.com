# CYBERPULSE AI redOps: phishing simulation with redirect tracking

> ## Description:
Simulate cloaked phishing links that redirect through a controlled proxy. This module tracks if secure email gateways (SEGs) or sandboxes trigger the redirect before users do. Logs access, response, and timestamps in Google Sheets.

## Who’s It For:
Red Teams simulating real-world phishing redirects

Security teams testing gateway/sandbox behavior

Awareness teams tracking click-throughs

## How It Works:
Loads target list from Google Sheets

Generates dynamic redirect links per target

Emails the links using Gmail or SMTP

Simulates access via webhook or internal call

Logs metadata and redirect access to Sheets

## Requirements:

## Google Sheet Requirements

- Sheet Name: `Redirect_Logs`
- Required Columns: name, team, email, module, status, payload, response, timestamp

Google Sheets credentials

Email service (Gmail, SMTP, or custom node)

Optional: Real endpoint for link redirection (e.g., Vercel Function, Cloudflare Worker)

## Setup Instructions

1. Clone or copy the provided Google Sheet template (linked below).
2. Set up the webhook trigger in the Redirect Proxy node.
3. Use URL shortener node (optional) to obfuscate redirect links.
4. Connect Google Sheets node and map fields: timestamp, IP, user-agent, original URL.
5. Configure redirection logic using IF and Set nodes.
6. Run a test redirect to validate Google Sheet logging.


## File Templates:
RedOps_RedirectCloak_Log_Template.xlsx

email	name	team	payload	response	status	module	timestamp
test@org.com	John Doe	IT	redirect.link/...	Redirect triggered	Simulated	RedirectCloak	2025-07-27T12:00:00Z

## Customization

- **Redirect Logic**: Modify the `HTTP Response` or `Set` node to redirect to real servers or simulation targets.
- **Tracking Format**: Adjust the structure of the logged data — include fields like user-agent, referrer, campaign ID, etc.
- **Redirection Endpoint**: Host the redirection logic on a public API gateway (e.g., AWS API Gateway, Vercel Edge Function) if deploying outside of n8n.
- **Obfuscation**: Integrate a URL shortener (like Bitly) or a custom domain to hide the true destination during simulations.

## Ethics Note:
This module is intended for internal simulations only and does not contain malicious payloads. Always use with authorization and red team awareness protocols.

🔗 Part of the CYBERPULSE AI RedOps Suite
🌐 https://cyberpulsesolutions.com
📧 info@cyberpulsesolutions.com

## 📊 Basic Information

- **Workflow ID:** 6509
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 73
- **Downloads:** 7
- **Created:** 2025/7/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6509)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **stickyNote** (×4)
- **manualTrigger** 
- **googleSheets** (×2)
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
