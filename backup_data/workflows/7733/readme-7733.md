# Auto-generate & post LinkedIn carousels with Gemini AI and Post Nitro

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Try It Out!
### Automatically generate Linkedin Carousal and Upload to Linkedin

Use case : Linkedin Content Creation, specifically carousal. But could be adjusted for many other creations as well.

### How it works
* It will run automatically every 6:00 AM
* Get latest News from TechRadar
* Parse it into readable JSON
* AI will decide, which news resonates with your profile
* Then give the title and description of that news to generate the final linkedin carousal content.
* This step is also trigerred by Form trigger
* After carousal generation, it will give it to Post Nitro to create images on that content. 
* Post Nitro provides the PDF file.
* We Upload the PDf file to Linkedin and get the file ID, in next step, it will be used.
* Finally create the Post description and Post it to Linkedin

### How to use
* It will run every 6:00 AM automatically. Just make it Live
* Submit the form, with correct title and description ( i did not added tests for that so must give that correct 😅 )

### Requirements
* Install Post Nitro community Node
@postnitro/n8n-nodes-postnitro-ai

* We need the following API keys to make it work
1. Google Gemini ( for Gemini 2.5-Flash Usage )
Docs [Google Gemini Key](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/)
2. Post Nitro credentials ( API key + Template id +  Brand id )
Docs [Post Nitro](https://postnitro.ai/docs/embed/obtaining-an-api-key)
3. Linkedin API key
Docs [Linkedin API](https://docs.n8n.io/integrations/builtin/credentials/linkedin)


### Need Help?
Message on Linkedin the [Linkedin](https://www.linkedin.com/in/shayan-khan20/)

Happy Automation!

## 📊 Basic Information

- **Workflow ID:** 7733
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 713
- **Downloads:** 71
- **Created:** 2025/8/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7733)

## 👤 Author

- **Name:** Shayan Ali Bakhsh
- **Username:** @kshayan091

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **formTrigger** 
- **httpRequest** (×6)
- **code** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@postnitro/n8n-nodes-postnitro-ai.postNitro** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **stickyNote** (×16)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
