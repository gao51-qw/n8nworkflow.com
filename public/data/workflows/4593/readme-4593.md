# 🚛🗺️ Geocoding for logistics with Open Route API and Google Sheets

> ***Tags**: Supply Chain, Logistics, Geocoding, Transportation, GPS API*

### Context

Hi! I’m [Samir Saci](https://samirsaci.com), a Supply Chain Engineer and Data Scientist based in Paris, and founder of [LogiGreen Consulting](https://logi-green.com).

I help companies improve their **logistics operations** using data, AI, and automation to **reduce costs and minimize environmental footprint**.

![Geocoding](https://www.samirsaci.com/content/images/2025/06/image-5.png)

&gt; Let’s use n8n to analyze geographical data!

📬 For business inquiries, you can add find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is designed for **logistics and transport teams** but also **market analytics experts** that need to process geocoding data (get GPS coordinates from addresses).

![Example of Results](https://www.samirsaci.com/content/images/2025/06/image-3.png)

Ideal for:
- Transportation Planning
- Supply Chain Network Design
- Route optimization studies 

![Workflow](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-4.png)

### How does it work?

This n8n workflow connects to a **Google Sheet** where you store addresses with country codes, and uses the **OpenRouteService API** to calculate:

- 📏 GPS Coordinates (longitude, latitude) 
- 🗺️ Neighbourhood, City and local information

### Steps:
1. ✅ Load addresses with country codes
2. 🔁 Loop through each record  
3. 🚚 Query OpenRouteService 
4. 🧾 Extract and store results: longitude, latitude, neighbourhood
5. 📤 Update the Google Sheet with new values  

### What do I need to get started?

This workflow is beginner-friendly and requires:

- A **Google Sheet** with route pairs (departure and destination coordinates)
- A free **OpenRouteService API key**  
  [👉 Get one here](https://openrouteservice.org/dev/#/signup)

### Next Steps

🗒️ Follow the sticky notes inside the workflow to:

- Select your sheet
- Plug in your API key
- Launch the flow!

[![Thumbnail](https://www.samirsaci.com/content/images/2025/06/image-10.png)](https://www.youtube.com/watch?v=IlblIlKcL0k)
**[🎥 Check the Tutorial](https://www.youtube.com/watch?v=IlblIlKcL0k)**

🚀 You can customise the workflow to:
- Add additional outputs from the API
- Connect to your TMS via API or EDI

*This template was built using n8n v1.93.0*  
*Submitted: June 1, 2025*


## 📊 Basic Information

- **Workflow ID:** 4593
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1635
- **Downloads:** 163
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4593)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** (×3)
- **manualTrigger** 
- **googleSheets** (×2)
- **httpRequest** 
- **splitInBatches** 
- **set** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
