# Scan single URLs for security vulnerabilities with GPT-4 (JS, PHP, Python)

> ## Overview
This **workflow** automates static security analysis for **JavaScript, PHP, and Python** codebases.  
It’s designed for **bug bounty hunters** and **security researchers** who need fast, structured, and AI-assisted vulnerability detection across multiple sources.

---

## Features

- 🤖 **AI-Powered Analysis**:
  - Specialized agents for each language:
    - **AI JavaScript Expert**
    - **AI PHP Expert**
    - **AI Python Expert**
  - Each agent detects **only exploitable vulnerabilities** (AST + regex heuristics).
  - Returns strict JSON with:
    ```json
    {
      "results": [
        {
          "url": "file or URL",
          "code": "lines + snippet",
          "severity": "medium|high|critical",
          "vuln": "vulnerability type"
        }
      ]
    }
    ```

- 🧩 **Post-Processing**:
  - Cleans, formats, and validates JSON results.
  - Generates **HTML tables** with clear styling for quick visualization.

---

## Output
- ✅ JSON vulnerability reports per file.
- 📊 HTML table summaries grouped by language and severity.

---

## Usage
1. Import the workflow into **n8n**.
2. Configure credentials:
   - OpenAI API key  
   - GitHub API Key
   - Google Drive API Key
3. Run via the provided **webhook form**.
4. Select analysis mode and input target.
5. View structured vulnerability reports directly in n8n or Google Drive.

---

## Notes
- Performs **static analysis only** (no code execution).
- Detects **exploitable findings only**; ignores low-impact issues.

---

## 📊 Basic Information

- **Workflow ID:** 10801
- **Complexity:** advanced
- **Node Count:** 44
- **Views:** 565
- **Downloads:** 56
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10801)

## 👤 Author

- **Name:** Javier Rieiro
- **Username:** @pyus3r

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **httpRequestTool** (×3)
- **code** (×3)
- **splitOut** (×4)
- **filter** (×3)
- **html** (×6)
- **switch** (×3)
- **stickyNote** (×12)
- **googleDrive** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 44 nodes with 29 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
