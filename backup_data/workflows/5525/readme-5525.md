# Generate & email personalized jokes with GPT-4o-mini and Gmail

> This fun workflow automates the generation and delivery of personalized jokes by email based on the names or objects entered in the form. The process works as follows:

## On form submission
The workflow starts when someone submits a form with the required names or objects to create the joke.
You can modify the form fields to make the jokes more creative.

## Set the output language
Manually define the language in which you want to receive the joke.

## OpenAI Message Model
Uses the OpenAI model to generate the joke based on the prompt and in the chosen language.
(The response is limited to around 200 tokens.)

## Gmail: send message
The generated joke is automatically sent to the specified email address via Gmail.


## 📊 Basic Information

- **Workflow ID:** 5525
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 934
- **Downloads:** 93
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5525)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **stickyNote** (×4)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
