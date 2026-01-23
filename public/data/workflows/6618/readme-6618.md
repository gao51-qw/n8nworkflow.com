# Voice-to-text AI assistant with Voicenotes, Claude Sonnet & email delivery

> This workflow provides a mechanism for using AI transcribed voice notes using [Voicenotes AI](Voicenotes AI) and then running them into an AI agent as prompts. 

On the "collection" end of the workflow, we gather the output (with the recorded prompt) and do two things:

1) It is saved into NocoDB as a new row on a database table recording AI outputs and prompts.
2) The prompt gets sent to an AI agent and the output gets returned to the user's email

## Who Is It For?

If you like using voice AI tools to write detailed prompts for AI, then this workflow helps to remove the points of friction in getting from A to B!

## How Does It Work?

Simply tag your voice note in Voicenotes with your preferred tag (I'm using 'prompt'). Then, provide the N8N webhook as the URL for a webhook that will trigger whenever a new note is created with this tag (and this tag only). Now, whenever you wish to use a voice note as a prompt, just add the 'tag.'

This will trigger the webhook which, in turn, will trigger this workflow - sending the prompt to an AI agent of your choosing (configure within the workflow) and then saving the output into a database and returning it by email.

Note: The AI agent system prompt is written to define a structured output to provide Gmail-safe HTML. This is thin injected into a template. You can use a Google Group to gather together the output runs or just receive them at your main address (if you don't use Gmail, just swap out for any other email node or your preferred delivery channel).

## How To Set It Up

You'll need a Voicenotes account in order to use the service!

Once you have one, you'll next want to create the tag and the webhook. 

In N8N, create your webhook node and then provide that to Voicenotes:

![1.png](fileId:1890)

Create a note. Then assign it a new tag: "Prompts" (or as you prefer).

![2.png](fileId:1891)

The webhook is matched to the tag. 

 ![3.png](fileId:1889)

## Requirements

- Voicenotes AI account



## Customisation

The delivery mechanism can be customized to your preferences. If you're not a Google user, substitute the template and sending mechanism for your preferred delivery provider 

You could for example collect the outputs to a Slack channel or Telegram bot. 

You may omit the collector in NocoDB or substitute it for another wiki or knowledge management platform such as Notion or Nuclino.



## 📊 Basic Information

- **Workflow ID:** 6618
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 617
- **Downloads:** 61
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6618)

## 👤 Author

- **Name:** Daniel Rosehill
- **Username:** @danielrosehill

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **set** (×3)
- **nocoDb** (×2)
- **markdown** 
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
