# Create a weekly responsive Plex Media newsletter via email (Tautulli alternative)

> 📬 Plex Recently Added → Responsive Email Newsletter (Tautulli Alternative)

What it is

This workflow automatically creates a weekly Plex newsletter that highlights recently added Movies & TV Shows. It’s designed to be mobile-friendly and Gmail/iOS Mail compatible, making it easy to share Plex updates with friends, family, or your community.

How it works
	•	⏰ Runs on a weekly schedule (customizable).
	•	🎬 Fetches recently added Movies & TV Shows from Tautulli API.
	•	📰 Builds a responsive HTML newsletter that works in Gmail, iOS Mail, and most clients.
	•	📧 Sends one personalized email per recipient via SMTP.
	•	🗒️ Every node has a Sticky Note explaining setup and purpose.

How to set up
	1.	Replace the placeholders in the nodes with your own details:
	•	YOUR_TAUTULLI_URL
	•	YOUR_API_KEY
	•	YOUR_PLEX_TOKEN
	•	YOUR_PLEX_SERVER_ID
	2.	Update the recipient list in Prepare Emails for Recipients.
	3.	Add your SMTP credentials in Send Newsletter Emails.
	4.	(Optional) Customize the HTML/CSS in Generate HTML Newsletter.

Requirements
	•	Plex Media Server with Tautulli installed.
	•	SMTP account (Gmail, custom domain, etc.).

Customization
	•	Change the schedule to daily/weekly as needed.
	•	Edit the HTML template for your own branding.
	•	Extend with additional nodes (Discord, Slack, etc.).

⸻

⚡ Workflow Overview:

``⏰ Schedule Trigger → 🎬 Fetch Movies → 📺 Fetch TV → 🔗 Merge → 📰 Build HTML → 📧 Prepare Recipients → 📤 Send → ✅ Finish
``


## 📊 Basic Information

- **Workflow ID:** 7556
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 596
- **Downloads:** 59
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7556)

## 👤 Author

- **Name:** WhySoSerious
- **Username:** @whysoserious

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **scheduleTrigger** 
- **httpRequest** (×2)
- **merge** 
- **code** (×3)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
