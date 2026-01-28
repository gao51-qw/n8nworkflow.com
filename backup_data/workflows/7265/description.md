📊 Token Usage Metrics Workflow

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