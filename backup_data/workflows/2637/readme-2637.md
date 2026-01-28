# Chat assistant (OpenAI assistant) with Postgres memory and API calling capabalities

> # Workflow Description

Your workflow is an intelligent chatbot, using ++OpenAI assistant++, integrated with a backend that supports WhatsApp Business, designed to handle various use cases such as sales and customer support. Below is a breakdown of its functionality and key components:

---

## Workflow Structure and Functionality

### Chat Input (Chat Trigger)
- The flow starts by receiving messages from customers via WhatsApp Business.
- Collects basic information, such as `session_id`, to organize interactions.

### Condition Check (If Node)
- Checks if additional customer data (e.g., name, age, dependents) is sent along with the message.
- If additional data is present, a customized prompt is generated, which includes this information. The prompt specifies that this data is for the assistant's awareness and doesn’t require a response.

### Data Preparation (Edit Fields Nodes)
- Formats customer data and the interaction details to be processed by the AI assistant.
- Compiles the customer data and their query into a single text block.

### AI Responses (OpenAI Nodes)
- The assistant’s prompt is carefully designed to guide the AI in providing accurate and relevant responses based on the customer’s query and data provided.
- Prompts describe the available functionalities, including which APIs to call and their specific purposes, helping to prevent “hallucinated” or irrelevant responses.

### Memory and Context (Postgres Chat Memory)
- Stores context and messages in continuous sessions using a database, ensuring the chatbot maintains conversation history.

### API Calls
- The workflow allows the use of **APIs** with any endpoints you choose, depending on your specific use case. This flexibility enables integration with various services tailored to your needs.
- The OpenAI assistant understands JSON structures, and you can define in the prompt how the responses should be formatted. This allows you to structure responses neatly for the client, ensuring clarity and professionalism.
- Make sure to describe the purpose of each endpoint in the assistant’s prompt to help guide the AI and prevent misinterpretation.


### Customer Response Delivery
- After processing and querying APIs, the generated response is sent to the backend and ultimately delivered to the customer through WhatsApp Business.

---

## Best Practices Implemented

- **Preventing Hallucinations**  
  Every API has a clear description in its prompt, ensuring the AI understands its intended use case.

- **Versatile Functionality**  
  The chatbot is modular and flexible, capable of handling both sales and general customer inquiries.

- **Context Persistence**  
  By utilizing persistent memory, the flow maintains continuous interaction context, which is crucial for longer conversations or follow-up queries.

---

## Additional Recommendations

- Include practical examples in the assistant’s prompt, such as frequently asked questions or decision-making flows based on API calls.
- Ensure all responses align with the customer’s objectives (e.g., making a purchase or resolving technical queries).
- Log interactions in detail for future analysis and workflow optimization.

---

This workflow provides a solid foundation for a robust and multifunctional virtual assistant 🚀


## 📊 Basic Information

- **Workflow ID:** 2637
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 6256
- **Downloads:** 625
- **Created:** 2024/12/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2637)

## 👤 Author

- **Name:** Fernanda Silva
- **Username:** @ferzinia

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **if** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** (×2)
- **mySqlTool** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
