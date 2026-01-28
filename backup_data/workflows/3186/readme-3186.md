# Process Ko-fi donations, subscriptions & shop orders with webhook verification

> ### Who is this for?
This workflow is tailored for content creators, artists, and developers who use Ko-fi to receive financial support through donations, subscriptions, or product sales.

###  Use case
This workflow automates the process of receiving and categorizing payment notifications from Ko-fi, ensuring that creators can focus on their work rather than administrative tasks. 

### What this workflow does
- **Webhook Reception**: The workflow listens for incoming payment notifications from Ko-fi via a configured webhook.
- **Token Verification**: It validates incoming requests to ensure they originate from Ko-fi using a verification token for enhanced security.
- **Type Differentiation**: It categorizes payments into types—donations, subscriptions, and shop orders—allowing for tailored handling for each payment type.
- **Custom Response Options**: Depending on the payment type received, the workflow activates specific actions or processes, enabling seamless integration with other applications or services.

### Setup
1. **Webhook Configuration**:
   - Access the `Webhook` node within the workflow and take note of your unique webhook URL. 
   - Visit your Ko-fi webhooks management page at [Ko-fi Webhooks Management](https://ko-fi.com/manage/webhooks) and input this URL.

2. **Verification Token Setup**:
   - In your Ko-fi account, locate the verification token in the advanced settings.
   - Input this token in the `Prepare` node of your n8n workflow.

3. **Enable the Workflow**:
   - Activate the workflow in n8n to start listening for incoming webhook notifications.

4. **Testing**:
   - Use the test feature in the Ko-fi webhooks settings to send a test webhook to ensure everything is functioning as expected.

### How to customize this workflow to your needs
- **Add Actions for Each Payment Type**: You can modify the `Donation`, `Subscription`, and `Shop Order` nodes to include actions such as sending emails, logging payments within a database, or triggering notifications.
  
- **Enhance Security Measures**: You can further refine the `Check token` node to include additional checks or to log all incoming webhook requests for monitoring.

- **Integration with Other Services**: Consider linking this workflow with messaging platforms (e.g., Slack, Discord) or CRM tools to keep your supporters informed or to manage relationships more effectively.

- **Custom Fields**: If needed, adjust the fields captured in the `Subscription` and `Shop Order` nodes to include more data or different parameters based on your specific use case.

## 📊 Basic Information

- **Workflow ID:** 3186
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 695
- **Downloads:** 69
- **Created:** 2025/3/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3186)

## 👤 Author

- **Name:** Audun
- **Username:** @xqus

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **webhook** 
- **stopAndError** 
- **set** (×4)
- **if** (×2)
- **switch** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
