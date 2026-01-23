# Extract and structure X Post Comments with Airtop Browser Automation

> # Extracting Comments from an X Post

## Use Case
Engaging with conversations on X (formerly Twitter) is critical for brands and individuals monitoring sentiment, leads, or emerging trends. Manually collecting comments is time-consuming—this automation enables scalable extraction of comment data to inform your outreach or analysis.

## What This Automation Does
This automation extracts comments from a specified X post, with the following input parameters:

- **`airtop_profile`**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to X.
- **`x_post_url`**: The URL of the X post to extract comments from.
- **`max_number_of_comments`**: The maximum number of comments to retrieve.

## How It Works
1. Takes input via a form or another workflow.
2. Normalizes the input values.
3. Creates a new browser session using Airtop.
4. Navigates to the provided X post.
5. Uses a prompt to extract up to the specified number of comments, returning:
   - Author name
   - Author profile URL
   - Comment text

## Setup Requirements
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) connected to X (requires one-time login).

## Next Steps
- **Pair with X Monitoring**: Use this with the [X monitoring automation](https://www.airtop.ai/blog/automating-x-monitoring-with-airtop-and-make) to detect relevant posts and extract discussion context automatically.
- **Feed into Analytics**: Combine with summarization or sentiment analysis tools to understand audience response at scale.
- **Export for CRM/BI**: Pipe the structured comment data into your CRM or business intelligence stack for lead tracking or reporting.

Read more about [Extracting Comments from X Posts](https://www.airtop.ai/automations/extract-x-post-comments-n8n)


## 📊 Basic Information

- **Workflow ID:** 4208
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 434
- **Downloads:** 43
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4208)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **set** (×2)
- **airtop** 
- **formTrigger** 
- **executeWorkflowTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
