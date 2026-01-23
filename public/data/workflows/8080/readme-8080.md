# Intelligent Gmail label management with AI & Discord notifications

> ## How it works
- This workflow will trigger upon new mail in your gmail inbox and will automatically apply existing labels OR identify, create, then apply up to 5 new labels.
- This is currently set up to run using a OpenAI endpoint which I have set up connected to my local llama.cpp server running.
- After your email is done labeling, the workflow will send you a nice notification in your discord channel!

## Set up Instructions
- This workflow requires a Gmail OAuth account credential with the ability to create labels and label messages
- [OPTIONAL] You can create a Discord Bot Account which connects with a Bot Token which will summarize the email and show you which labels were created and added in the workflow.
- You might want to tweak the prompts a bit based on how detailed you want your labels. I've found after running it for a bit that the labels that get created mostly encompass everything I want.

## Workflow Hints
- The workflow works in 5 phases
-- **Phase 1:** Find existing Gmail labels as options for the LLM to choose from. 
-- **Phase 2:** LLM chooses labels or defines new ones
-- **Phase 3:** Create additional Gmail labels if needed
-- **Phase 4:** Label the message with newly created and existing labels
-- **Phase 5:** Rewrite and send a message notification via Discord.

Screenshot 1:
![Screenshot 20250831 at 9.06.29 PM.png](fileId:2291)
_Note: colors are my own_

![Screenshot 20250831 at 9.09.01 PM.png](fileId:2292)
_Screenshot of notification sent via discord_

## Model Tips
- I set this up to run completely using offline models. I had good success with Llama.cpp server with gpt-oss-20B and with a bit more tweaking could get it to work with a smaller gemma3-4b model mostly likely as well.
- The whole workflow runs in about 5-10 seconds on my Blackwell Nvidia GPU. Probably would be a few seconds slower on an older piece of hardware.

## 📊 Basic Information

- **Workflow ID:** 8080
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 420
- **Downloads:** 42
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8080)

## 👤 Author

- **Name:** Albert Ho
- **Username:** @codeandcodes

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **gmail** (×3)
- **code** 
- **merge** (×4)
- **splitOut** 
- **discord** 
- **filter** 
- **aggregate** (×2)
- **set** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
