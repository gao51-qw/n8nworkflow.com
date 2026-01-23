# Create and post social media image captions with GPT-4.1-mini and Google Sheets

> # Social Media Posting Automation with Image and Caption

## How it works
This AI-powered workflow streamlines your social media posting process, transforming hours of manual caption writing, image uploading, and scheduling into a fully automated system. You define the topic and image once, and the workflow handles caption generation, review, approval, and posting to your selected platforms.

### Automated Flow

1. **Generate Caption**  
   Trigger the workflow manually and set your post topic and image URL in the Set node. The AI (GPT-4.1-mini) generates a high-quality, engaging social media caption tailored to your audience, platform, and content goals.

2. **Store in Google Sheet**  
   The generated caption, along with your image URL and post metadata, is automatically appended to your Google Sheet. This creates a central location to review and manage all your social media content.

3. **Review and Approve**  
   You review the generated caption in the sheet, make any edits if needed, and update the status to **Approved**. You can also select the platform(s) where you want to post.

4. **Automatic Posting**  
   Once the status is updated to Approved, the next workflow is triggered automatically. It posts your caption and image to the selected social media platform(s) without any further manual effort.

**The result?**  
A seamless, end-to-end social media posting process where captions are AI-generated, stored, reviewed, and posted automatically. Focus on strategy and engagement instead of repetitive manual posting.

---

## Setup Steps
**Setup time:** ~10–15 minutes  
**What you’ll need:** OpenAI API key, Google account, access to your social media platform(s)

1. **Connect Your Google Account**
   - Click on the Google Sheets node in your workflow.  
   - Select the Credential dropdown and choose **+ Create New Credential**.  
   - Authenticate your Google account and grant the necessary permissions.

2. **Initialize Your Spreadsheet**
   - Run the workflow once by clicking the play button on the start node.  
   - This will automatically create a Google Sheet with all the required columns for caption tracking and approval.

3. **Add Your OpenAI API Key**
   - Navigate to the AI Agent node.  
   - Click the Credential dropdown and select **+ Create New Credential**.  
   - Paste your OpenAI API key and save.  
   - Get your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys).

4. **Set Post Topic and Image**
   - Update the title in the Set node with the topic you want to post.  
   - Add the image URL associated with your post.

5. **Review Captions and Approve**
   - Open your Google Sheet, review the generated captions, and update the status to **Approved**.  
   - Select the platform(s) where the post should go live.

6. **Go Live**
   - Once the status is updated, the workflow will automatically post your content to the selected social media platform(s).  
   - Sit back and watch your AI-generated captions and images go live automatically.

**Ready to automate your social media?** Activate your workflow and start posting smarter today! 🚀💡✅


## 📊 Basic Information

- **Workflow ID:** 12596
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 0
- **Downloads:** 0
- **Created:** 2026/1/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12596)

## 👤 Author

- **Name:** Samyotech
- **Username:** @samyotech

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **splitInBatches** 
- **googleSheets** (×3)
- **twitter** 
- **facebookGraphApi** (×3)
- **httpRequest** (×4)
- **linkedIn** 
- **switch** 
- **wait** 
- **manualTrigger** 
- **set** 
- **stickyNote** (×6)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
