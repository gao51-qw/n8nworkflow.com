# Automate GitLab merge requests using APIs with n8n

> # **Who is this template for?**

This template is designed for developers, DevOps engineers, and automation enthusiasts who want to streamline their GitLab merge request process using n8n, a low-code workflow automation tool. It eliminates manual intervention by automating the merging of GitLab branches through API calls.

# **How it works ?**

- Trigger the workflow: The workflow can be triggered by a webhook, a scheduled event, or a GitLab event (e.g., a new merge request is created or approved).

- Fetch Merge Request Details: n8n makes an API call to GitLab to retrieve merge request details.

- Check Merge Conditions: The workflow validates whether the merge request meets predefined conditions (e.g., approvals met, CI/CD pipelines passed).

- Perform the Merge: If all conditions are met, n8n sends a request to the GitLab API to merge the branch automatically.

# **Setup Steps**

**1. Prerequisites**

An n8n instance (Self-hosted or Cloud)

A GitLab personal access token with API access

A GitLab repository with merge requests enabled

**2. Create the n8n Workflow**

Set up a trigger: Choose a trigger node (Webhook, Cron, or GitLab Trigger).

Fetch merge request details: Add an HTTP Request node to call GET /merge_requests/:id from GitLab API.

Validate conditions:

Check if the merge request has necessary approvals.

Ensure CI/CD pipelines have passed.

Merge the request:

Use an HTTP Request node to call PUT /merge_requests/:id/merge API.

**3. Test the Workflow**

Create a test merge request.

Check if the workflow triggers and merges automatically.

Debug using n8n logs if needed.

**4. Deploy and Monitor**

Deploy the workflow in production.

Use n8n’s monitoring features to track execution.

This template enables seamless GitLab merge automation, improving efficiency and reducing manual work!

#### Note: 
Never hard code API token or secret in your https request.

## 📊 Basic Information

- **Workflow ID:** 2858
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 5015
- **Downloads:** 501
- **Created:** 2025/2/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2858)

## 👤 Author

- **Name:** Aditya Gaur
- **Username:** @autom8r

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **httpRequest** (×5)
- **if** 
- **splitInBatches** 
- **wait** 
- **set** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
