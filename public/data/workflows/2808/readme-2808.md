# Enrich Linkedin profiles from Google Sheets via RapidAPI

> ### LinkedIn Profile Enrichment Workflow

#### Who is this for?

This workflow is ideal for recruiters, sales professionals, and marketing teams who need to enrich LinkedIn profiles with additional data for lead generation, talent sourcing, or market research.

#### What problem is this workflow solving?

Manually gathering detailed LinkedIn profile information can be time-consuming and prone to errors. This workflow automates the process of enriching profile data from LinkedIn, saving time and ensuring accuracy.

#### What this workflow does

1.  **Input**: Reads LinkedIn profile URLs from a Google Sheet.
2.  **Validation**: Filters out already enriched profiles to avoid redundant processing.
3.  **Data Enrichment**: Uses RapidAPI's Fresh LinkedIn Profile Data API to retrieve detailed profile information.
4.  **Output**: Updates the Google Sheet with enriched profile data, appending new information efficiently.

#### Setup

1.  **Google Sheet**: Create a sheet with a column named `linkedin_url` and populate it with the profile URLs to enrich.
2.  **RapidAPI Account**: Sign up at [RapidAPI](https://rapidapi.com) and subscribe to the Real-Time Data Enrichment API.
3.  **API Integration**: Replace the `x-rapidapi-key` and `x-rapidapi-host` values with your credentials from RapidAPI.
4.  **Run the Workflow**: Trigger the workflow and monitor the updates to your Google Sheet.

#### How to customize this workflow

*   **Filter Criteria**: Modify the filter step to include additional conditions for processing profiles.
*   **API Configuration**: Adjust API parameters to retrieve specific fields or extend usage.
*   **Output Format**: Customize how the enriched data is appended to the Google Sheet (e.g., format, column mappings).
*   **Error Handling**: Add steps to handle API rate limits or missing data for smoother automation.

This workflow streamlines LinkedIn profile enrichment, making it faster and more effective for data-driven decision-making.

## 📊 Basic Information

- **Workflow ID:** 2808
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 11957
- **Downloads:** 1195
- **Created:** 2025/1/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2808)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **filter** 
- **set** 
- **code** 
- **googleSheets** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
