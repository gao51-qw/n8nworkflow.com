# Generate 3D models from images using Hunyuan3D v2 and Google Sheets

> 
*This workflow automates the conversion of 2D images into high-quality 3D models (`.glb` format) by integrating **Google Sheets** with the **Hunyuan3D v2** model on **Fal.ai**. It handles the entire pipeline—from fetching image URLs to polling for completion and saving the final asset—eliminating manual modeling time for artists and developers.*

![WhatsApp Image 20260104 at 8.28.26 PM.jpeg](fileId:3881)
### How it works
This template operates on a schedule to process images in batches or individually:
1.  **Data Retrieval:** The workflow fetches new rows from a Google Sheet where the `RESULT_GLB` column is empty.
2.  **AI Generation:** It sends the `IMAGE_URL` to the **Hunyuan3D v2** API on Fal.ai to initiate the 3D generation process.
3.  **Status Polling:** The workflow automatically enters a loop, checking the job status every 30 seconds until the model is marked "COMPLETED."
4.  **Result Update:** Once finished, it retrieves the download link for the `.glb` file and writes it back to the specific row in your Google Sheet.

### Use Cases
* **Game Development:** Rapidly create prototype props and assets from concept art.
* **E-commerce:** Convert product photos into 3D models for web viewers.
* **AR/VR:** Generate background assets for immersive environments from simple 2D inputs.

### Setup steps
1.  **Google Sheet:**
    * Create a new sheet with two header columns: `IMAGE_URL` and `RESULT_GLB`.
    * Add the images you want to convert in the first column.
2.  **Fal.ai Credentials:**
    * Sign up at [Fal.ai](https://fal.ai) and generate an API Key.
    * In n8n, create a **Header Auth** credential with the name `Authorization` and value `Key YOUR_API_KEY`.
3.  **Configure Nodes:**
    * Update the **Get new image** and **Update Result** nodes to select your specific Google Sheet.
    * Ensure the **HTTP Request** nodes are using your Fal.ai Header Auth credential.

## 📊 Basic Information

- **Workflow ID:** 12452
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 244
- **Downloads:** 24
- **Created:** 2026/1/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12452)

## 👤 Author

- **Name:** zahir khan
- **Username:** @mr-khan

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **set** 
- **httpRequest** (×3)
- **wait** 
- **if** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
