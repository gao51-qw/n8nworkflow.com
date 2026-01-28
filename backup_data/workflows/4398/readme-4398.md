# 📸 Automate photo background removal with Photoroom API and Google Drive

> *Tags: Marketing, Image Processing, Automation*

### Context

Hey! I’m [Samir](https://samirsaci.com) , a Data Scientist from Paris and the founder of [LogiGreen Consulting](https://logi-green.com).

We use **AI, automation, and data** to support sustainable business practices for small, medium and large companies.

I implemented this workflow to support an event agency to automate **image processing like background removal** using Photoroom API.

[![Workflow](https://www.samirsaci.com/content/images/2025/05/image-1.png)](https://www.youtube.com/watch?v=gBn9wd0fJ54)


&gt; Automate your photos processing with n8n!

This n8n workflow collects all images in a **Google Drive** folder shared with multiple photographers.

For each image, it calls the **Photoroom API**:
- A processed image w/o a background is saved in a subfolder **Remove Background**
- The original pictures are saved in the subfolder **Original**

This workflow, triggered every morning, will **process the backlog of images**.

[![Before and After](https://www.samirsaci.com/content/images/size/w1600/2025/05/image-2.png)](https://www.youtube.com/watch?v=gBn9wd0fJ54)


📬 For business inquiries, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is useful for:
- **Digital Marketing** teams that use images for content creation
- **Photographs** or **Event Organisers** that collect large amounts of photos that need processing
  

### What does it do?

This n8n workflow:
1. ⏰ Triggers automatically every morning  
2. 🖼️ Collects the names and IDs of all images in the folder
3. 🧹 HTTP POST request to Photoroom API to remove the background
4. 📄 Stores the processed image and the original image in two separate sub-folders  

[![Workflow Screenshot](https://www.samirsaci.com/content/images/2025/05/image-3.png)](https://www.youtube.com/watch?v=gBn9wd0fJ54)



### What do I need to get started?

You’ll need:
- A **Google Drive Account** connected to your n8n instance with credentials
- A **Photoroom API** key that you can get for free (trial) here: [Photoroom API](https://docs.photoroom.com/)

### Follow the Guide!

Follow the **sticky notes** inside the workflow or check out my step-by-step tutorial on how to configure and deploy it.

[![Tutorial](https://www.samirsaci.com/content/images/2025/05/image-4.png)](https://www.youtube.com/watch?v=gBn9wd0fJ54)

🎥 [Watch My Tutorial](https://www.youtube.com/watch?v=gBn9wd0fJ54)



*This workflow was built using n8n version 1.93.0*  
*Submitted: May 26, 2025*


## 📊 Basic Information

- **Workflow ID:** 4398
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1075
- **Downloads:** 107
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4398)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **splitInBatches** (×2)
- **googleDrive** (×4)
- **stickyNote** (×4)
- **httpRequest** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
