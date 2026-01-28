# Generate Text-to-Video & Image-to-Video Content with Seedance 1 Lite AI

Built with **n8n + Replicate**

This workflow takes a **prompt** (and optional seed), sends it to Bytedance’s **seedance-1-lite model**, waits for processing, and returns a generated video.

---

## ⚡ Section 1: Start & Authenticate

* **▶️ On clicking ‘execute’** → Manual trigger to start the workflow.
* **🔑 Set API Key** → Stores your Replicate API key so all requests are authorized.

**Benefit:** Keeps your API credentials secure and reusable.

---

## 🛠️ Section 2: Send Video Generation Request

* **📡 Create Prediction** → Makes a POST request to Replicate with:

  * `prompt`: your text description of the video
  * `seed`: (optional) controls randomness for reproducibility
  * Model version: `b6519549e375404f45af5ef2e4b01f651d4014f3b57d3270b430e0523bad9835`

**Benefit:** Kickstarts AI video generation from just a simple text prompt.

---

## 🔍 Section 3: Track the Prediction

* **📦 Extract Prediction ID** → Stores `predictionId`, `status`, and `predictionUrl` for polling.
* **⏳ Wait** → Pauses 2 seconds between checks.
* **🔁 Check Prediction Status** → Calls Replicate to see if the video is ready.
* **✅ Check If Complete** → Branches:

  * If status = `succeeded` → continue.
  * Else → loop back to **Wait** until it’s finished.

**Benefit:** Ensures the workflow patiently monitors progress without timing out.

---

## 📽️ Section 4: Process & Return Results

* **📦 Process Result** → Outputs a clean response containing:

  * `status`
  * `video_url` (generated video)
  * `metrics`
  * `created_at` & `completed_at`
  * `model: bytedance/seedance-1-lite`

**Benefit:** Gives you structured data and the direct video link, ready to share or store.

---

## 📊 Workflow Overview

| Section             | Purpose                     | Key Nodes                                     | Benefit                         |
| ------------------- | --------------------------- | --------------------------------------------- | ------------------------------- |
| ⚡ Start & Auth      | Initialize & secure API key | Manual Trigger, Set API Key                   | Keeps credentials safe          |
| 🛠️ Send Request    | Start video generation      | Create Prediction                             | Submits prompt to Replicate     |
| 🔍 Track Prediction | Poll status until done      | Extract Prediction ID, Wait, Check Status, If | Reliable async handling         |
| 📽️ Process Result  | Format output               | Process Result                                | Easy access to final video link |

---

## ✅ Final Benefits

* 🎬 Generate **AI-powered videos** directly from text prompts.
* 🔑 API key stored securely within workflow.
* 🔄 Handles asynchronous processing with automatic polling.
* 📤 Provides clean, ready-to-use JSON output including video URL.
* 🧩 Flexible — you can connect results to Slack, Google Drive, or YouTube for instant publishing.

---
