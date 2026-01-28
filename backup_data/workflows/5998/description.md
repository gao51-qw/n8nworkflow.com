This n8n workflow demonstrates how to build an automated AI chat system using OpenRouter.ai.
It includes a manual trigger, sets a model and user message, sends a POST request to the OpenRouter chat API,
and summarizes the response.

Workflow Steps:
1. Manual Trigger – Starts the workflow when executed manually.
2. Set Node – Defines:
   - Model: mistralai/mistral-small-3.2-24b-instruct:free
   - Message: What is the meaning of life?
3. HTTP Request – Sends a POST request to https://openrouter.ai/api/v1/chat/completions
   using Bearer Token Authentication with the model and message as JSON.
4. Summarize – Extracts and summarizes the AI’s response (choices[0].message.content).

Use Cases:
- AI chatbot automation
- Content summarization
- Testing AI prompts in real-time
- Educational demos using OpenRouter.ai
- Lightweight conversational tools with no external server
