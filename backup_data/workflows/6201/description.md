*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Send Automated Personalized Birthday Emails Using Google Sheets, OpenRouter AI, and Gmail

## 🧠 What This Workflow Does
This workflow sends personalized birthday greetings via email every morning using data from Google Sheets and messages generated with AI. It’s great for communities, schools, small businesses, or anyone who wants to automate meaningful connections.

## ⚙️ Features
🗓 Daily Birthday Check — Runs every day at 9 AM
📋 Google Sheets Integration — Reads user data: Name, Email, DOB
🔍 Smart Date Matching — Extracts day & month from DOB to match today’s date
🤖 OpenRouter AI Integration — Generates a custom subject + email message
🛠 Function Node Cleanup — Separates AI response into subject & body
📬 Gmail Node — Sends personalized birthday wishes instantly

## 🔧 Tech Stack
1. Google Sheets
2. OpenRouter (or OpenAI-compatible model)
3. Gmail

## 💡 Use Cases
1. Educators sending birthday emails to students
2. Team leads acknowledging team members’ birthdays
3. Freelancers staying in touch with clients
4. 1Coaches or mentors maintaining personal rapport

## 📝 Requirements
1. Google Sheet with columns: Name, DOB (DD/MM/YYYY), and Email
2. Gmail account with OAuth2 connected
3. OpenRouter (or OpenAI) API key
4. Basic understanding of n8n nodes

