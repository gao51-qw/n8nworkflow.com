# Auto-assign deals in Hubspot to fitting sales reps based on geo and company size

> # Use case
To guarantee an effective sales process deals must be distributed between sales reps in the best way. Normally, this involves manually assigning new deals that have come in. This workflow automates it for you!
# What this workflow does
This workflow runs once a day and checks for unassigned deals in your Hubspot CRM. Once it finds one, it enriches the deal with information about the assigned contact and their company. It then checks the region of the assigned company before looking at the company's employee size. Based on this, it assigns the deal to the right sales rep within your company.
# Requirements
- New deals in Hubspot need to be unassigned in the beginning
- New deals have to have an attached contact that has an attached company in Hubspot
- The company needs to have values for region and employee count in Hubspot
# Setup
The setup is quite straight forward and will probably take a few minutes only.
1. Add your **Hubspot** credentials
2. Customize your criterias for assigning deals in the `Assign by Region` and the following `Assign` nodes
3. Make sure deals are assigned to the right salesrep in the Hubspot nodes at the end
4. Activate the workflow
# Customizing this to your needs
- Adjust the trigger interval to your needs. Currently, it defaults to once a day
- Adjust your region settings by adding/updating/removing options in the respective node
- Adjust your employee size settings by adding/updating/removing options in the respective node
# Ideas to enhance this flow
- Wrap each region's assigned criteria into different sub-workflows for easier maintainability. This will not consume additional execution counts.
- Add more logic on what happens once a deal does not match any criteria you've set

## 📊 Basic Information

- **Workflow ID:** 2117
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 1489
- **Downloads:** 148
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2117)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **filter** 
- **splitOut** 
- **switch** (×3)
- **hubspot** (×7)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
