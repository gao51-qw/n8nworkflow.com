# Translate & repost Twitter threads in multiple languages with OpenAI

> # Twitter Thread (Flood) Translator & Poster

## What it does

- **Thread Extraction:** Automatically detects and extracts all tweets from a provided Twitter thread (flood) link.
- **Translation:** Translates each extracted tweet into your target language using OpenAI.
- **Rewriting:** Rewrites each translated tweet to maintain the original meaning while improving clarity or style.
- **Automated Posting:** Posts the rewritten tweets as a new thread on Twitter using twitterapi.io, preserving the original thread structure.

## How it works

- Accepts a Twitter thread (flood) link as input.
- Extracts all tweets from the thread in their original order.
- Each tweet is sent to OpenAI for translation into your desired language.
- The translated tweets are then rewritten for clarity and natural flow, while keeping the original meaning intact.
- The processed tweets are automatically posted as a new thread on your Twitter account via twitterapi.io.

## Setup Steps

1. **Create a Notion Database:**  
   Set up a database page in Notion to store and manage your Twitter links and workflow data.
2. **Configure Notion Integration:**  
   Add the created database page ID to the Notion nodes in your workflow.
3. **Set Twitter API Credentials:**  
   Add your twitterapi.io API key to the relevant nodes.
4. **Add Twitter Account Details:**  
   Enter your Twitter account username/email and password for authentication.
5. **Set Up OpenAI Credentials:**  
   Provide your OpenAI API credentials to enable translation and rewriting.
6. **Subworkflow Integration:**  
   Create a separate workflow for subworkflow logic and call it using the Execute Workflow node for modular automation.
7. **Set Desired Language & Thread Link:**  
   Change the target language and Twitter thread (flood) link directly in the Manual Trigger node to customize each run.

## Benefits

- **Ultra Low Cost:** **Total cost for a 15-tweet thread (flood) is just $0.016 USD** ($0.015 for twitterapi.io + $0.001 for OpenAI API). *(Actual cost may vary depending on the density of tweets in the thread.)*
- **End-to-End Automation:** Go from thread extraction to translation, rewriting, and reposting-all in one workflow.
- **Multilingual Support:** Effortlessly translate and republish Twitter threads in any supported language.



&gt; **Note:** Detailed configuration instructions and node explanations are included as sticky notes within the workflow canvas.

---

**Ideal for:**  
- Content creators looking to reach new audiences by translating and republishing Twitter threads  
- Social media managers automating multilingual content workflows  
- Anyone wanting to streamline the process of thread extraction, translation, and posting

---

## Notes

- This workflow is **not able to post images or videos to Twitter**-it handles text-only threads.


## 📊 Basic Information

- **Workflow ID:** 4233
- **Complexity:** advanced
- **Node Count:** 62
- **Views:** 5264
- **Downloads:** 526
- **Created:** 2025/5/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4233)

## 👤 Author

- **Name:** enes cingoz
- **Username:** @ecingoz

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **executeWorkflow** 
- **stickyNote** (×22)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×6)
- **wait** 
- **if** (×9)
- **set** (×2)
- **notion** (×2)
- **splitInBatches** 
- **noOp** (×3)
- **merge** (×2)
- **executeWorkflowTrigger** 
- **function** (×2)
- **filter** 
- **twitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 62 nodes with 37 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
