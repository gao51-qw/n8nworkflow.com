# Real estate daily deals automation with Zillow API, Google Sheets and Gmail

> ## Daily Real Estate Deal Finder Automation


This automation is aimed to send you daily deals via email every morning at 9AM in real estate markets you are interested in with strict search criteria you provide. It uses ZillowAPI to get up to date listings and RentZestimates. From there it calculates a host of investing metrics such as your Down PMT, Cash on Cash ROI, Monthly Cash Flow, Monthly Maintenance and Vacancy Loss.

## Prerequisites
- N8N account
- Google account with OAuth setup here's a video for help: https://youtu.be/LTuy83t_Rt4?si=0XdpxM7G48gtFDe6
- Google Sheets API enabled
- RapidAPI account with Zillow API credentials 
- Blank Google Sheet created with specific columns

## Step 1: Create a New Workflow
- Create a new workflow in N8N
- Name it something meaningful like "Daily Real Estate Deal Finder"
-  Credentials you will need: Google OAuth credentials (here's a video for help: https://www.youtube.com/watch?v=LTuy83t_Rt4&t=22s) Google sheets API enabled, RapidAPI Zillow credentials


## Step 2: Configure Search Parameters in Set Parameters Node
- Define your real estate search criteria as key-value pairs: Example location: "Austin, TX" min_bed: 2 min_bath: 2, min_price: 250000, max_price: 400000, propertyType: "Single Family= True"

## Step 3: Update Google Sheet
- Create a new Google Sheets
- Create the following columns Address, Price, Rent Zestimate, Cash onCash RoI, Monthly CashFlow and Down Pmt
- Make sure your google sheets node in N8N is mapping to the correct columns and the correct sheet

## Troubleshooting Tips
- If Zillow API fails, check your API credentials and request limits
- For calculation errors, verify your formulas in the Code node
- If Google Sheets node fails, ensure proper column mapping
- Always test with a small data set before running in production
- Happy Investing please let me know if you have any questions or trouble

This workflow will now automatically search for real estate deals matching your criteria, calculate investment metrics, update your tracking spreadsheet, and email you a summary each morning. Here is the entire step by step tutorial to set this up: https://www.youtube.com/watch?v=OSeLeKc375Y&t=6s

## 📊 Basic Information

- **Workflow ID:** 3030
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 2592
- **Downloads:** 259
- **Created:** 2025/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3030)

## 👤 Author

- **Name:** T Zero
- **Username:** @tzero

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×2)
- **splitOut** 
- **googleSheets** 
- **gmail** 
- **stickyNote** (×3)
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
