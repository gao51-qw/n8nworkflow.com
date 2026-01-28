# Email-based book recommendations with Ollama LLM and OpenLibrary API

> This workflow listens for incoming book request emails, extracts the user's intent using the Ollama LLM, queries book data (title, summary, details) via an API, and sends a personalized recommendation email. Ideal for automated book suggestions using LLMs and structured APIs, great for newsletters, reading clubs, and educational bots.

## How It Works

1. **Email Request:** Triggers the workflow when a new email with a book request is received.
2. **Analyze Email with Ollama:** Extracts user intent and book preferences using the Ollama LLM.
3. **Create Book Search Query:** Generates a query based on the analyzed intent.
4. **Book Search API:** Fetches book data (title, summary, details) from an API.
5. **Check API Response:** Validates the API response for book availability.
6. **Handle No Book Found:** Manages cases where no suitable book is found.
7. **Extract Book Summary:** Pulls the summary from the API response.
8. **Wait for Summary Response:** Pauses to ensure summary data is ready.
9. **Retrieve Book Details:** Gathers additional book details.
10. **Format Book Data:** Structures the book information for the recommendation.
11. **Enhance Data with Code:** Refines the data using custom code.
12. **Generate Email Content:** Creates a personalized email recommendation.
13. **Send Email:** Delivers the recommendation to the user.

## How to Use

- Import the workflow into n8n.
- Configure email credentials for the Email Request node.
- Set up Ollama LLM API credentials and endpoint.
- Configure the Book Search API with appropriate credentials and endpoint.
- Test with a sample email requesting a book recommendation.
- Adjust the Generate Email Content node for custom email templates if needed.
- Ensure the Send Email node is linked to a valid email service.

## Requirements

- Email service API credentials (e.g., Gmail, SMTP)
- Ollama LLM API access
- Book Search API credentials

## Customizing This Workflow

1. Modify the Analyze Email with Ollama node to refine intent extraction for specific genres.
2. Adjust the Book Search API query to target different book databases.
3. Customize the Generate Email Content node to include additional details like author bios.

## 📊 Basic Information

- **Workflow ID:** 5615
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 378
- **Downloads:** 37
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5615)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **emailReadImap** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** (×3)
- **httpRequest** (×3)
- **if** 
- **emailSend** (×2)
- **code** (×2)
- **wait** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
