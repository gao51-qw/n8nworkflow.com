# Turn any Youtube video into VIRAL shorts

> ## For Who?

- Content Creators
- Youtube Automation
- Marketing Team

---

## How it works?

**1 -** Enter the video ID (in Edit Field Node) you want to use as a base to create Short Form videos 
**2 -** Use **yt-transcript-api (self-hosted on docker)** to retrieve the transcript of the video
**3 -** Format the transcript to be usable by an LLM
**4 -** LLM select clips based on specific rules (prompt customizable)
**5 -** Split out the selected Clips and perform a loop for each Clip
**6 -** Use **yt-clip-api (self-hosted on docker)** to edit the video in ready-to-use Short Form videos

---

## What you get?

**🧩 Copy-Paste Setup** – You’ll get a straightforward, easy-to-follow system with clear instructions, even with minimal technical skills.

**🎛️ Built-in Customization Guide** – The documentation includes a dedicated section to help you easily adjust the system to your own channel, video style, or workflow needs.

**💬 Full Personalized Support** – I’ll personally help you until the workflow is fully running on your side.

**++System Cost to run++: $0**

**++Time to Setup++: 20-40min (depending on your experience)**

---

## ⚠️ PRE-REQUISITES

Before purchasing, please make sure you meet the following requirements:

- The YouTube channel you want to clip includes face-cam + screen recording (like on my videos).
- You have basic knowledge of code (enough to follow simple setup instructions). You can also use AI to help you 😉

---

👨‍💻 **More Workflows :** [https://n8n.io/creators/nasser/](https://n8n.io/creators/nasser/)


## 📊 Basic Information

- **Workflow ID:** 6834
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 372
- **Downloads:** 37
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6834)

## 👤 Author

- **Name:** Nasser
- **Username:** @nasser

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **code** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **splitOut** 
- **httpRequest** (×2)
- **splitInBatches** 
- **noOp** 
- **manualTrigger** 
- **set** 
- **stickyNote** (×5)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
