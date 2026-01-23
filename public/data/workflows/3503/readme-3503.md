# Generate written content with GPT Recursive Writing & Editing agents

> # Who is this for?
Content creators, writers, and automation enthusiasts experimenting with recursive AI workflows for content generation and refinement. Ideal for those exploring AI agents that collaborate in cycles of writing and editing.

# What problem does this solve?
This template introduces a fully automated, recursive writing‑editing loop using multi‑agent collaboration. A “Writing Agent” generates content based on an input topic. An “Editing Agent” reviews it, suggests improvements, and determines whether the work is complete. The loop continues until the editor is satisfied—allowing for high‑quality, iterative AI‑assisted writing with minimal human input.

# How it works
This template is a foundational setup to help you build custom recursive writing workflows:

1. **Trigger**: Activated by an n8n chat message containing a topic. You can customize this to work with webhooks, forms, or other input sources.  
2. **Edit Handler**: A code node checks for previous edits and sets a default empty string if none are found.  
3. **Writing Agent**: Generates a blurb based on the topic and any edits. Customize the prompt in this node by editing the user/system instructions to fit your tone, domain, or style preferences.  
4. **Editing Agent**: Suggests specific edits and outputs a structured JSON object:

   ```json
   {
     "status": "incomplete",
     "edits": "Replace passive voice with active voice in the second sentence. Clarify the main idea in the opening line."
   }
   ```

   You can adjust the JSON format or editing criteria in the prompt field. Customize the prompt in this node by editing the user/system instructions to fit your tone, domain, or style preferences.   
5. **Recursive Loop**: If the status is “incomplete,” the edits are passed back to the Writing Agent, which revises the blurb.  
6. **Completion**: Once the Editing Agent outputs a status of “complete,” the workflow ends, and the final blurb is returned to the n8n chat.

# Setup Steps

1. **Import the Template** into your n8n workspace.  
2. **Configure API Credentials**: Link your OpenAI API key (or your preferred LLM like Claude or Gemini) in the credentials section.  
3. **Customize the Prompts** (Optional but recommended):  
   - In the **Writing Agent**, you can instruct it to mimic a specific tone, format, or genre.  
   - In the **Editing Agent**, specify your editing standards (e.g., concise, persuasive, technical).  
   - Modify the JSON output structure in the **Structured Output Parser** node if needed.  
4. **Test and Iterate**: Run a test by sending a topic via the chat trigger and observe the loop behavior.

# Example Output
**Input Topic**: “The future of remote work”  
**Final Blurb**: “Remote work is here to stay. As companies embrace flexible setups, productivity and employee satisfaction are reaching new highs. The challenge now is to build culture and collaboration tools that keep up.”

This template offers a powerful starting point for recursive AI writing. Expand it with additional agents, tone shifts, formatting layers, or sentiment analysis as needed.

## 📊 Basic Information

- **Workflow ID:** 3503
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1416
- **Downloads:** 141
- **Created:** 2025/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3503)

## 👤 Author

- **Name:** Matty Reed
- **Username:** @mattyreed1

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
