# Process multiple prompts in parallel with Azure OpenAI Batch API

> # Process Multiple Prompts in Parallel with Azure OpenAI Batch API

## Who is this for?
This workflow is designed for developers and data scientists who want to efficiently send multiple prompts to the Azure OpenAI Batch API and retrieve responses in a single batch process. It is particularly useful for applications that require processing large volumes of text data, such as chatbots, content generation, or data analysis.

## What problem is this workflow solving?
Sending multiple prompts to the Azure OpenAI API can be time-consuming and inefficient if done sequentially. This workflow automates the process of batching requests, allowing users to submit multiple prompts at once and retrieve the results in a streamlined manner. This not only saves time but also optimizes resource usage.

## What this workflow does
This workflow:
1. Accepts an array of requests, each containing a prompt and associated parameters.
2. Converts the requests into a JSONL format suitable for batch processing.
3. Uploads the batch file to the Azure OpenAI API.
4. Creates a batch job to process the prompts.
5. Polls for the job status and retrieves the output once processing is complete.
6. Parses the output and returns the results.

### Key Features of Azure OpenAI Batch API
The Azure OpenAI Batch API is designed to handle large-scale and high-volume processing tasks efficiently. Key features include:
- **Asynchronous Processing**: Handle groups of requests with separate quotas, targeting a 24-hour turnaround at 50% less cost than global standards.
- **Batch Requests**: Send a large number of requests in a single file, avoiding disruption to online workloads.
  
### Key Use Cases
- **Large-Scale Data Processing**: Quickly analyze extensive datasets in parallel.
- **Content Generation**: Create large volumes of text, such as product descriptions or articles.
- **Document Review and Summarization**: Automate the review and summarization of lengthy documents.
- **Customer Support Automation**: Handle numerous queries simultaneously for faster responses.
- **Data Extraction and Analysis**: Extract and analyze information from vast amounts of unstructured data.
- **Natural Language Processing (NLP) Tasks**: Perform tasks like sentiment analysis or translation on large datasets.
- **Marketing and Personalization**: Generate personalized content and recommendations at scale.

## Setup
1. **Azure OpenAI Credentials**: Ensure you have your Azure OpenAI API credentials set up in n8n.
2. **Configure the Workflow**: 
   - Set the `az_openai_endpoint` in the "Setup defaults" node to your Azure OpenAI endpoint.
   - Adjust the `api-version` in the "Set desired 'api-version'" node if necessary.
3. **Run the Workflow**: Trigger the workflow using the "Run example" node to see it in action.

## How to customize this workflow to your needs
- **Modify Prompts**: Change the prompts in the "One query example" node to suit your application.
- **Adjust Parameters**: Update the parameters in the requests to customize the behavior of the OpenAI model.
- **Add More Requests**: You can add more requests in the input array to process additional prompts.

## Example Input
```json
[
  {
    "api-version": "2025-03-01-preview",
    "requests": [
      {
        "custom_id": "first-prompt-in-my-batch",
        "params": {
          "messages": [
            {
              "content": "Hey ChatGPT, tell me a short fun fact about cats!",
              "role": "user"
            }
          ]
        }
      },
      {
        "custom_id": "second-prompt-in-my-batch",
        "params": {
          "messages": [
            {
              "content": "Hey ChatGPT, tell me a short fun fact about bees!",
              "role": "user"
            }
          ]
        }
      }
    ]
  }
]
```

## Example Output
```json
[
  {
    "custom_id": "first-prompt-in-my-batch",
    "response": {
      "body": {
        "choices": [
          {
            "message": {
              "content": "Did you know that cats can make over 100 different sounds?"
            }
          }
        ]
      }
    }
  },
  {
    "custom_id": "second-prompt-in-my-batch",
    "response": {
      "body": {
        "choices": [
          {
            "message": {
              "content": "Bees communicate through a unique dance called the 'waggle dance'."
            }
          }
        ]
      }
    }
  }
]
```

## Additional Notes
- **Job Management**: You can cancel a job at any time, and any remaining work will be canceled while already completed work is returned. You will be charged for any completed work.
- **Data Residency**: Data stored at rest remains in the designated Azure geography, while data may be processed for inferencing in any Azure OpenAI location.
- **Exponential Backoff**: If your batch jobs are large and hitting the enqueued token limit, certain regions support queuing multiple batch jobs with exponential backoff.

This template provides a comprehensive solution for efficiently processing multiple prompts using the Azure OpenAI Batch API, making it a valuable tool for developers and data scientists alike.

## 📊 Basic Information

- **Workflow ID:** 3537
- **Complexity:** advanced
- **Node Count:** 53
- **Views:** 698
- **Downloads:** 69
- **Created:** 2025/4/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3537)

## 👤 Author

- **Name:** Greg Evseev
- **Username:** @greg

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **executeWorkflowTrigger** 
- **code** (×6)
- **if** (×2)
- **stickyNote** (×15)
- **wait** (×2)
- **manualTrigger** 
- **set** (×7)
- **aggregate** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.memoryManager** (×3)
- **executionData** (×2)
- **splitOut** 
- **filter** (×2)
- **merge** (×2)
- **httpRequest** (×5)
- **convertToFile** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 53 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
