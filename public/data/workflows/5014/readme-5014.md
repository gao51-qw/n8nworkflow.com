# End of turn detection for smoother AI agent chats with Telegram and Gemini

> ### This n8n template demonstrates one approach to achieve a more natural and less frustration conversations with AI agents by reducing interrupts by predicting the end of user utterances.

When we text or chat casually, it's not uncommon to break our sentences over multiple messages or when it comes to voice, break our speech with the odd pause or umms and ahhs. If an agent replies to every message, it's likely to interrupt us before we finish our thoughts and it can get very annoying!

Previously, I demonstrated a [simple technique for buffering each incoming message by 5 seconds](https://n8n.io/workflows/2346-enhance-customer-chat-by-buffering-messages-with-twilio-and-redis/) but that approach still suffers in some scenarios when more time is needed. This technique has no arbitrary time limit and instead uses AI to figure out when its the agent's turn based on the user's message, allowing for the user to take all the time they need.

### How it works
* Telegram messages are received but no reply is generated for them by default. Instead they are sent to the prediction subworkflow to determine if a reply should be generated.
* The prediction subworkflow begins by checking Redis for the current user's prediction session state. If this is a new "utterance", it kicks off the "predict end of utterance" loop - the purpose of which is to buffer messages in a smart way!
* New users message can continue to be accepted by the workflow until enough is collected to allow our prediction classifier to determine the end of the utterance has been reached.
* The loop is then broken and the buffered chat messages are combined and sent to the AI agent to generate a response and sent to the user via the telegram node.
* The prediction session state is then deleted to signal the workflow is ready to start again with a new message.

### How to use
* This system sits between your preferred chat platform and the AI agent so all you need to do is replace the telegram nodes as required.
* Where LLM-only prediction isn't working well enough, consider more traditional code-based checking of heuristics to improve the detection.
* Ideally you'll want a fast but accurate LLM so your user isn't waiting longer than they have to - at time of writing Gemini-2.5-flash-lite was the fastest in testing but keep a look out for smaller and more powerful LLMs in the future.

### Requirements
* Gemini for LLM
* Redis for session management
* Telegram for chat platform


## 📊 Basic Information

- **Workflow ID:** 5014
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1229
- **Downloads:** 122
- **Created:** 2025/6/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5014)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.memoryRedisChat** 
- **set** (×2)
- **redis** (×5)
- **if** (×4)
- **noOp** 
- **wait** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **telegram** 
- **stickyNote** (×6)
- **httpRequest** 
- **executeWorkflow** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
