# Client feedback collector & analyzer (Form → AI summary → Email + Social draft)

> ## What this workflow does

This n8n workflow collects client feedback through a form (Tally, Typeform, or Google Forms) and uses AI to analyze it.  
It automatically generates a summary of the positive points, highlights areas for improvement, and drafts a short social media post based on the feedback.

Ideal for:
- Freelancers
- Customer support teams
- Online service providers
- Coaches and educators

---

## Setup steps

1. Connect your form tool to the Webhook node (`POST` method) and make sure it sends a `feedback` field.
2. Add your DeepSeek (or other GPT-compatible) API key to the AI request node.
3. Configure the email node with your SMTP credentials and desired recipient address.
4. Replace the Telegram node with Slack, Buffer, or another integration if you prefer.
5. *(Optional)* Customize the prompt in the function node for different tone/language.

🕐 **Estimated setup time**: ~15 minutes  
💬 **Sticky notes are included and clearly positioned** to guide you.

---

## Technologies used

- n8n Webhook node
- n8n Function node
- DeepSeek Chat or compatible AI API
- Email node (SMTP)
- Telegram node (or other integration)
- Sticky Notes for setup guidance

---

## Use cases

- Analyze feedback from onboarding or satisfaction surveys
- Create ready-to-publish social media content from real customer praise
- Help support or marketing teams act on feedback immediately

---



## 📊 Basic Information

- **Workflow ID:** 3910
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1411
- **Downloads:** 141
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3910)

## 👤 Author

- **Name:** Rodrigue Gbadou
- **Username:** @gbadou

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **function** (×2)
- **httpRequest** 
- **emailSend** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
