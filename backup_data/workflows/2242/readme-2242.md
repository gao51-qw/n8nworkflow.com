# Post New YouTube Videos to X

> # Automated YouTube Video Promotion Workflow

Automate the promotion of new YouTube videos on X (formerly Twitter) with minimal effort. This workflow is perfect for content creators, marketers, and social media managers who want to keep their audience updated with fresh content consistently.

## How it works

This workflow triggers every 30 minutes to check for new YouTube videos from a specified channel. If a new video is found, it utilizes OpenAI's ChatGPT to craft an engaging, promotional message for X. Finally, the workflow posts the generated message to Twitter, ensuring your latest content is shared with your audience promptly.

## Set up steps

1. Schedule the workflow to run at your desired frequency.
2. Connect to your YouTube account and set up the node to fetch new videos based on your Channel ID.
3. Integrate with OpenAI to generate promotional messages using GPT-3.5 turbo.
4. Link to your X account and set up the node to post the generated content.

Please note, you'll need API keys and credentials for YouTube, OpenAI, and X. Check out [this quick video tutorial](https://mrc.fm/ai2x) to make the setup process a breeze.

## Additional Tips

- Customize the workflow to match your branding and messaging tone.
- Test each step to ensure your workflow runs smoothly before going live.


## 📊 Basic Information

- **Workflow ID:** 2242
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 10069
- **Downloads:** 1006
- **Created:** 2024/4/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2242)

## 👤 Author

- **Name:** Mike Russell
- **Username:** @mikerussell

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **twitter** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **youTube** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
