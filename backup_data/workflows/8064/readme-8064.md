# Generate branded article images with GPT-4o, FAL Flux and Google Drive

> ## 📄 What this workflow does
This workflow automatically turns a topic and a reference image URL into a finished, branded article image. It uses GPT-4o to generate a short, detailed image prompt, sends it to FAL Flux image-to-image for rendering, polls until the job is completed, downloads and resizes the image, overlays your company logo, and finally saves the branded result into a specified Google Drive folder.

## 👤 Who is this for
Content teams who need consistent, on-brand article images.
Marketing teams looking to scale blog and landing page visuals.
Designers who want to automate repetitive resizing and branding tasks.
Anyone who needs a pipeline from topic → AI illustration → Google Drive asset.


## ✅ Requirements
OpenAI (GPT-4o) API credentials (for image prompt generation).
FAL API key for Flux image-to-image generation.
Google Drive OAuth2 connection + target folder ID for saving images.
A company logo file/URL (direct download link from Google Drive or any public URL).


## ⚙️ How to set up
Connect OpenAI GPT-4o in the “Create prompt” node.
Add your FAL API key to all HTTP Request nodes (generate image, check image finish, Get image link).
Replace the logo link in “Get company’s logo” with your own logo URL.
Configure the Google Drive node with your OAuth2 credentials and set the correct Folder ID.
Update the image_url in “Link image” (or pass from upstream data).
Test the workflow end-to-end with a sample subject and image.


## 🔁 How it works
Form/Manual Trigger → Input subject + reference image URL.
GPT-4o → Generates a &lt;70-word sharp/detailed prompt (no text/logos).
FAL Flux (HTTP Request) → Submits job for image-to-image generation.
Polling Loop → Wait + check status until COMPLETED.
Download Image → Retrieves generated image link.
Resize Image → Standardize to 800×500 pixels.
Get & Resize Logo → Fetch company logo, resize for branding.
Composite → Overlay logo onto article image.
Save to Google Drive → Final branded image saved in target folder.


## 💡 About Margin AI
[Margin AI](https://marginai.co/) is your AI Service Companion. We help organizations design intelligent, human-centric automation — from content pipelines and branding workflows to customer insights and sales enablement. Our tailored AI solutions scale marketing, operations, and creative processes with ease.


## 📊 Basic Information

- **Workflow ID:** 8064
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 489
- **Downloads:** 48
- **Created:** 2025/8/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8064)

## 👤 Author

- **Name:** Cong Nguyen
- **Username:** @cong-nguyen

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **wait** 
- **merge** 
- **editImage** (×3)
- **code** 
- **if** 
- **manualTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** (×5)
- **googleDrive** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
