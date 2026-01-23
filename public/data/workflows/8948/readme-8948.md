# Automatic invoice due date reminders from Stripe to Google Calendar

> ## Description
Automatically track Stripe invoices and create Google Calendar reminders for upcoming due dates. This workflow ensures you never miss a payment deadline by running daily checks, filtering invoices due within the next 7 days, and adding them to your calendar with invoice details. ⏰💳📅

## What This Template Does
- Runs daily at 8:00 AM using a scheduled trigger. ⏰
- Fetches draft invoices from Stripe. 💳
- Splits invoice data into individual records for processing. 🔎
- Filters invoices due within the next 7 days. 📆
- Prevents duplicates by checking against existing calendar events. 🔄
- Creates Google Calendar events for valid invoices with details (ID, customer, amount). 📅

## Key Benefits
- Automated invoice due date reminders with no manual effort. ⚡
- Avoids duplicate entries in Google Calendar. 🛡️
- Provides a clear overview of pending payments. 👀
- Saves time for freelancers, agencies, and finance teams. ⏱️
- Keeps all payment reminders in one central place. 📲

## Features
- Daily schedule with cron expression (0 8 * * *).
- Stripe API integration to fetch draft invoices.
- Smart filtering: only invoices with due dates within 7 days are selected.
- Google Calendar integration to check existing events and avoid duplicates.
- Detailed calendar events with invoice ID, amount due, and customer email.
- Customizable reminders — add customer name, invoice link, or change times.

## Requirements
- n8n instance (cloud or self-hosted).
- Stripe API credentials with invoice read access.
- Google Calendar OAuth2 credentials with event write permissions.
- Access to the target Google Calendar (replace placeholder with your own).

## Target Audience
- Freelancers and solopreneurs managing invoices. 👩‍💻
- Agencies tracking multiple client invoices. 🏢
- Finance and accounting teams requiring automated reminders. 📊
- Businesses wanting to automate payment follow-ups. 💼
- Remote teams centralizing billing schedules. 🌍

## Step-by-Step Setup Instructions
- Configure Stripe API credentials in n8n.
- Add Google Calendar OAuth2 credentials with access to your target calendar.
- Replace the placeholder calendar ID (your-calendar@gmail.com) with your actual calendar.
- Import this workflow into n8n.
- Test the workflow by creating a test draft invoice in Stripe with a due date in the next 7 days.
- Verify the Google Calendar event is created with the invoice details.
- Enable the workflow to run daily and enjoy hands-free invoice tracking. ✅

## 📊 Basic Information

- **Workflow ID:** 8948
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 116
- **Downloads:** 11
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8948)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **stickyNote** (×9)
- **scheduleTrigger** 
- **httpRequest** 
- **itemLists** 
- **if** (×2)
- **googleCalendar** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
