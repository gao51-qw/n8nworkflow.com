# Generate customizable random strings with interactive forms

> ## contract
* input: length of the strings and number of copies
* output: random strings as specified.
  * randomness determined by Crypto node (generate/base64)

## How to run the workflow
1. Import the workflow into your n8n project
2. Click the Form Trigger to specify the length of the strings and how many copies to generate
3. The workflow runs then displays the generated random strings

## How to set up
* No additional set up is necessary to execute the workflow manually.

## integration Patterns of interests
* formTrigger node to submit a form, then use form (end) node to display results at the end of the triggered workflow.
* set(dup)-summarize(concatenate) to run a part of the workflow multiple times then merge the results to one piece of data


## 📊 Basic Information

- **Workflow ID:** 4710
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 448
- **Downloads:** 44
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4710)

## 👤 Author

- **Name:** Ger Longstacks
- **Username:** @dims3body

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **crypto** 
- **formTrigger** 
- **form** 
- **html** 
- **summarize** 
- **set** (×2)
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
