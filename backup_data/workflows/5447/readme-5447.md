# Advanced retry and delay logic

> ## Advanced Retry and Delay Logic

This template provides a robust solution for handling API rate limits and temporary service outages in n8n workflows. It overcomes the limitations of the default node retry settings, which cap retries at 5 and delays at 5 seconds. By using a custom loop with a `Set`, `If`, and `Wait` node, this workflow gives you complete control over the number of retries and the delay between them.

### Instructions:

1. Replace the placeholder **HTTP Request** node with your target node (the one that might fail).
2. In the initial **Set Fields** node, modify the `max_tries` value to set the total number of attempts for your workflow.
3. Adjust the `delay_seconds` value to define the initial delay between retries.
4. Optionally, configure the `Edit Fields` node to implement exponential backoff by adjusting the `delay_seconds` expression (e.g., `{{$json.delay_seconds * 2}}`).

For a more detailed breakdown and tutorial of this template, you can find additional information [here](https://n8nplaybook.com/post/2025/06/mastering-custom-retry-and-delay-logic-in-n8n/).

## 📊 Basic Information

- **Workflow ID:** 5447
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5447)

## 👤 Author

- **Name:** Viktor Klepikovskyi
- **Username:** @vklepikovskyi

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** (×2)
- **if** 
- **stopAndError** 
- **wait** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
