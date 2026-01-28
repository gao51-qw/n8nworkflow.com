# AI fashion virtual try-on with image & video generation for Telegram, Discord & YouTube

> ## 🧥 Virtual Try-On Image & Video Generation (VLM Run)

### 📌 Overview

This n8n workflow enables a **Virtual Try-On experience** where users upload a dress image and the system:

* Combines it with a fashion model image
* Generates a **realistic try-on image**
* Generates a **fashion walking video**
* Produces **secure pre-signed download URLs**
* Automatically shares results via:

  * **Telegram**
  * **Discord**
  * **YouTube**

---

## 🚀 Use Cases

* Virtual fashion try-on
* AI fashion marketing
* Clothing e-commerce previews
* Social media fashion automation
* Influencer & brand demo pipelines


---

## ✨ Key Features

* 🖼️ Image-based virtual try-on (model wearing the dress)
* 🎥 AI-generated fashion video
* 🔗 Multi-platform publishing (Telegram, Discord, YouTube)
* 🧩 Modular, extensible workflow design

---

## 🧠 Workflow Architecture


### 🟨 Input

* **Dress Image** – Uploaded by user (Form Trigger)
* **Model Image** – Downloaded from predefined URL
* **Prompt** – Auto-constructed inside workflow


### 🟦 Output

* 🖼️ Try-On Image (pre-signed download link)
* 🎥 Fashion Walk Video (pre-signed download link)
* 📤 Shared to:

  * Telegram (image/video)
  * Discord (image embed)
  * YouTube (video upload)

---

## 🔐 Required Credentials

You must configure the following credentials in n8n:

| Service  | Credential Type    |
| -------- | ------------------ |
| VLM Run  | `VLM Run API`      |
| Telegram | `Telegram Bot API` |
| Discord  | `Discord OAuth2`   |
| YouTube  | `YouTube OAuth2`   |

---

## ⚠️ Community Node Warning

&gt; **Important:** This workflow uses a **Community Node**
&gt; `@vlm-run/n8n-nodes-vlmrun`

### What this means:

* This node is **NOT installed by default** in n8n
* You must manually install it before using the workflow

### 📦 Installation

Run the following command in your n8n environment:

```bash
npm install @vlm-run/n8n-nodes-vlmrun
```

Then restart n8n.

📖 Community Nodes Documentation:
[https://docs.n8n.io/integrations/community-nodes/](https://docs.n8n.io/integrations/community-nodes/)

---

## 📊 Basic Information

- **Workflow ID:** 12115
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 368
- **Downloads:** 36
- **Created:** 2025/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12115)

## 👤 Author

- **Name:** AttenSys AI
- **Username:** @attensys

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **telegram** 
- **stickyNote** (×8)
- **httpRequest** (×3)
- **set** (×2)
- **discord** 
- **wait** 
- **@vlm-run/n8n-nodes-vlmrun.vlmRun** (×4)
- **merge** 
- **aggregate** 
- **code** (×2)
- **youTube** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
