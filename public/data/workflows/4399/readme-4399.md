# Anthropic AI agent: Claude Sonnet 4 and Opus 4 with Think and Web Search tool

> This workflow dynamically chooses between two new powerful Anthropic models — **Claude Opus 4** and **Claude Sonnet 4** — to handle user queries, based on their complexity and nature, maintaining scalability and context awareness with Anthropic **web search function** and **Think** tool.

---

###  **Key Advantages**

1. **🔁 Dynamic Model Selection**

   * Automatically routes each user query to either **Claude Sonnet 4** (for routine tasks) or **Claude Opus 4** (for complex reasoning), ensuring optimal performance and cost-efficiency.

2. **🧠 AI Agent with Tool Use**

   * The AI agent can utilize a **web search tool** to retrieve up-to-date information and a **Think tool** for complex reasoning processes — improving response quality.

3. **📎 Memory Integration**

   * Uses session-based **memory** to maintain conversational context, making interactions more coherent and human-like.

4. **🧮 Built-in Calculation Tool**

   * Handles numeric queries using an integrated **calculator tool**, reducing the need for external processing.

5. **📤 Structured Output Parser**

   * Ensures outputs are always well-structured and formatted in JSON, which improves consistency and downstream integrations.

6. **🌐 Web Search Capability**

   * Supports real-time information retrieval for current events, statistics, or details not available in the AI’s base knowledge.

---

###  Components Overview

* **Trigger**: Listens for new chat messages.
* **Routing Agent**: Analyzes the message and returns the best model to use.
* **AI Agent**: Handles the conversation, decides when to use tools.
* **Tools**:

  * `web_search` for internet queries
  * `Think` for reasoning
  * `Calculator` for math tasks
* **Models Used**:

  * `claude-sonnet-4-20250514`: Optimized for general and business logic tasks.
  * `claude-opus-4-20250514`: Best for deep, strategic, and analytical queries.

---

### **How It Works**
1. **Dynamic Model Selection**  
   - The workflow begins when a chat message is received. The **Anthropic Routing Agent** analyzes the user's query to determine the most suitable model (either **Claude Sonnet 4** or **Claude Opus 4**) based on the query's complexity and requirements.  
   - The routing agent uses predefined criteria to decide:  
     - **Claude Sonnet 4**: Best for standard tasks like real-time workflow routing, data validation, and routine business logic.  
     - **Claude Opus 4**: Reserved for complex scenarios requiring deep reasoning, advanced analysis, or high-impact decisions.  

2. **Query Processing and Response Generation**  
   - The selected model processes the query, leveraging tools like **web_search** for real-time information retrieval, **Think** for internal reasoning, and **Calculator** for numerical tasks.  
   - The **AI Agent** coordinates these tools, ensuring the response is accurate and context-aware. A **Simple Memory** node retains session context for coherent multi-turn conversations.  
   - The final response is formatted and returned to the user without intermediate steps or metadata.  

---

### **Set Up Steps**
1. **Node Configuration**  
   - **Trigger**: Configure the *"When chat message received"* node to handle incoming user queries.  
   - **Routing Agent**: Set up the *"Anthropic Routing Agent"* with the system message defining model selection logic. Ensure it outputs a JSON object with `prompt` and `model` fields.  
   - **AI Model Nodes**: Link the *"Sonnet 4 or Opus 4"* node to dynamically use the selected model. The *"Sonnet 3.7"* node powers the routing agent itself.  

2. **Tool Integration**  
   - Attach the *"web_search"* HTTP tool to enable internet searches, ensuring the API endpoint and headers (e.g., `anthropic-version`) are correctly configured.  
   - Connect auxiliary tools (*Think*, *Calculator*) to the *"AI Agent"* for extended functionality.  
   - Add the *"Simple Memory"* node to maintain conversation history.  

3. **Credentials**  
   - Provide an **Anthropic API key** to all nodes requiring authentication (e.g., model nodes, web search).  

4. **Testing**  
   - Activate the workflow and test with sample queries to verify:  
     - Correct model selection (e.g., Sonnet for simple queries, Opus for complex ones).  
     - Proper tool usage (e.g., web searches trigger when needed).  
     - Memory retention across chat turns.  

5. **Deployment**  
   - Once validated, set the workflow to **active** for live interactions.  

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 4399
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 8819
- **Downloads:** 881
- **Created:** 2025/5/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4399)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **httpRequestTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
