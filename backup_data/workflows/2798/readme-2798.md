# Create threads on Bluesky

> Create engaging, structured threads on Bluesky with **precise control over post timing and visibility**.

This workflow helps content creators and social media managers schedule and publish threaded posts that maintain **proper connections and formatting**, ensuring your content appears exactly as intended.

## How it works
* Creates an **initial visible post** that starts your thread
* Adds a series of **hidden reply posts** that form the body of your thread
* Maintains proper **parent-child relationships** between posts to ensure correct threading
* Enforces **timing delays** between posts to prevent rate limiting
* Concludes with **two visible posts** at the end of your thread

The result is a clean, professional-looking thread where **only the first and last two posts are immediately visible** to your followers, encouraging engagement while maintaining a clean profile view.

## Set up steps (10-30 minutes)
1. Create a Bluesky account
2. Enter your **Bluesky handle** and **app password** in the "Set Bluesky Credentials" node
3. Customize the post text in the Code nodes to match your content:
   - Initial visible post
   - Hidden reply posts
   - Final visible posts
4. Adjust the scheduling in the "Run Daily at 9 AM" node to match your preferred posting time

## Suggested enhancements
* Add error handling with retry logic for API failures
* Add input validation for post length and credential format
* Include error notifications via email or Slack
* Add data persistence to track successful posts and resume failed threads
* Make timing delays configurable with exponential backoff
* Add monitoring for rate limits and API quotas

---

### For Social Media Managers who want:
* Control over post visibility and timing
* Automated posting of long-form content
* Professional-looking content presentation

## 📊 Basic Information

- **Workflow ID:** 2798
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1675
- **Downloads:** 167
- **Created:** 2025/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2798)

## 👤 Author

- **Name:** Gareth B. Davies
- **Username:** @garethbdavies

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** (×5)
- **scheduleTrigger** 
- **set** 
- **stickyNote** (×6)
- **code** (×5)
- **splitInBatches** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
