# Generate AI media with ComfyUI: Images, video, 3D & audio bridge

> Unlock low-cost, high-control generative media workflows directly from n8n by integrating with ComfyUI. Ideal for indie creators, AI developers, or small teams seeking scalable media automation—from images to video, 3D, and even audio—this workflow makes generative content production more flexible and programmable than ever.

## How it works

* Accept a media generation request via an n8n trigger (HTTP webhook, schedule, etc.)
* Parse input and inject it into a ComfyUI payload
* Send the payload to your local or remote ComfyUI instance
* Wait for and collect the output media files (e.g., images, videos, 3D models, or audio)
* Send the result to a destination like email, Telegram, S3, or upload it back to a CMS or client app

✨ The format and complexity of the media are entirely dependent on the ComfyUI workflow you use, meaning this n8n integration is as powerful and creative as your ComfyUI setups.

## Set up steps

1. Set up and run a local or remote ComfyUI instance with API access enabled
2. Load or create a ComfyUI workflow that suits your content goals (image gen, video stitching, etc.)
3. Open this n8n template and set your ComfyUI server URL, input template, and output handling preferences
4. Connect additional services for input (e.g., Airtable, HTTP) and output (e.g., Notion, Slack, S3) depending on your use case

## 📊 Basic Information

- **Workflow ID:** 4468
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 2953
- **Downloads:** 295
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4468)

## 👤 Author

- **Name:** Nielo
- **Username:** @anomali

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **set** (×8)
- **httpRequest** (×4)
- **if** (×2)
- **wait** (×3)
- **code** (×3)
- **stickyNote** (×17)
- **readWriteFile** (×3)
- **convertToFile** 
- **merge** 
- **aggregate** 
- **discord** 
- **manualTrigger** 
- **executeWorkflow** 
- **crypto** 
- **noOp** 
- **extractFromFile** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
