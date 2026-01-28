# Generate Images with Realistic Inpainting using Simbrams Ri AI

This n8n workflow integrates with **Replicate’s `simbrams/ri` model** to generate images. It takes an input image and mask, applies transformations based on your parameters, and returns the final generated output automatically.

---

## 📌 Section 1: Trigger & Authentication

### ⚡ On Clicking ‘Execute’ (Manual Trigger)

* **Purpose**: Starts the workflow manually.
* **Benefit**: Useful for testing and running on demand.

### 🔑 Set API Key (Set Node)

* **Purpose**: Stores your **Replicate API key** inside the workflow.
* **Benefit**: Keeps credentials secure and ensures other nodes can reuse them.

---

## 📌 Section 2: Sending the Image Generation Request

### 🖼️ Create Prediction (HTTP Request Node)

* **Purpose**: Sends a POST request to Replicate’s API to start generating an image.
* **Input Parameters**:

  * **image**: Input image URL
  * **mask**: Mask image URL
  * **seed**: Randomness control (for reproducibility)
  * **steps**: Number of refinement steps
  * **strength**: Intensity of modification (0–1)
  * **blur\_mask**: Whether to blur the mask edges
  * **merge\_m\_s**: Whether to merge mask with source
* **Benefit**: Gives full control over how the model modifies your image.

### 🆔 Extract Prediction ID (Code Node)

* **Purpose**: Extracts the **Prediction ID**, **status**, and **URL** from Replicate’s response.
* **Benefit**: Required to check the status of the generation later.

---

## 📌 Section 3: Polling & Waiting

### ⏳ Wait (Wait Node)

* **Purpose**: Pauses the workflow for 2 seconds before rechecking.
* **Benefit**: Prevents hitting Replicate’s API too quickly.

### 🔄 Check Prediction Status (HTTP Request Node)

* **Purpose**: Checks whether the prediction is complete using the stored Prediction ID.
* **Benefit**: Automates monitoring of job progress.

### ✅ Check If Complete (If Node)

* **Purpose**: Decides if the prediction has finished.
* **Paths**:

  * **True** → Sends result to processing.
  * **False** → Loops back to Wait and keeps checking.
* **Benefit**: Ensures the workflow only ends when a valid image is ready.

---

## 📌 Section 4: Processing the Result

### 📦 Process Result (Code Node)

* **Purpose**: Cleans up the completed API response and extracts:

  * Status
  * Output (final generated image)
  * Metrics
  * Created & completed timestamps
  * Model name (`simbrams/ri`)
  * Final **image URL**
* **Benefit**: Delivers a structured and ready-to-use result for display, storage, or further automation.

---

## 📊 Workflow Overview Table

| Section           | Node Name               | Purpose                              |
| ----------------- | ----------------------- | ------------------------------------ |
| 1. Trigger & Auth | On Clicking ‘Execute’   | Starts the workflow manually         |
|                   | Set API Key             | Stores API credentials               |
| 2. AI Request     | Create Prediction       | Sends image generation request       |
|                   | Extract Prediction ID   | Extracts ID + status for tracking    |
| 3. Polling        | Wait                    | Adds delay between checks            |
|                   | Check Prediction Status | Monitors job progress                |
|                   | Check If Complete       | Routes based on job completion       |
| 4. Result         | Process Result          | Extracts and cleans the final output |

---

## 🎯 Key Benefits

* 🔐 **Secure authentication** with API key management.
* 🖼️ **Custom image generation** with parameters like mask, strength, and steps.
* 🔄 **Automatic polling** ensures results are fetched only when ready.
* 📦 **Clean structured output** with final image URL for easy use.

---