# Speed Up Social Media Banners With BannerBear.com

> This n8n workflow shows an easy way to automate the creation of social media assets using AI and a service like BannerBear.

Designed for the busy marketer, leveraging AI image generation capabilities can help cut down production times and allow reinvesting into higher quality content.

## How it works
* This workflow generates social media banners for online events. Using a form trigger, a user can define the banner text and suggest an image to be generated.
* This request is passed to OpenAI's Dalle-3 image generation service to produce a relevant graphic for the event banner.
* This generated image is uploaded and sent to BannerBear where a template will use it and the rest of the form data to produce the banner.
* BannerBear returns the final banner which can now be used in an assortment of posts and publications.

## Requirements
* A BannerBear.com account and template is required
* An OpenAI account to use the Dalle-3 service.

## Customising the workflow

We've only shown a small section of what BannerBear has to offer. With experimentation and other asset generating services such as AI audio and video, you should be able to generate more than just static banners! 

## 📊 Basic Information

- **Workflow ID:** 2322
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 5367
- **Downloads:** 536
- **Created:** 2024/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2322)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×2)
- **bannerbear** 
- **set** 
- **stickyNote** (×9)
- **discord** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
