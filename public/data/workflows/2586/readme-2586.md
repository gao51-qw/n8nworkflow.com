# Weekly dinner meal plan using recipes from Mealie

> This workflow randomly select recipes from a Mealie instance (can use a specific category) and then creates a meal plan in Mealie with those recipes.

## How it works:
- Workflow has a scheduled trigger (set to run weekly on a Friday)
- `Config` node sets a few properties to configure the workflow
- A call to the Mealie API to get the list of recipes
- The code node holds most of the logic, this will loop through the number of recipes defined in the config node and randomly select a recipe from the list (making sure not to double up any recipes)
- Once all the recipes are selected it will call the Mealie API to set up the meal plan on the days


## Setup
- Add your Mealie API token as a credential and set it on the Http Request nodes
- Set the relevant schedule trigger to run when you like
- Update the `Config` node with the config you want
	- numberOfRecipes - Number of recipes to populate for the meal plan
	- offsetPlanDays - Number of days in the future to start the plan (0 will start it today, 1 tomorrow, etc.)
	- mealieCategoryId - A category id of the category you want to pull in recipes from (default to select from all recipes)
	- mealieBaseUrl - The base url of your Mealie instance


## 📊 Basic Information

- **Workflow ID:** 2586
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2784
- **Downloads:** 278
- **Created:** 2024/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2586)

## 👤 Author

- **Name:** Damian Karzon
- **Username:** @dkarzon

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×2)
- **manualTrigger** 
- **set** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
