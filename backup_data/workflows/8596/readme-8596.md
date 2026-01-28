# Generate secure social media connection links for clients with Upload-Post

> ![Captura de pantalla 20250916 a las 17.31.18.png](fileId:2640)
This automated workflow template helps agencies and social media managers **securely onboard clients** by generating a branded **Connect Accounts** page where clients can link their social profiles **without sharing passwords**. The flow creates a user in Upload-Post and returns a **one-hour magic link** you can send to the client. Once connected, you can publish from the Upload-Post dashboard, via API, or from your own n8n automations using the created profile name.

***Note:*** This workflow uses the **Upload-Post.com** API to create the user and generate a time-limited JWT connect link. You can brand the connect page with your logo via the `logoImage` parameter (and optionally `brandName`, `redirectUrl`, or `allowedPlatforms`).

## Who Is This For?
- **Marketing & Creative Agencies:** Onboard new clients quickly and securely without requesting credentials.
- **Social Media Managers & Freelancers:** Standardize account connection across all clients in one simple step.
- **SaaS & No-Code Builders:** Offer a white-label “connect your socials” experience inside your tools and client portals.
- **In-House Marketing Teams:** Let internal stakeholders connect brand accounts without IT hand-offs.

## Why This Matters
Collecting passwords is risky, slow, and non-compliant. Onboarding often means back-and-forth emails, shared logins, and manual setup. This template:
- **Eliminates Password Sharing:** Clients connect through secure OAuth flows.
- **Reduces Friction:** A single, short-lived link guides clients to connect supported platforms.
- **Speeds Activation:** As soon as accounts are linked, you can publish from the dashboard, API, or n8n.
- **Builds Trust & Compliance:** Brandable, auditable, and privacy-first onboarding.

## How It Works
1. **Trigger:** Start the workflow in n8n.
2. **Create User:** The **Create user** node provisions a client user in **Upload-Post** (use a unique handle/slug).
3. **Generate Connect Link:** The **Generate JWT for platform integration** node returns a **one-hour connect URL** (plus metadata), brandable via `logoImage`.
4. **Share With Client:** Send the link via your preferred channel (Email/Telegram/Slack/CRM).
5. **Client Connects Accounts:** The client links their social profiles on the secure page—no passwords required.
6. **Start Publishing:** Post from **https://app.upload-post.com/dashboard**, the **Upload-Post API**, or your **n8n flows** referencing the created profile name.

## Setup
1. **Upload-Post Account & Credentials**  
   Create an account at **upload-post.com** and add your API credentials in n8n.
2. **Configure Nodes**  
   - **Create user:** Set `newUser` to a unique identifier (e.g., client email/slug).  
   - **Generate JWT:** Set `user` to the same identifier and (optionally) `logoImage` to a public logo URL. You can also pass `brandName`, `redirectUrl`, and `allowedPlatforms`.
3. **Branding (Optional)**  
   Use a square transparent PNG for best results on the connect page.
4. **Delivery (Optional)**  
   Add Email/Telegram/Slack nodes to automatically send the connect link to the client and log the action in your CRM.

## Requirements
- **Accounts:** n8n, Upload-Post.com  
- **API Keys/Creds:** Upload-Post API credentials  
- **Social Media:** Clients must have the social accounts they want to connect

## Features
- **Secure Client Onboarding:** One-click, **no-password** account linking via OAuth.
- **Time-Limited Access:** **One-hour** magic link for safer sharing and compliance.
- **Brandable Experience:** Show your own branding on the connect page with `logoImage` (plus `brandName`).
- **Ready to Publish:** Post immediately from the dashboard, API, or n8n using the profile name.
- **Scales With You:** Reuse the template for every client and integrate with your CRM and comms tools.
- **Multi-Platform Support:** Works with all social platforms supported by Upload-Post (e.g., TikTok, Instagram, YouTube, Facebook, X, Threads, LinkedIn, Pinterest).

Use this template to onboard clients in minutes and start publishing securely—without ever asking for a password.


## 📊 Basic Information

- **Workflow ID:** 8596
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 751
- **Downloads:** 75
- **Created:** 2025/9/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8596)

## 👤 Author

- **Name:** Juan Carlos Cavero Gracia
- **Username:** @carlosgracia

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** 
- **manualTrigger** 
- **n8n-nodes-upload-post.uploadPost** (×3)
- **telegram** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
