# Food image analysis for calorie estimation with Vision AI and Telegram

> ## Who’s it for

Teams building health/fitness apps, coaches running check-ins in chat, and anyone who needs quick, structured nutrition insights from food photos—without manual logging.

## What it does / How it works

This workflow accepts a food image (URL or Base64), uses a vision-capable LLM to infer likely ingredients and rough gram amounts, estimates per-ingredient calories, and returns a strict JSON summary with total calories and a short nutrition note. It normalizes different payloads (e.g., Telegram/LINE/Webhook) into a common format, handles transient errors with retries, and avoids hardcoded secrets by using credentials/env vars.

## Requirements

* Vision-capable LLM credentials (e.g., `gpt-4o` or equivalent)
* One input channel (Webhook, Telegram, or LINE)
* Environment variables for model name/temperature and optional request validation

## How to set up

1. Connect your input channel and enable the Webhook (copy the test URL).
2. Add LLM credentials and set `LLM_MODEL` and `LLM_TEMPERATURE` (e.g., `0.3`).
3. Turn on the workflow, send a sample payload with `imageUrl`, and confirm the strict JSON output.
4. (Optional) Configure a reply node (Telegram/Slack or HTTP Response) and a logger (Google Sheets/Notion).

## How to customize the workflow

* **Outputs**: Add macros (protein/fat/carb) or micronutrient fields.
* **Units**: Convert portion descriptions (piece/slice) to grams with your own mapping.
* **Languages**: Toggle multilingual output (ja/en).
* **Policies**: Tighten validation (reject low-confidence parses) or add manual review steps.
* **Security**: Use signed/temporary URLs for private images; mask PII in logs.

## Data model (strict JSON)

```json
{
  "dishName": "string",
  "ingredients": [{ "name": "string", "amount": 0, "calories": 0 }],
  "totalCalories": 0,
  "nutritionEvaluation": "string"
}
```

## Notes

Rename all nodes clearly, include sticky notes explaining the setup, and never commit real IDs, tokens, or API keys.


## 📊 Basic Information

- **Workflow ID:** 9619
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 455
- **Downloads:** 45
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9619)

## 👤 Author

- **Name:** Toshiya Minami
- **Username:** @minami

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **telegramTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **code** 
- **gmail** 
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
