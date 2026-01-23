# Generate animated human videos from images & audio with Bytedance Omni Human

> # Generate Animated Human Videos from Images & Audio with Bytedance Omni Human

Built with **n8n + Replicate**

This workflow takes an **image** + **audio**, sends them to Bytedance’s **omni-human model**, waits for processing, and returns a generated video.

---

## ⚡ Section 1: Start & Authenticate

* **▶️ On clicking ‘execute’** → Manual trigger to start the workflow.
* **🔑 Set API Key** → Stores your Replicate API key so future requests are authorized.

**Benefit:** Secures your API credentials in one place for easy re-use.

---

## 🛠️ Section 2: Send Video Generation Request

* **📡 Create Prediction** → Makes a POST request to Replicate with:

  * `image`: input image URL
  * `audio`: input audio URL
  * Model version: `7ec44f5140c7338b3496cbf99ee8ea391a4bc18ff5d1677a146dfc936a91f65b`

**Benefit:** Combines visual and audio inputs to start AI-powered video generation.

---

## 🔍 Section 3: Track the Prediction

* **📦 Extract Prediction ID** → Saves `predictionId`, `status`, and `predictionUrl` for polling.
* **⏳ Wait** → Pauses 2 seconds between status checks (to avoid spamming the API).
* **🔁 Check Prediction Status** → Queries Replicate using the stored prediction URL.
* **✅ Check If Complete** → Branches:

  * If status = `succeeded` → move forward.
  * Else → loop back to **Wait** until completion.

**Benefit:** Ensures workflow patiently waits for the video instead of timing out.

---

## 📽️ Section 4: Process & Return Results

* **📦 Process Result** → Cleans the API response, returning:

  * `status`
  * `video_url` (generated video)
  * `metrics`
  * `created_at` & `completed_at`
  * `model: bytedance/omni-human`

**Benefit:** Gives you a neat, structured output with the generated video link ready to use.

---

## 📊 Workflow Overview

| Section             | Purpose                     | Key Nodes                                     | Benefit                          |
| ------------------- | --------------------------- | --------------------------------------------- | -------------------------------- |
| ⚡ Start & Auth      | Initialize & secure API key | Manual Trigger, Set API Key                   | Keeps credentials safe           |
| 🛠️ Send Request    | Start video generation      | Create Prediction                             | Submits image+audio to Replicate |
| 🔍 Track Prediction | Poll status until done      | Extract Prediction ID, Wait, Check Status, If | Reliable async handling          |
| 📽️ Process Result  | Format output               | Process Result                                | Easy access to final video link  |

---

## ✅ Final Benefits

* 🎬 Turns static **image + audio** into full **AI-generated video**.
* 🔑 API key stored securely in workflow.
* 🔄 Handles async generation with auto-polling.
* 📤 Outputs clean JSON with direct video link.
* 🧩 Modular — you can connect results to Slack, Gmail, or Google Drive for auto-sharing.

---

## 📊 Basic Information

- **Workflow ID:** 6876
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1079
- **Downloads:** 107
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6876)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **httpRequest** (×2)
- **code** (×2)
- **wait** 
- **if** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
