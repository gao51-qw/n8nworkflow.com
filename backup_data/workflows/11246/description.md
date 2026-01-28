This workflow automates **image processing using VLM Run**, extracting signed URLs, downloading results, and distributing them via multiple channels (Google Drive & Telegram).

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


