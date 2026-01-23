### 👥 Who is this for?

- Startup founders validating or pitching new ideas  
- Business consultants running strategy sessions  
- Product teams defining business logic visually  
- Agencies offering planning frameworks to clients  

---

### ❓ What problem does this workflow solve?

Creating a Business Model Canvas manually is time-consuming and often scattered across tools. This workflow solves that by allowing users to generate a **fully populated, formatted, and printable Business Model Canvas** in seconds using the power of AI, all structured in a professional A4 landscape layout.

---

### ⚙️ What this workflow does

- Starts with a **chat input** asking for your business idea  
- Sends it to **9 separate AI agents**, each focused on one section:
  - Key Partners  
  - Key Activities  
  - Value Proposition  
  - Customer Relationships  
  - Customer Segments  
  - Key Resources  
  - Channels  
  - Cost Structure  
  - Revenue Streams  
- Uses your preferred LLM (see below) to generate meaningful bullet points  
- Converts output into a specific format  
- Merges all sections into a clean, A4-styled HTML canvas  
- Exports the result as a downloadable `.html` file

---

### 🛠️ Setup

1. Import the workflow into your n8n instance  
2. Start the flow from the **“When chat message received”** node  
3. Describe your business idea when prompted (e.g., “Online bookshop with rare Persian literature”)  
4. Wait for AI processing to complete  
5. Visit the last node **“HTML code to HTML file”**  
6. Click **Download** to get your final canvas in `.html` format  

---

### 🤖 LLM Flexibility (Choose Your Model)

This template supports any AI model with a chat interface:

- Ollama (self-hosted models like LLaMA, etc.)  
- OpenAI (GPT-4, GPT-3.5)  
- Anything with a compatible node

You can easily change the LLM by updating the **Language Model Node**.  
No need to modify any other logic or formatting.

---

### 🧪 How to customize this workflow

- **Change the LLM** model from the Ollama node to OpenAI, etc.  
- Modify the final HTML layout in the **“Turn to HTML”** node  
- Add a **PDF export**, **email delivery**, or **Google Drive sync**  
- Replace the chat trigger with a webform, CRM hook, etc.

---

### ✅ Requirements

- A working LLM integration (Ollama or OpenAI recommended)
- n8n (self-hosted or cloud)

---

### 📌 Notes

- Sticky notes included for setup and instructions  
- Each node clearly named by function (e.g. "Customer Segments Generator")  
- Designed for speed, structure, and professional presentation  

---

### 📩 Need help?

For setup questions, custom features, or LLM integration support, contact:  
**sinamirshafiee@gmail.com**
