# Automated Zalo OA token management with OAuth and webhook integration

> # Description (How it works)
This workflow keeps your Zalo Official Account access token valid and easy to reuse across other flows—no external server required.

**High-level steps**
1. **Scheduled refresh** runs on an interval to renew the access token before it expires.  
2. **Static Data cache** (global) stores access/refresh tokens + expiries for reuse by any downstream node.  
3. **OAuth exchange** calls Zalo OAuth v4 with your `app_id` and `secret_key` to get a fresh access token.  
4. **Immediate output** returns the current access token to the next nodes after each refresh.  
5. **Operational webhooks** include:
   - A **reset** webhook to clear the cache when rotating credentials or testing.
   - A **token peek** webhook to read the currently cached token for other services.

# Setup steps (estimated time ~8–15 minutes)
1. **Collect Zalo credentials (2–3 min):** Obtain `app_id`, `secret_key`, and a valid `refresh_token`.  
2. **Import & activate workflow (1–2 min):** Import the JSON into n8n and activate it.  
3. **Wire inputs (2–3 min):** Point the “Set Refresh Token and App ID” node to your env vars (or paste values for a quick test).  
4. **Adjust schedule & secure webhooks (2–3 min):** Tune the run interval to your token TTL; protect the reset/peek endpoints (e.g., secret param or IP allowlist).  
5. **Test (1–2 min):** Execute once to populate Static Data; optionally try the token peek and reset webhooks to confirm behavior.


## 📊 Basic Information

- **Workflow ID:** 8675
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 515
- **Downloads:** 51
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8675)

## 👤 Author

- **Name:** Le Nguyen
- **Username:** @leeseifer

## 🏷️ Categories

- Engineering
- DevOps

## 🔗 Nodes Used

- **code** (×4)
- **httpRequest** 
- **scheduleTrigger** 
- **webhook** (×2)
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
