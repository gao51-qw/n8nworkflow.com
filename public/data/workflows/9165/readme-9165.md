# Create dynamic API Gateway with HTTP Router and workflow orchestration

> ## Overview  
This workflow provides a **universal webhook endpoint** that dynamically routes incoming requests to different subflows. It allows you to manage multiple API-like endpoints from a single entry point, while ensuring proper error handling and consistent responses.

## How it works  
1. **Webhook Receiver** – A single URL accepts requests.  
2. **Method Detection** – Branches capture the request method.  
3. **Route Resolver** – Matches the `action` parameter and method against your route configuration.
4. **Execute Subflow** – If valid, the matching workflow is executed.  
5. **Error Handling** – If invalid, the workflow responds with a clear status code and JSON error.

### About the `action` parameter  
The `action` query parameter is the **key** that controls routing:  

- In your **Routes Config**, every route is defined with an `action` name, a list of allowed HTTP methods, and the target subflow ID.  
- When a request comes in, the workflow looks up the provided `action` in this config.  
- If the action is valid and the method is allowed, the corresponding subflow is executed.  
- If not, the workflow returns a structured error.

In other words:  
- **Config side** → map `action` → subflow ID  
- **Request side** → send `?action=...` → determines which subflow runs  

This makes `action` both the **mapping key** in the configuration and the **control key** for triggering the correct logic.  




## Setup steps  
1. Import the workflow into n8n.  
2. Define your routes in the **Routes Config** node. Each route contains:  
   - `action` name  
   - allowed HTTP methods  
   - target subflow ID   

---  

This workflow is useful if you want to:  
- Expose **multiple clean API endpoints** without creating many Webhook nodes  
- Ensure consistent error handling across all endpoints  
- Keep your n8n setup more structured and maintainable  

---  

👉 A practical solution to turn n8n into a **flexible and maintainable API gateway**.  


## 📊 Basic Information

- **Workflow ID:** 9165
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 313
- **Downloads:** 31
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9165)

## 👤 Author

- **Name:** Sven Rösser
- **Username:** @sven

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **set** (×8)
- **executeWorkflow** 
- **respondToWebhook** (×5)
- **if** (×3)
- **webhook** 
- **stickyNote** (×5)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
