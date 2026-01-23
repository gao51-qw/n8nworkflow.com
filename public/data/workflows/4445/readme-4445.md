# Generate AI stock images with Flux1-schnell, metadata tagging & Google integration

> 📣 This template generates up to **2,000 AI-based stock images per day** for under **$3**. It includes **prompt generation**, **image creation**, **metadata enrichment**, upload to **Google Drive**, and **error logging** — fully automated with minimal setup.

---

## 📌 **Who is this for?**

This workflow is designed for:

* **Stock image creators** and contributors
* **Agencies** managing visual content at scale
* **Solo creators** or marketers automating asset production
* Anyone aiming to populate image libraries (e.g., **Adobe Stock**, **Shutterstock**)

---

## ❓ **What problem is this workflow solving?**

Manually generating, naming, tagging, and uploading thousands of stock images is **time-consuming and expensive**. This automation solves that by:

* Generating **photorealistic images** via AI
* Auto-tagging with **rich metadata**
* Uploading them to structured **Google Drive folders**
* Logging progress and **capturing errors automatically**

---

## ⚙️ **What this workflow does**

* ✅ Generates **text prompts** from idea topics using **GPT**
* 🎨 Converts prompts into **4 images** each via the **Flux Schnell** model
* 📐 Resizes and compresses images for preview and final use
* 🧠 Uses **GPT-4o-mini** to generate metadata: **filename, title, category**, and **25 keywords**
* ☁️ Uploads to **Google Drive**, logs metadata to **Google Sheets**
* 🟢 Marks each prompt as completed
* 📲 Sends **Telegram alerts** for success and errors

---

## 🛠 **Setup**

1. **Google Sheets**

   * Sheet 1: `Ideas` — *New prompt topics*
   * Sheet 2: `Generated Pmts` — *Tracks generated prompts and status*
   * Sheet 3: `Error Logs` — *Execution error records*

2. **Google Drive**

   * A folder for **image uploads**
   * A folder for **copied daily spreadsheets**

3. **API Access**

   * **OpenAI GPT** (gpt-4o-mini)
   * **PIAPI** (Flux Schnell image model)

4. **Telegram Bot** *(optional but recommended)*

   * Real-time **status notifications**

---

## 🧩 **How to customize this workflow to your needs**

* 🔁 **Change frequency** of generation via trigger settings
* 🧠 **Swap models** if using a different image API
* 🧾 **Adjust metadata fields** or format rules
* 📤 **Redirect outputs** to Airtable, Notion, Dropbox, etc.

---

## 🧠 **Node Naming & Notes**

* ✅ All nodes are **clearly renamed** to reflect their purpose (e.g., `Generate Image`, `Upload to Drive`)
* 🗒️ **Sticky notes** are used to document setup and logic
* 🔗 External links to **Notion setup docs** or **Loom videos** are recommended

---

## 🗂️ **Categories**

* **AI**
* **Marketing**
* **Product**
* **Building Blocks**

---

## 🎁 **Bonus Feature**

This template includes a **bonus stock image renamer workflow** — ideal for renaming:

* 📸 Taken photos
* 🗃️ Existing stock libraries
* 🖼️ Downloaded image batches

It applies **SEO-friendly, consistent naming** compatible with major platforms like **Adobe Stock** and **Shutterstock**.

## 📊 Basic Information

- **Workflow ID:** 4445
- **Complexity:** advanced
- **Node Count:** 48
- **Views:** 657
- **Downloads:** 65
- **Created:** 2025/5/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4445)

## 👤 Author

- **Name:** victor Adriano
- **Username:** @bwire

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** (×2)
- **code** (×8)
- **googleSheets** (×6)
- **stickyNote** (×2)
- **set** (×2)
- **httpRequest** (×3)
- **googleDrive** (×5)
- **if** (×3)
- **editImage** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **splitOut** (×2)
- **telegram** (×2)
- **merge** (×3)
- **wait** (×2)
- **function** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 48 nodes with 44 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
