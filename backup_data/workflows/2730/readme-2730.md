# Get daily weather and save it in Airtable

> This smart automation workflow created by the [AI development team](https://www.weblineindia.com/hire-ai-developers.html) at WeblineIndia, helps with the daily collection and storage of weather data. Using the OpenWeatherMap API and Airtable, this solution gathers vital weather details such as temperature, humidity, and wind speed. The automation ensures daily updates, creating a dependable historical record of weather patterns for future reference and analysis.

## Steps:

### Set Schedule Trigger
Configure a Cron node to trigger the workflow daily, for example, at 7 AM.

### Fetch Weather Data (HTTP Request)

- Use the HTTP Request node to retrieve weather data from the OpenWeatherMap API.
- Include your API key and query parameters (e.g., q=London, unit=metric) to specify the city and desired units.

### Parse Weather Data

Utilize a JSON Parse node to extract key weather details, such as temperature, humidity, and wind speed, from the API response.

### Store Data in Airtable

Use the Airtable node to insert the parsed data into the designated Airtable table. Ensure proper mapping of fields like temperature, humidity, and wind speed.

### Save and Execute

Save the workflow and activate it to ensure weather data is fetched and stored automatically every day.

## Outcome
This robust solution, developed by WeblineIndia, reliably collects and archives daily weather data, providing businesses and individuals with an accessible record of weather trends for analysis and decision-making.

## About WeblineIndia
We specialize in creating [custom automation solutions](https://www.weblineindia.com/process-automation-solutions.html) and innovative software workflows to help businesses streamline operations and achieve efficiency. This weather data fetcher is just one example of our expertise in delivering value through technology.

## 📊 Basic Information

- **Workflow ID:** 2730
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1243
- **Downloads:** 124
- **Created:** 2025/1/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2730)

## 👤 Author

- **Name:** WeblineIndia
- **Username:** @weblineindia

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **scheduleTrigger** 
- **airtable** 
- **httpRequest** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
