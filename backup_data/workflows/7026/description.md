### 📁 Analyze uploaded images, videos, audio, and documents with specialized tools — powered by a lightweight language-only agent.

---

## 🧭 What It Does

This workflow enables **multimodal file analysis** using **Google Gemini tools** connected to a **text-only LLM agent**. Users can upload images, videos, audio files, or documents via a chat interface. The workflow will:

* Upload each file to Google Gemini and obtain an accessible URL.
* Dynamically generate contextual prompts based on the file(s) and user message.
* Allow the agent to invoke Gemini tools for specific media types as needed.
* Return a concise, helpful response based on the analysis.

---

## 🚀 Use Cases

* **Customer support**: Let users upload screenshots, documents, or recordings and get helpful insights or summaries.
* **Multimedia QA**: Review visual, audio, or video content for correctness or compliance.
* **Educational agents**: Interpret content from PDFs, diagrams, or audio recordings on the fly.
* **Low-cost multimodal assistants**: Achieve multimodal functionality **without relying on large vision-language models**.

---

## 🎯 Why This Architecture Matters

Unlike end-to-end multimodal LLMs (like Gemini 1.5 or GPT-4o), this template:

* Uses a **text-only LLM (Qwen 32B via Groq)** for reasoning.
* Delegates **media analysis to specialized Gemini tools**.

### ✅ Advantages

| Feature                 | Benefit                                                               |
| ----------------------- | --------------------------------------------------------------------- |
| 🧩 Modular              | LLM + Tools are decoupled; can update them independently              |
| 💸 Cost-Efficient       | No need to pay for full multimodal models; only use tools when needed |
| 🔧 Tool-based Reasoning | Agent invokes tools on demand, just like OpenAI’s Toolformer setup    |
| ⚡ Fast                  | Groq LLMs offer ultra-fast responses with low latency                 |
| 📚 Memory               | Includes context buffer for multi-turn chats (15 messages)            |

---

## 🧪 How It Works

### 🔹 Input via Chat

* Users submit a message and (optionally) files via the `chatTrigger`.

### 🔹 File Handling

* If no files: prompt is passed directly to the agent.
* If files are included:

  * Files are split, uploaded to Gemini (to get public URLs).
  * Metadata (name, type, URL) is collected and embedded into the prompt.

### 🔹 Prompt Construction

* A new `chatInput` is dynamically generated:

  ```
  User message
  Media: [array of file data]
  ```

### 🔹 Agent Reasoning

* The `Langchain Agent` receives:

  * The enriched prompt
  * File URLs
  * Memory context (15 turns)
  * Access to 4 Gemini tools:

    * `IMG`: analyze image
    * `VIDEO`: analyze video
    * `AUDIO`: analyze audio
    * `DOCUMENT`: analyze document

The agent autonomously decides whether and how to use tools, then responds with concise output.

---

## 🧱 Nodes & Services

| Category        | Node / Tool                  | Purpose                               |
| --------------- | ---------------------------- | ------------------------------------- |
| Chat Input      | `chatTrigger`                | User interface with file support      |
| File Processing | `splitOut`, `splitInBatches` | Process each uploaded file            |
| Upload          | `googleGemini`               | Uploads each file to Gemini, gets URL |
| Metadata        | `set`, `aggregate`           | Builds structured file info           |
| AI Agent        | `Langchain Agent`            | Receives context + file data          |
| Tools           | `googleGeminiTool`           | Analyze media with Gemini             |
| LLM             | `lmChatGroq` (Qwen 32B)      | Text reasoning, high-speed            |
| Memory          | `memoryBufferWindow`         | Maintains session context             |

---

## ⚙️ Setup Instructions

### 1. 🔑 Required Credentials

* **Groq API key** (for Qwen 32B model)
* **Google Gemini API key** (Palm / Gemini 1.5 tools)

### 2. 🧩 Nodes That Need Setup

* Replace existing credentials on:

  * `Upload a file`
  * Each `GeminiTool` (IMG, VIDEO, AUDIO, DOCUMENT)
  * `lmChatGroq`

### 3. ⚠️ File Size & Format Considerations

* Some Gemini tools have file size or format restrictions.
* You may add validation nodes before uploading if needed.

---

## 🛠️ Optional Improvements

* Add logging and error handling (e.g., for upload failures).
* Add MIME-type filtering to choose the right tool explicitly.
* Extend to include OCR or transcription services pre-analysis.
* Integrate with Slack, Telegram, or WhatsApp for chat delivery.

---

## 🧪 Example Use Case

&gt; "Hola, ¿qué dice este PDF?"

Uploads a document → Agent routes it to Gemini DOCUMENT tool → Receives extracted content → LLM summarizes it in Spanish.

---

## 🧰 Tags

```
multimodal, agent, langchain, groq, gemini, image analysis, audio analysis, document parsing, video analysis, file uploader, chat assistant, LLM tools, memory, AI tools
```

---

## 📂 Files

* This template is ready to use as-is in n8n.
* No external webhooks or integrations required.
