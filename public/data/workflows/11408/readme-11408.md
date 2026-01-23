# Lead scoring & auto-assignment with GPT-4 and GoHighLevel + Slack alerts

> This workflow automatically scores and categorizes new GoHighLevel contacts using AI (GPT-4), then tags and assigns them to the appropriate team member based on their score. Hot leads also trigger a Slack notification for immediate follow-up.

### What does it do?
- Triggers when a new contact is added in GoHighLevel.
- Fetches full contact details and recent engagement data.
- Uses AI (GPT-4) to analyze and score the lead (1-100), categorize it (Hot, Warm, Cold), and provide an explanation.
- Tags the contact in GoHighLevel based on the score.
- Assigns the lead to the correct sales or nurturing team member.
- Sends a Slack alert for Hot leads to ensure fast response.

### Use case
Use this workflow to automate lead qualification and assignment in sales teams using GoHighLevel. It helps prioritize high-quality leads, ensures fast follow-up, and reduces manual work.

### How to configure
1. **GoHighLevel API:**  
   - Set your GoHighLevel API URL and API key in the `Workflow Configuration` node.
   - Update user IDs for assignment as needed.

2. **Slack Integration:**  
   - Add your Slack webhook URL or credentials in the `Slack Notify Hot Lead` node.

3. **AI Provider:**  
   - Configure your OpenAI (or compatible) credentials in the `AI Lead Scoring (GPT-4)` node.

4. **Adjust thresholds:**  
   - If needed, change the score thresholds in the IF nodes to match your business logic.

5. **Activate the workflow:**  
   - Once configured, activate the workflow to start processing new leads automatically.

---

**Tip:**  
You can further customize the workflow to fit your sales process, add more notifications, or integrate with other tools as needed.

## 📊 Basic Information

- **Workflow ID:** 11408
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 101
- **Downloads:** 10
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11408)

## 👤 Author

- **Name:** Țugui Dragoș
- **Username:** @tuguidragos

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **httpRequest** (×8)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **if** (×2)
- **slack** 
- **respondToWebhook** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
