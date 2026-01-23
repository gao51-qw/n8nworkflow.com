# WhatsApp support bot with Google Drive RAG, GPT-4.1-mini and Cohere reranking

> # WhatsApp RAG Agent (Text + Voice) with Weekly Google Drive Sync

**One-line summary :** Answers WhatsApp in under 100 words, understands voice notes, and retrieves trusted answers from your Google Drive docs (RAG) kept fresh weekly.

---

## What this template does

* **Reply to WhatsApp messages** in a polite, human tone with **≤100 words**.
* **Understands text and voice notes**: auto-downloads audio and transcribes to text.
* **Retrieves answers from your knowledge base (RAG)**: Google Drive docs → chunk → embed → store in Supabase → rerank with Cohere.
* **Keeps short-term memory** across the conversation to avoid repetition.
* **Weekly doc sync** from a selected Google Drive folder so non-technical staff can update content without touching n8n.

---

## Why it matters

* **Zero busywork:** Update a Google Doc; the bot learns it on the next sync.
* **Trustworthy answers:** Responses come from **your** vetted docs, not random web text.
* **Voice-first friendly:** Handles the WhatsApp reality of “send a voice note.”
* **Safer by design:** Guardrails—no pricing unless in KB, no pushy sales, no medical advice.

---

## Triggers

* **WhatsApp Trigger:** Receives incoming messages (text or audio).
* **Google Drive Trigger (weekly):** Detects new/updated files in the chosen folder for ingestion.

---

## App credentials required

* **WhatsApp Business Cloud** (App ID, Token, Phone Number ID)
* **OpenAI** (Chat + Embeddings)
* **Cohere** (Rerank)
* **Supabase** (SUPABASE_URL, ANON_KEY)
* **Google Drive** (OAuth2) + target Folder ID

---

## Suggested environment variables

```bash
WHATSAPP_APP_ID=
WHATSAPP_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
OPENAI_API_KEY=
COHERE_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
GDRIVE_FOLDER_ID=
RAG_TABLE_NAME="documents"     # table to store vectors/metadata
MAX_ANSWER_WORDS=100            # guardrail for concise replies
```

---

## Architecture overview

* **Answer-time lane (RAG Tool):**

  1. Receive WhatsApp message → 2) Transcribe audio if present → 3) Maintain short-term memory → 4) Retrieve from Supabase vectors (topK) → 5) Rerank with Cohere → 6) Compose ≤100-word reply with sources → 7) Send on WhatsApp.
* **Ingest lane (Weekly Sync):**
  A) Detect Drive file updates → B) Download & convert (Docs → text/plain) → C) Chunk (size/overlap) → D) Embed with OpenAI → E) Upsert to Supabase with metadata & hashes.

---

## How it works (node rundown)

| #  | Node                                        | Key Inputs                      | Key Outputs                       |
| -- | ------------------------------------------- | ------------------------------- | --------------------------------- |
| 1  | **WhatsApp Trigger**                        | Incoming message                | Raw WhatsApp payload              |
| 2  | **Switch** (Attachment presence/type)       | Payload                         | Route: **Text** or **Audio**      |
| 3  | **HTTP Request** (Audio path)               | `attachments[0].data_url`       | Audio file                        |
| 4  | **OpenAI – Translate/ASR**                  | Audio file                      | Transcribed text                  |
| 5  | **Merge**                                   | Text path + Audio path          | Unified text message              |
| 6  | **Simple Memory**                           | Recent turns                    | Short-term context                |
| 7  | **OpenAI Chat Model**                       | Prompt + message + memory       | Draft answer (tool calls allowed) |
| 8  | **Supabase Vector Tool (retrieve-as-tool)** | Query text, `topK=10`           | Candidate KB passages             |
| 9  | **Cohere Reranker**                         | Candidates                      | Re-ranked context                 |
| 10 | **Send WhatsApp Message**                   | `to`, `body`                    | Reply sent                        |
| 11 | **Google Drive Trigger (weekly)**           | Folder ID, `fileUpdated`        | Changed files                     |
| 12 | **Set (File Id)**                           | id from trigger                 | File ref                          |
| 13 | **Google Drive – Download File**            | Id (Docs→txt)                   | Raw text                          |
| 14 | **Character Text Splitter**                 | `chunkSize=2000`, `overlap=300` | Chunks                            |
| 15 | **Default Data Loader**                     | Binary→Document                 | Clean docs                        |
| 16 | **OpenAI Embeddings (ingest)**              | Chunks                          | Vectors                           |
| 17 | **Supabase Vector Store (insert)**          | Table: `documents`              | Upserted KB                       |

**Notes**

* The **KB Tool** is the combo of steps 8–9–7 at answer time (retrieve → rerank → answer).
* The **Ingest lane** is steps 11–17 (weekly sync of your Drive folder).

---

## Setup (7‑minute sprint)

1. **Import the workflow** JSON.
2. **Connect credentials:** WhatsApp, OpenAI, Cohere, Supabase, Google Drive.
3. **Google Drive Trigger:** paste your **Folder ID**; keep `fileUpdated` event.
4. **Download File:** ensure Google Docs convert to **text/plain**.
5. **Supabase Vector Store (insert):** set table name to **`documents`** (or your schema).
6. **Character Text Splitter:** keep `chunkSize=2000`, `overlap=300` (balanced recall/latency).
7. **Retrieve-as-tool:** set `topK=10` and **enable reranker**.
8. **Send WhatsApp Message** mapping:

   * **Recipient**: `{{$("WhatsApp Trigger").item.json.messages[0].from}}`
   * **Body**: `{{$json.output}}`
9. **Test:**

   * Send a **text** and a **voice note** to your WhatsApp number → confirm concise answers.
   * Drop a Google Doc into the watched folder → verify it’s chunked/embedded on the next weekly poll (or run ingest nodes once manually).

---

## Prompt, tone & guardrails

* **System prompt:**

  * Be polite, human, and concise (**≤ `MAX_ANSWER_WORDS`**).
  * Cite or reference **only** the KB content; if unknown, say so and offer to escalate.
  * **No prices** unless present in the KB. **No medical advice.**
* **Temperature:** start at **0.2** for factual replies.
* **Memory window:** keep a short rolling buffer (e.g., last 4–6 turns).

---

## Data model (minimum viable)

Table **`documents`** (example columns):

* `id` (uuid)
* `source_url` (text)
* `title` (text)
* `chunk` (text)
* `embedding` (vector/float[] depending on extension)
* `chunk_hash` (text)
* `updated_at` (timestamp)

**Indexes**

* Unique index on `chunk_hash` to dedupe
* Index on `updated_at` for syncs

---

## Observability & ops

* Log **question**, **selected chunk ids/hashes**, and **final response** to a DB/Sheet for QA.
* Add a **low-confidence** route (score threshold) → Slack/Telegram escalation to a human.
* Track **latency** and **token usage** to tune `topK` and chunk sizes.

---

## Customization

* **Latency vs quality:** try `topK=6–8` and `chunkSize=1200` for speed.
* **Languages:** ASR node can be swapped for native multilingual output.
* **Escalation:** add channel handoff on low confidence or no KB hits.
* **Sync cadence:** change Drive Trigger to **daily** if content updates frequently.

---

## Safety & compliance

* **No medical advice.** If uncertain or clinical, ask to schedule a consult or refer to the right department.
* **PII:** Don’t log full phone numbers in plaintext analytics; hash where possible.
* **Prices & rates:** Only answer if present in the KB; otherwise hand off to front desk.

---

## Troubleshooting

* **No reply sent:** Ensure **Send message** node reads `{{$json.output}}` (Agent’s response property).
* **Audio path failing:** Confirm `attachments[0].data_url` exists and HTTP node fetches a valid file.
* **KB not updating:** Manually execute the ingest lane; check rows in Supabase.
* **Irrelevant answers:** Lower temperature to **0.2**, increase overlap to **400**, and verify Drive docs are clean and structured.

---

## Categories & tags

* **Categories:** AI, Customer Support, Healthcare Ops, RAG, WhatsApp
* **Tags:** WhatsApp, RAG, Google Drive, Supabase, OpenAI, Cohere, Voice Notes

---

## Pricing (rough, BYO keys)

* **n8n:** self-host free; n8n.cloud billed by plan.
* **OpenAI, Cohere:** usage-based by tokens/calls.
* **Supabase:** free tier + usage; vector storage billed by size.
* **WhatsApp Cloud:** Meta pricing per conversation.

---

## Nodes used in workflow

**WhatsApp Trigger**, **Switch**, **HTTP Request**, **OpenAI (ASR + Chat + Embeddings)**, **Merge**, **Simple Memory**, **Supabase Vector Tool (retrieve)**, **Cohere Reranker**, **Google Drive Trigger**, **Set**, **Google Drive – Download**, **Character Text Splitter**, **Default Data Loader**.



## 📊 Basic Information

- **Workflow ID:** 9043
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 636
- **Downloads:** 63
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9043)

## 👤 Author

- **Name:** Basil Irfan
- **Username:** @basil

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **googleDriveTrigger** 
- **set** (×2)
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **whatsApp** 
- **whatsAppTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
