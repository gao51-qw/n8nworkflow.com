# Secure GitHub webhooks with HMAC256 signature validation

> ### Use cases 
* Ensure that the calls to the workflow's webhook are (a) originating from the correct GitHub repository and (b) haven't been tampered with.

### How it works
* When a secret is provided in a GitHub webhook configuration, a `x-hub-signature-256` header is added to the webhook.
* `Compute HMAC256` computes the HMAC256 signature similarly to how it was computed by GitHub.
* `Validate HMAC256` tests for the equality of the computed value and the value provided by the header.
  * If the values are equal then 200 is returned to GitHub and the workflow continues
  * If the values are NOT equal then 401 is returned and the workflow ends. 
  * __Note:__ The `Stop and Error` step is optional and can be removed. Removing it means that the workflow completes successfully while still returning 401 to GitHub. This means that you will not be able to easily track malicious or incorrect calls to your webhook from n8n. 

### How to use
* Add the steps (1) and (2) of the workflow to your current workflow receiving webhook calls from GitHub.
* Update the `Secret` field in the `Compute HMAC256` node with the same value as the secret stored in the `Secret` field in the GitHub webhook definition. 

### Requirements
* GitHub account and repository. 
* GitHub webhook setup with a `Secret` key. Key can be of any length and should be generated with a key or password generator. 

### Who’s it for
Developers or DevOps engineers who want to ensure secure webhook communication between GitHub and n8n.

### How to customize the workflow
* This is a building block for your own workflow. If you use this workflow as a base, replace step (3) with your own business logic. 
* You can modify the Stop and Error node to log unauthorized requests or trigger alerts. 


### ⚠️ Warning
The secret is stored in plain text in the workflow. You should take this into consideration if the workflow is committed to source control or shared in any other way.

### Need Help?
Reach out on [LinkedIn](https://www.linkedin.com/in/ytkaczyk/) or  Ask in the [Forum](https://community.n8n.io/)!

## 📊 Basic Information

- **Workflow ID:** 8906
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 100
- **Downloads:** 10
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8906)

## 👤 Author

- **Name:** Yves Tkaczyk
- **Username:** @ytkaczyk

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **respondToWebhook** (×2)
- **webhook** 
- **crypto** 
- **if** 
- **stickyNote** (×4)
- **github** 
- **stopAndError** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
