# Generate high-quality audio with Voxtral Small 24B 2507

> # Generate High-Quality Audio with Voxtral Small 24B 2507

This workflow integrates the **notdaniel/voxtral-small-24b-2507** model from Replicate to generate audio content from provided inputs. It handles API authentication, creates predictions, polls until completion, and outputs the final generated audio file.

---

## ⚡ Section 1: Trigger & Authentication

* **🔘 On clicking 'execute'** → Manually starts the workflow.
* **🔑 Set API Key** → Stores your Replicate API key to authenticate requests.

**Benefit:** Securely connects your workflow to Replicate’s API and ensures only authorized requests are made.

---

## 🎛️ Section 2: Create Prediction

* **🌐 Create Prediction** → Sends a request to Replicate’s API with parameters like:

  * **audio**: Input audio file (e.g., a reference sample).
  * **max\_new\_tokens**: Maximum number of tokens to generate (controls audio length/complexity).

**Benefit:** Starts the audio generation process with configurable input and settings.

---

## ⏳ Section 3: Polling & Status Tracking

* **🆔 Extract Prediction ID** → Captures the unique prediction ID and endpoint for polling.
* **⏱️ Wait** → Pauses for 2 seconds before re-checking.
* **📡 Check Prediction Status** → Polls Replicate’s API to see if the audio generation is done.
* **✅ Check If Complete** →

  * If finished: moves forward to process results.
  * If not: loops back to wait and check again.

**Benefit:** Efficiently manages asynchronous audio generation, ensuring the workflow only proceeds when results are ready.

---

## 🎧 Section 4: Process Result

* **📝 Process Result** → Extracts and structures final output data:

  * **status** (success or failure)
  * **output** (raw response)
  * **metrics** (generation statistics)
  * **timestamps** (created and completed times)
  * **audio\_url** (final generated audio link)

**Benefit:** Provides a clean, structured output that can be used in follow-up automations (e.g., sending audio to users, storing in a database, or sharing via email).

---

## 📊 Workflow Overview

| Section                     | Purpose                         | Key Nodes                                                               | Benefit                          |
| --------------------------- | ------------------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| ⚡ Trigger & Authentication  | Start workflow & authenticate   | Manual Trigger, Set API Key                                             | Secure execution                 |
| 🎛️ Create Prediction       | Submit audio generation request | Create Prediction                                                       | Start model processing           |
| ⏳ Polling & Status Tracking | Monitor prediction progress     | Extract Prediction ID, Wait, Check Prediction Status, Check If Complete | Ensures reliable completion      |
| 🎧 Process Result           | Format and deliver output       | Process Result                                                          | Clean audio result ready for use |

---

## ✅ Final Benefits

* 🔒 Secure authentication with Replicate
* 🎛️ Flexible audio generation using **voxtral-small-24b-2507**
* ⏳ Reliable polling until results are ready
* 🎧 Clean and structured audio output

---


## 📊 Basic Information

- **Workflow ID:** 6890
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 443
- **Downloads:** 44
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6890)

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
