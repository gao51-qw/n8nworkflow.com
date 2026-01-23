***Tags**: Sustainability, Business Travel, Carbon Emissions, Flight Tracking, Carbon Interface API*

### Context

Hi! I’m [Samir](https://samirsaci.com), a Supply Chain Engineer and Data Scientist based in Paris, and founder of [LogiGreen Consulting](https://logi-green.com).

I help companies monitor and reduce their environmental footprint by combining **AI automation**, **carbon estimation APIs**, and **workflow automation**.

This workflow is part of our **sustainability reporting initiative**, allowing businesses to **track the CO₂ emissions of employee flights**.

&gt; Automate carbon tracking for your business travel with AI-powered workflows in n8n!

📬 For business inquiries, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is designed for **travel managers**, **sustainability teams**, or **finance teams** who need to measure and report on emissions from business travel.

Let’s imagine your company receives a **flight confirmation email**:

[![Example Email](https://www.samirsaci.com/content/images/2025/06/image-17.png)](https://bit.ly/playlist-n8n-supplyscience)

The **AI Agent** reads the email and extracts structured data, such as **flight dates, airport codes, and number of passengers**.

Then, the **Carbon Interface API** is called to estimate **CO₂ emissions**, which are stored in a **Google Sheet** for sustainability reporting.

[![Workflow](https://www.samirsaci.com/content/images/2025/06/image-18.png)](https://bit.ly/playlist-n8n-supplyscience)

### How does it work?

This workflow automates the end-to-end process of **tracking flight emissions** from email to CO₂ estimation:

- 📨 Gmail Trigger captures booking confirmations  
- 🧠 AI Agent extracts structured data (airports, dates, flight numbers)  
- ✈️ Each flight leg is processed individually  
- 🌍 Carbon Interface API returns distance and carbon emissions  
- 📄 A second Google Sheet node appends the emission data for reporting

### Steps:

1. 💌 Trigger on new flight confirmation email  
2. 🧠 Extract structured trip data using AI Agent (flights, airports, dates)  
3. 📑 Store flight metadata in Google Sheets  
4. 🧭 For each leg, call the Carbon Interface API  
5. 📥 Append distance, CO₂ in kg, and timestamp to the flight row  

[![workflow](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-19.png)](https://bit.ly/playlist-n8n-supplyscience)

### What do I need to get started?

You’ll need:

- A **Gmail account** receiving SAP Concur or travel confirmation emails  
- A **Google Sheet** to record trip metadata and CO₂ emissions  
- A free [Carbon Interface API key](https://www.carboninterface.com/docs)  
- Access to OpenAI for parsing the email via AI Agent  
- A few sample flight confirmation emails to test

### 📺 Learn More with n8n Tutorials 

Get hands-on experience with automation through my comprehensive **n8n tutorial playlist**, featuring 18+ complete, step-by-step videos and ready-to-use templates.

[![n8n Playlist](https://www.samirsaci.com/content/images/size/w1600/2025/11/image-9.png)](https://bit.ly/playlist-n8n-supplyscience)

### Next Steps

🗒️ Use the sticky notes in the n8n canvas to:

- Add your Gmail and Carbon Interface credentials  
- Send a sample booking email to your inbox  
- Verify that emissions and distances are correctly added to your sheet  

*This template was built using n8n v1.93.0*  
*Submitted: June 7, 2025*
