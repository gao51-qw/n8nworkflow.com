# Flux AI image generator

> Easily generate images with Black Forest's Flux Text-to-Image AI models using Hugging Face’s Inference API. This template serves a webform where you can enter prompts and select predefined visual styles that are customizable with no-code. The workflow integrates seamlessly with Hugging Face's free tier, and it’s easy to modify for any Text-to-Image model that supports API access.

## Try it 
Curious what this template does? Try a public version here: https://devrel.app.n8n.cloud/form/flux

## Set Up
Watch this quick set up video 👇
[![Flux Generator](https://uploads.n8n.io/devrel/fluxgenerator.png)](https://youtu.be/Rv_1jt5WvtY)


## Accounts required
- [Huggingface.co](https://huggingface.co) account (free)
- [Cloudflare.com](https://cloudflare.com) account (free - used for storage; but can be swapped easily e.g. GDrive)

## Key Features:
- **Text-to-Image Creation**: Generates unique visuals based on your prompt and style.
- **Hugging Face Integration**: Utilizes Hugging Face’s Inference API for reliable image generation.
- **Customizable Visual Styles**: Select from preset styles or easily add your own.
- **Adaptable**: Swap in any Hugging Face Text-to-Image model that supports API calls.


## Ideal for:
- **Creators**: Rapidly create visuals for projects.
- **Marketers**: Prototype campaign visuals.
- **Developers**: Test different AI image models effortlessly.


## How It Works:
You submit an image prompt via the webform and select a visual style, which appends style instructions to your prompt. The Hugging Face Inference API then generates and returns the image, which gets hosted on Cloudflare S3. The workflow can be easily adjusted to use other models and styles for complete flexibility.


## 📊 Basic Information

- **Workflow ID:** 2417
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 83304
- **Downloads:** 8330
- **Created:** 2024/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2417)

## 👤 Author

- **Name:** Max Tkacz
- **Username:** @max-n8n

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** (×6)
- **respondToWebhook** (×2)
- **stickyNote** (×7)
- **s3** 
- **formTrigger** 
- **httpRequest** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
