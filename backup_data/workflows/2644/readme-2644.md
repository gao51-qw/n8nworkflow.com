# Flux dev image generation (Fal.ai) to Google Drive

> This workflow automates AI-based image generation using the Fal.ai Flux API. Define custom prompts, image parameters, and effortlessly generate, monitor, and save the output directly to Google Drive. Streamline your creative automation with ease and precision.

**Who is this for?**

This template is for content creators, developers, automation experts, and creative professionals looking to integrate AI-based image generation into their workflows. It’s ideal for generating custom visuals with the Fal.ai Flux API and automating storage in Google Drive.

**What problem is this workflow solving?**

Manually generating AI-based images, checking their status, and saving results can be tedious. This workflow automates the entire process — from requesting image generation, monitoring its progress, downloading the result, and saving it directly to a Google Drive folder.

**What this workflow does**
	1.	Sets Custom Image Parameters: Allows you to define the prompt, resolution, guidance scale, and steps for AI image generation.
	2.	Sends a Request to Fal.ai: Initiates the image generation process using the Fal.ai Flux API.
	3.	Monitors Image Status: Checks for completion and waits if needed.
	4.	Downloads the Generated Image: Fetches the completed image once ready.
	5.	Saves to Google Drive: Automatically uploads the generated image to a specified Google Drive folder.

**Setup**
	***1.	Prerequisites:***
	•	Fal.ai API Key: Obtain it from the Fal.ai platform and set it as the Authorization header in HTTP Header Auth credentials.
	•	Google Drive OAuth Credentials: Connect your Google Drive account in n8n.
	***2.	Configuration:***
	•	Update the “Edit Fields” node with your desired image parameters:
	•	Prompt: Describe the image (e.g., “Thai young woman net idol 25 yrs old, walking on the street”).
	•	Width/Height: Define image resolution (default: 1024x768).
	•	Steps: Number of inference steps (e.g., 30).
	•	Guidance Scale: Controls image adherence to the prompt (e.g., 3.5).
	•	Set your Google Drive folder ID in the “Google Drive” node to save the image.
	***3.	Run the Workflow:***
	•	Trigger the workflow manually to generate the image.
	•	The workflow waits, checks status, and saves the final output seamlessly.

**Customization**
	•	Modify Image Parameters: Adjust the prompt, resolution, steps, and guidance scale in the “Edit Fields” node.
	•	Change Storage Location: Update the Google Drive node with a different folder ID.
	•	Add Notifications: Integrate an email or messaging node to alert you when the image is ready.
	•	Additional Outputs: Expand the workflow to send the generated image to Slack, Dropbox, or other platforms.

This workflow streamlines AI-based image generation and storage, offering flexibility and customization for creative automation.

## 📊 Basic Information

- **Workflow ID:** 2644
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 9514
- **Downloads:** 951
- **Created:** 2024/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2644)

## 👤 Author

- **Name:** Sira Ekabut
- **Username:** @siraekabut

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **googleDrive** 
- **manualTrigger** 
- **stickyNote** (×3)
- **wait** 
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
