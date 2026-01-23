# Track and monitor AI token usage metrics for OpenAI and Gemini models

> 📊 Token Usage Metrics Workflow

Descripción:
Este flujo de trabajo en n8n extrae y resume las métricas de uso de tokens (prompt, completion y total) y los modelos utilizados en una ejecución específica. Requiere el execution_id y un array con los nombres de los nodos de AI (por ejemplo: openai, gemini).

Requisitos:

    execution_id: ID de la ejecución de n8n de la cual se extraerán los datos.

    model_names: Array con los nombres de los nodos AI a buscar (ejemplo: openai, gemini).

Funcionamiento:

    Obtiene la ejecución con el ID proporcionado.

    Busca en los nodos indicados la información de token usage dentro de la ejecución.

    Suma los tokens usados y genera un listado de modelos utilizados.

    Devuelve métricas totales y un desglose detallado por modelo.

Configuración recomendada:

    Este workflow debe configurarse para ejecutarse siempre al final del flujo de trabajo.

    Desactivar la opción “Esperar a que termine” para evitar bloqueos y asegurar que se obtenga la ejecución completa.

---
📊 Token Usage Metrics Workflow

Description:
This n8n workflow extracts and summarizes token usage metrics (prompt, completion, and total tokens) along with the models used in a specific execution. It requires the execution_id and an array of AI node names (e.g., openai, gemini).

Requirements:

    execution_id: The n8n execution ID from which data will be extracted.

    model_names: An array of AI node names to search for (e.g., openai, gemini).

How It Works:

    Fetches the execution using the provided ID.

    Searches the specified nodes for token usage information within the execution.

    Aggregates token counts and compiles a list of models used.

    Returns total metrics and a detailed breakdown per model.

Recommended Configuration:

    Configure this workflow to run always at the end of your workflow.

    Disable the “Wait until finished” option to avoid blocking and ensure the complete execution data is available.

## 📊 Basic Information

- **Workflow ID:** 7265
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1036
- **Downloads:** 103
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7265)

## 👤 Author

- **Name:** Elimeleth
- **Username:** @elimeleth

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **n8n** 
- **executeWorkflowTrigger** 
- **code** 
- **stickyNote** 
- **executeWorkflow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
