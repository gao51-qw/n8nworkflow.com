# Generate Custom Text Content with IBM Granite 3.3 8B Instruct AI

This workflow connects to **Replicate’s API** and uses the **ibm-granite/granite-3.3-8b-instruct** model to generate text.

---

## ✅ **🔵 SECTION 1: Trigger & Setup**

### ⚙️ **Nodes**

1️⃣ **On clicking 'execute'**

* **What it does:** Starts the workflow manually when you hit *Execute*.
* **Why it’s useful:** Perfect for testing text generation on-demand.

2️⃣ **Set API Key**

* **What it does:** Stores your **Replicate API key** securely.
* **Why it’s useful:** You don’t hardcode credentials into HTTP nodes — just set them once here.
* **Beginner tip:** Replace `YOUR_REPLICATE_API_KEY` with your actual API key.

---

### 💡 **Beginner Benefit**

✅ No coding needed to handle authentication.
✅ You can reuse the same setup for other Replicate models.

---

## ✅ **🤖 SECTION 2: Model Request & Polling**

### ⚙️ **Nodes**

3️⃣ **Create Prediction (HTTP Request)**

* **What it does:** Sends a **POST request** to Replicate’s API to start a text generation job.
* **Parameters include:** `temperature`, `max_tokens`, `top_k`, `top_p`.
* **Why it’s useful:** Controls how creative or focused the AI text output will be.

4️⃣ **Extract Prediction ID (Code)**

* **What it does:** Pulls the **prediction ID** and builds a URL for checking status.
* **Why it’s useful:** Replicate jobs run asynchronously, so you need the ID to track progress.

5️⃣ **Wait**

* **What it does:** Pauses for **2 seconds** before checking the prediction again.
* **Why it’s useful:** Prevents spamming the API with too many requests.

6️⃣ **Check Prediction Status (HTTP Request)**

* **What it does:** Polls the Replicate API for the **current status** (e.g., `starting`, `processing`, `succeeded`).
* **Why it’s useful:** Lets you loop until the AI finishes generating text.

7️⃣ **Check If Complete (IF Condition)**

* **What it does:** If the status is **succeeded**, it goes to “Process Result.” Otherwise, it loops back to **Wait** and retries.
* **Why it’s useful:** Creates an automated polling loop without writing complex code.

---

### 💡 **Beginner Benefit**

✅ No need to manually refresh or check job status.
✅ Workflow keeps retrying until text is ready.
✅ Smart looping built-in with *Wait + If Condition*.

---

## ✅ **🟢 SECTION 3: Process & Output**

### ⚙️ **Nodes**

8️⃣ **Process Result (Code)**

* **What it does:** Collects the final **AI output**, status, metrics, and timestamps.
* **Adds info like:**

  * ✅ `output` → Generated text
  * ✅ `model` → `ibm-granite/granite-3.3-8b-instruct`
  * ✅ `metrics` → Performance data
* **Why it’s useful:** Gives you a neat, structured JSON result that’s easy to send to Sheets, Notion, or any app.

---

### 💡 **Beginner Benefit**

✅ Ready-to-use text output.
✅ Easy integration with any database or CRM.
✅ Transparent metrics (when it started, when it finished, etc.).

---

## ✅✅✅ **✨ FULL FLOW OVERVIEW**

| Section                        | What happens                                                                 |
| ------------------------------ | ---------------------------------------------------------------------------- |
| ⚡ **Trigger & Setup**          | Start workflow + set Replicate API key.                                      |
| 🤖 **Model Request & Polling** | Send request → get Prediction ID → loop until job completes.                 |
| 🟢 **Process & Output**        | Extract clean AI-generated text + metadata for storage or further workflows. |

---

## 📌 **How You Benefit Overall**

✅ No coding needed — just configure your API key.
✅ Reliable polling — the workflow waits until results are ready.
✅ Flexible — you can extend output to Google Sheets, Slack, Notion, or email.
✅ Beginner-friendly — clean separation of input, process, and output.

---

✨ With this workflow, you’ve turned **Replicate’s IBM Granite LLM** into a no-code text generator — running entirely inside **n8n**! ✨

---