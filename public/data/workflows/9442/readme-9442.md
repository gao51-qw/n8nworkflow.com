# Enhance Google Drive images with Gemini 2.5 Flash AI

> 🚀 **Google Drive Image Enhancement with Gemini nano banana**
This workflow automates image enhancement by integrating **Google Drive** with **Google Gemini**. It fetches unprocessed images from a source folder, applies AI-driven transformations based on a customizable prompt (e.g., clean and realistic product backgrounds), and uploads the enhanced results into a destination folder—streamlining e-commerce catalog preparation or creative pipelines.

---

🔑 **Key Features**

* **Customizable Prompt Node** → Easily adjust the style/instructions for Gemini (e.g., backgrounds, lighting, focus).
* **Google Drive Integration** → Automatically fetches images from a source folder and uploads results to a target folder.
* **AI Processing via Gemini** → Converts original images to Base64, sends them with the prompt to Gemini, and returns enhanced versions.
* **Image Filtering** → Processes only files whose `mimeType` contains `"image"`.
* **Loop Handling** → Iterates over all images in the source folder until all are processed.

---

⚙️ **Setup Instructions**

1. **Configure Prompt**

   * Open the `promt` node.
   * Replace the text with your desired Gemini instructions (e.g., "Add a clean, realistic background for baby products").

2. **Set Google Drive Folders**

   * In `origin_folder` → set **Search Query** to the name of the source folder (with unprocessed images).
   * In `destination_folder` → set **Search Query** to the name of the target folder (to save results).

3. **Credentials**

   * Provide valid **Google Drive OAuth2** credentials for both Drive nodes.
   * Provide a **Google Gemini API** credential for the `banana-request` node.

4. **Run the Workflow**

   * Trigger from the `init` node.
   * Workflow will download → convert → send to Gemini → reconvert → upload results automatically.

---

🛠 **Customization Guidance**

* Modify the **prompt text** to change how Gemini processes the images (background, style, product focus).
* Swap `Search Query` for **folder IDs** in Drive nodes if you need more precise targeting.
* Extend the workflow by chaining post-processing (e.g., watermarking, resizing, or tagging metadata).

---

© 2025 Innovatex • Automation & AI Solutions • innovatexiot.carrd.co • LinkedIn

---


## 📊 Basic Information

- **Workflow ID:** 9442
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 54
- **Downloads:** 5
- **Created:** 2025/10/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9442)

## 👤 Author

- **Name:** Edisson Garcia
- **Username:** @eagarciah707

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **splitInBatches** 
- **extractFromFile** 
- **httpRequest** (×2)
- **set** (×3)
- **googleDrive** (×4)
- **convertToFile** 
- **filter** 
- **code** 
- **manualTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
