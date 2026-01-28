# Track hourly weather conditions with OpenWeatherMap and Google Sheets

> This n8n template allows you to monitor hourly weather conditions in a specific city using OpenWeatherMap and log the results to a Google Sheet. It’s perfect for anyone needing periodic weather tracking—whether you're managing logistics, travel planning, or environmental monitoring.

---

# 🔧 How it works
- A Schedule Trigger activates the workflow every hour.

- The Get Weather Data from OpenWeatherMap node fetches real-time weather details using the city name you specify.

- An IF node checks if the weather description contains "rain" or the temperature is below a set threshold.

- If the condition is true, the data is formatted with city, temperature, humidity, and conditions.

- The Google Sheets node appends this formatted information to your designated sheet.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Operations teams monitoring weather-sensitive logistics

- Researchers collecting climate data

- Developers and hobbyists learning how to connect APIs with Google Sheets

---

# 🗂️ Google Sheet Structure
### Your Google Sheet should have the following columns:

- city (string)

- temperature (K) (number)

- humidity (number)

- conditions (string)

- status (string)

---

# ⚙️ Setup Instructions
- Create a Google Sheet with the above columns.

- Set up your Google Service Account credentials in n8n.

- Replace the API key in the HTTP Request node with your own OpenWeatherMap credential.

- Specify your target city and ensure your OpenWeatherMap account is active.

- Adjust the frequency in the Schedule Trigger as needed (default: every hour).


## 📊 Basic Information

- **Workflow ID:** 4066
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 694
- **Downloads:** 69
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4066)

## 👤 Author

- **Name:** ist00dent
- **Username:** @ist00dent

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **httpRequest** 
- **if** 
- **set** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
