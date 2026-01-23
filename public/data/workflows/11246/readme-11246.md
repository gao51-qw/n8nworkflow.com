# Process images with VLM run: Auto segmentation & detection with Drive-Telegram sharing

> This workflow automates **image processing using VLM Run**, extracting signed URLs, downloading results, and distributing them via multiple channels (Google Drive & Telegram).

## ✅ Key Features

* Upload image files through a **Form Trigger**.
* Process images through two VLM Run agents simultaneously:

  * **Segmentation Agent** → extracts objects.
  * **Detection Agent** → generates bounding boxes.
* Webhooks capture completed results asynchronously.
* **Code Node** extracts the full signed URL for secure downloading.
* Downloaded images are automatically:

  * Uploaded to **Google Drive**
  * Sent to a **Telegram chat**

## ⚙️ Workflow Flow

1. **User Uploads File** → Form Trigger node
2. **VLM Run Agents** → Segmentation & Detection agents
3. **Webhook Nodes** → Receive processed results
4. **Code Node** → Extract signed URLs
5. **Download Node** → Retrieve processed images
6. **Distribution Nodes** → Upload to Google Drive & Telegram

## 📌 Notes

* Ensure **Google Drive OAuth2** credentials have upload permissions.
* Telegram Bot token and chat ID must be configured correctly.
* Regex in the Code Node is critical for capturing full signed URLs including query parameters.
* Workflow allows multi-channel sharing of images automatically.

---

## ⚠️ Community Node Disclaimer

&gt; **This workflow uses VLM Run node**




## 📊 Basic Information

- **Workflow ID:** 11246
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 19
- **Downloads:** 1
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11246)

## 👤 Author

- **Name:** Mehedi Ahamed
- **Username:** @mehedi

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **telegram** 
- **googleDrive** 
- **stickyNote** (×5)
- **code** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** (×2)
- **httpRequest** 
- **webhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
