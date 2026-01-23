# Set credentials dynamically using expressions

> ## How it works

This workflow shows how to set credentials dynamically using expressions. It accepts an API key via a form, then uses it in the NASA node to authenticate a request.

## Setup steps

First, set up your NASA credential: 

1. Create a new NASA credential.
1. Hover over **API Key**.
1. Toggle **Expression** on.
1. In the **API Key** field, enter `{{ $json["Enter your NASA API key"] }}`.


Then, test the workflow:

1. Get an [API key from NASA](https://api.nasa.gov/)
2. Select **Test workflow**
3. Enter your key using the form.
4. The workflow runs and sends you to the NASA picture of the day.


For more information on expressions, refer to [n8n documentation | Expressions](https://docs.n8n.io/code/expressions/).

## 📊 Basic Information

- **Workflow ID:** 2223
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 5104
- **Downloads:** 510
- **Created:** 2024/4/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2223)

## 👤 Author

- **Name:** Deborah
- **Username:** @deborah

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **formTrigger** 
- **nasa** 
- **respondToWebhook** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
