# Securely call private Google Cloud Run APIs with JWT authentication (simplified)

> ## Who it’s for? 
Anyone who wants a dead-simple, free-tier friendly way to run custom API logic on **Google Cloud Run** and call it securely from n8n—no public exposure, no local hosting.

## What it does 
Minimal flow: **Set** → **JWT (sign)** → **HTTP (token exchange)** → **HTTP (call Cloud Run with `Authorization: Bearer &lt;id_token&gt;` )**. No caching, no extras—just enough to authenticate and hit your endpoint.

## How to set up 
General instructions below—see my detailed guide for more info: 

**[Build a Secure Google Cloud Run API, Then Call It from n8n (Free Tier)](https://medium.com/@marcocodes/build-a-secure-google-cloud-run-api-then-call-it-from-n8n-88c03291a95f)**

Setup:
1. Create a Cloud Run service and enable **Require authentication (Cloud IAM)**.  
2. Create a Google **Service Account** with **Cloud Run Invoker** on that service.  
3. In n8n, set `service_url`, `client_email`, `token_uri` (`https://oauth2.googleapis.com/token`) in **Set**.  
4. Create a **JWT (PEM)** credential from your service account key (paste the full BEGIN/END block).  
5. Run the workflow; the second HTTP node calls your Cloud Run URL with the ID token.

## Requirements
- Cloud Run service URL (auth required)  
- Google Service Account with **Cloud Run Invoker**  
- Private key JSON fields downloaded from Service Account | needed to generate JWT credentials

## More details
Full write-up (minimal + modular versions):  

**[Build a Secure Google Cloud Run API, Then Call It from n8n (Free Tier)](https://medium.com/@marcocodes/build-a-secure-google-cloud-run-api-then-call-it-from-n8n-88c03291a95f)** 


## 📊 Basic Information

- **Workflow ID:** 7571
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 146
- **Downloads:** 14
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7571)

## 👤 Author

- **Name:** Marco Cassar
- **Username:** @marcocassar

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **jwt** 
- **set** 
- **httpRequest** (×2)
- **stickyNote** (×5)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
