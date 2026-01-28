# Generate multiple T-shirt design prompts from images with GPT-4o

> ## Disclaimer
This Workflow uses a community node.
![Screenshot 20250404 211608.png](fileId:1082)

# What It Does
[Workflow Demonstration](https://youtu.be/Xco28XW-Ewg)

This powerful workflow eliminates hours of trial and error when trying to craft the perfect prompt for AI-generated images. By simply saving an image of the design you want to model your generated images after into a designated folder on your desktop, the workflow is automatically triggered. Once the image is saved, n8n pulls it into the workflow, where an Analyze Image AI agent powered by GPT-4o analyzes it and generates a detailed text description. This description is then passed to another Prompt/Text Generator AI agent, which uses it as a template to create five entirely new and unique image prompts using the power of GPT-4o. These prompts produce images that share a similar art style with the original, while remaining creatively distinct. In addition, the AI will extract the original phrase and generate nine brand-new phrases that can be incorporated into the image. Finally, all this information is automatically saved into a folder on your computer, ready for you to use whenever you like.
# Who This Is For
This workflow is ideal for anyone looking to create high-quality AI-generated images with ease. It’s especially valuable for those running a print-on-demand business or working in logo and artwork design. By automating the process of crafting image prompts that match a desired style, it saves you hours of manual effort and guesswork. With this streamlined system, you can focus less on prompt engineering and more on what truly matters—growing your business.
# How It Works
Once you find an image or design that perfectly matches the style you're aiming for, the rest of the process is seamless. With the workflow running, simply save the image to the designated folder that triggers the automation. This action activates the workflow, and the image is automatically pulled into n8n using the Get Image From File node.
From there, the Analyze Image AI Agent, powered by GPT-4o, takes over. It examines the image in depth—assessing its overall theme, art style, text phrase, font, aesthetic, and complexity (whether it’s a simple design or a more detailed composition). Based on this analysis, it generates a detailed description of the image along with the original text phrase it contains.
Once the analysis is complete, a second AI agent, Prompt/Text Generator, receives this information and uses GPT-4o to create five unique image prompts. These prompts are designed to replicate the essence and style of the original image, while still producing completely original results when used with any AI image generator. In addition to the original phrase, the agent also generates nine brand-new text phrases.
By combining each of the five prompts with the ten total text phrases (original + nine new), the workflow gives you the potential to generate 50 unique image variations.
Finally, the Save to File node takes the entire output from the Prompt/Text Generator—including all five image prompts and ten text phrases—that was converted to text and automatically saves it into a designated folder on your computer for future use.
After a completed workflow has been saved to the designated folder you must change the name of the file prior to running the workflow again. The workflow will only save the same file name each time.
# Set Up Steps
1. You will need to create a folder on your computer where you would like to save your original image. You will then copy the pathway to this folder into the local file trigger node.
2. You will need to obtain an Open AI API key from platform.openai.com/api-keys
3. After you obtain this Open AI API key you will need to connect it to the Analyze Image AI Agent and the Open AI Chat Model connected to the Prompt/Text Generator AI Agent.
4. You will now need to fund your Open AI account. GPT 4o costs ~$0.01-$0.02 to run the workflow.
5. Finally create a folder on your computer you wish to have the summarizations saved to. Copy the pathway to this folder into the Save to File node.






## 📊 Basic Information

- **Workflow ID:** 3430
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 659
- **Downloads:** 65
- **Created:** 2025/4/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3430)

## 👤 Author

- **Name:** AiAgent
- **Username:** @lifehacks

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **localFileTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **readWriteFile** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **convertToFile** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
