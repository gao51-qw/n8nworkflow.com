# 🎓 Learn Code Node (JavaScript) with an Interactive Hands-On Tutorial

> ## How it works

This workflow is a hands-on tutorial for the **Code node** in n8n, covering both basic and advanced concepts through a simple data processing task.

1.  **Provides Sample Data:** The workflow begins with a sample list of users.
2.  **Processes Each Item (`Run Once for Each Item`):** The first Code node iterates through each user to calculate their `fullName` and `age`. This demonstrates basic item-by-item data manipulation using `$input.item.json`.
3.  **Fetches External Data (Advanced):** The second Code node showcases a more advanced feature. For each user, it uses the built-in `this.helpers.httpRequest` function to call an external API (genderize.io) to enrich the data with a predicted gender.
4.  **Processes All Items at Once (`Run Once for All Items`):** The third Code node receives the fully enriched list of users and runs only once. It uses `$items()` to access the entire list and calculate the `averageAge`, returning a single summary item.
5. **Create a Binary File:** The final Code node gets the fully enriched list of users once again and creates a binary CSV file to show how to use binary data `Buffer` in JavaScript.

## Set up steps

**Setup time: &lt; 1 minute**

This workflow is a self-contained tutorial and requires no setup.

1.  **Explore the Nodes:** Click on each of the Code nodes to read the code and the comments explaining each step, from basic to advanced.
2.  **Run the Workflow:** Click "Execute Workflow" to see it in action.
3.  **Check the Output:** Click on each node after the execution to see how the data is transformed at each stage. Notice how the data is progressively enriched.
4.  **Experiment!** Try changing the data in the `1. Sample Data` node, or modify the code in the Code nodes to see what happens.

## 📊 Basic Information

- **Workflow ID:** 5407
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 40003
- **Downloads:** 4000
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5407)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **set** 
- **splitOut** 
- **code** (×4)
- **stickyNote** (×7)
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
