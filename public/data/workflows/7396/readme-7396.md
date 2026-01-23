# Generate AI-powered weekly email newsletters from WordPress with Gemini

> ## WordPress Weekly Newsletter Generator


**Overview:**
This automation automatically converts your latest WordPress posts into beautifully formatted email newsletters using AI, then sends them to your subscriber list every Friday.

**What it does:**
- Fetches your latest WordPress posts from the past week every Friday at 10 AM
- Filters posts to ensure there's content to include
- AI creates an engaging newsletter with compelling subject line and HTML content
- Parses the AI response to extract subject and content
- Sends formatted HTML email newsletter to your subscriber list

**Setup Required:**
1. **WordPress Connection**
   - Configure WordPress credentials in the "Fetch Recent Posts" node
   - Enter your WordPress site URL, username, and password/app password

2. **Email SMTP Setup**
   - Set up SMTP credentials (Gmail, SendGrid, Mailgun, etc.) in the "Send Newsletter" node
   - Replace `newsletter@yoursite.com` with your actual sender email
   - Replace subscriber emails in "To Email" field with your actual subscriber list
   - Configure reply-to address for professional appearance

3. **AI Configuration**
   - Set up Google Gemini API credentials
   - Connect the Gemini model to the "AI Newsletter Creator" node

4. **Customization Options**
   - Newsletter Schedule: Modify schedule trigger (default: Friday 10 AM)
   - Post Count: Adjust number of posts to include (default: 5 from past week)
   - Content Style: Modify AI system message for different newsletter tones
   - Email Design: Customize HTML template and styling in AI prompt

5. **Testing**
   - Run workflow manually to test all connections
   - Send test newsletter to yourself first
   - Verify HTML formatting appears correctly in email clients

**Features:**
- Automatic weekly scheduling
- AI-generated compelling subject lines
- HTML email formatting with proper structure
- Post filtering to avoid empty newsletters
- Professional email headers and reply-to setup
- Batch processing of multiple recent posts

**Customization:**
- Change newsletter frequency (daily, bi-weekly, monthly)
- Adjust AI prompts for different writing styles
- Modify email template design
- Add custom intro/outro messages
- Include featured images from posts

**Need Help?**
For [n8n coaching or one-on-one consultation](mailto:david@daexai.com)

## 📊 Basic Information

- **Workflow ID:** 7396
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 574
- **Downloads:** 57
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7396)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **wordpress** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **emailSend** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
