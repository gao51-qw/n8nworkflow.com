# Generate AI images with APImage and upload to Google Drive

> # AI Image Generator Workflow

This workflow lets you automatically generate AI images with the **[APImage API 🡥](https://apimage.org)**, download the generated image, and upload it to any serivce you want (e.g., Google Drive, Notion, Social Media, etc.). 

![AI Image Generate APImage.jpg](fileId:1860)
## 🧩 Nodes Overview

### 1. **Generate Image** (Trigger)
This node contains the following fields:
- **Image Prompt**: *(text input)*
- **Dimensions**: `Square`, `Landscape`, `Portrait`
- **AI Model**: `Basic`, `Premium`

This acts as the entry point to your workflow.  
It collects input and sends it to the APImage API node.

**_Note: You can swap this node with any other node that lets you define the parameters shown above._**

---

### 2. **APImage API** (HTTP Request)
This node sends a `POST` request to:

```
https://apimage.org/api/ai-image-generate
````

The request body is dynamically filled with values from the first node:

```json
{
  "prompt": "{{ $json['Describe the image you want'] }}",
  "dimensions": "{{ $json['Dimensions'] }}",
  "model": "{{ $json['AI Model'] }}"
}
````

✅ Make sure to set your **API Key** in the `Authorization` header like this:
`Bearer YOUR_API_KEY`

🔐 You can find your API Key in your [APImage Dashboard 🡥](https://apimage.org/dashboard)

---

### 3. **Download Image** (HTTP Request)

Once the image is generated, this node downloads the image file using the URL returned by the API:

```js
{{ $json.images[0] }}
```

The image is stored in the output field: `generated_image`

---

### 4. **Upload to Google Drive**

This node takes the image from the `generated_image` field and uploads it to your connected Google Drive.

📁 You can configure a different target folder or replace this node with:

* Dropbox
* WordPress
* Notion
* Shopify
* Any other destination

Make sure to pass the correct **filename and file field**, as defined in the "Download Image" node.

[Set up Google Drive credentials 🡥](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)

---

## ✨ How To Get Started

1. Double-click the **APImage API** node.
2. Replace `YOUR_API_KEY` with your actual key (keep `Bearer` prefix).
3. Open the **Generate Image** node and test the form.

🔗 [Open the Dashboard 🡥](https://apimage.org/dashboard)

---

## 🔧 How to Customize

* Replace the **Form Trigger** with another node if you're collecting data elsewhere (e.g., via Airtable, Notion, Webhook, Database, etc.)
* Modify the **Upload node** if you'd like to send the image to other tools like Slack, Notion, Email, or an S3 bucket.

---

## 📚 API Docs & Resources

* [APImage API Docs 🡥](https://apimage.org/docs)
* [n8n Documentation 🡥](https://docs.n8n.io)

---

## 🖇️ Node Connections

```text
Generate Image → APImage API → Download Image → Upload to Google Drive
```

---

✅ This template is ideal for:

* Content creators automating media generation
* SaaS integrations for AI tools
* Text-to-image pipelines

## 📊 Basic Information

- **Workflow ID:** 6398
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 751
- **Downloads:** 75
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6398)

## 👤 Author

- **Name:** Gegenfeld
- **Username:** @gegenfeld

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×2)
- **stickyNote** (×4)
- **formTrigger** 
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
