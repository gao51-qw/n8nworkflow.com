# Auto-generate Facebook posts from video insights using Dumpling AI + GPT-4o

> ### What this workflow does

This workflow automatically turns new technical video uploads into short,  
engaging Facebook post drafts—complete with a suggested image—and saves the  
results to Google Sheets for quick review or publishing.

It’s designed to help you repurpose tutorial or demo videos into ready-to-use  
social content without any manual writing or design effort.

### What problem is this workflow solving?

Manually writing Facebook posts for every new tutorial or product video takes  
time, especially when you want them to be engaging and consistent. This workflow  
solves that by using AI to watch for new videos, extract meaningful insights,  
and write posts and create visuals automatically—saving hours of work.

### Who is this for?

This workflow is ideal for:
- Content creators uploading tutorial videos  
- Marketing teams working with how-to or product videos  
- Agencies and automation pros building scalable social workflows for clients

### How it works

1. **Trigger**: Starts when a new video is uploaded to a specific Google Drive folder.  
2. **Download & Convert**: Downloads the video and converts it to base64.  
3. **Extract Insights**: Dumpling AI analyzes the video and extracts structured insights  
   such as topic, tools mentioned, and key steps.  
4. **Generate Post**: GPT-4o creates a short, friendly Facebook post using those insights,  
   along with an image prompt.  
5. **Create Visual**: Dumpling AI generates an image using the prompt.  
6. **Save to Sheet**: The Facebook post and image URL are saved to a Google Sheet.

### Setup

1. Create a Google Sheet to store the posts and images.  
2. Connect your **Google Drive**, **Google Sheets**, **Dumpling AI**, and **OpenAI**  
   credentials in n8n.  
3. Update the workflow with:  
   - Your Google Drive folder ID  
   - Your target Google Sheet ID  
4. (Optional) Edit the prompt used in the GPT node if you want a different tone,  
   style, or structure for the post.

### How to customize the workflow

- **Change the platform**: Replace “Facebook” in the prompt with LinkedIn, Instagram,  
  or another platform.  
- **Use a different image tool**: You can swap Dumpling AI for any other image  
  generation API (e.g. DALL·E, Midjourney via webhook).  
- **Add auto-publishing**: Add a Facebook or social media module to publish the  
  generated post directly instead of just saving to Google Sheets.  
- **Tag videos by content type**: Use AI to classify videos into categories and  
  store them in separate tabs or sheets.



## 📊 Basic Information

- **Workflow ID:** 5168
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 420
- **Downloads:** 42
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5168)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** 
- **extractFromFile** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
