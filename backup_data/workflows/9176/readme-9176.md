# Automate job applications with Gemini AI, Notion tracking & multi-platform search

> ## 🎯 Smart Job Hunter Pro - AI-Powered Multi-Platform Job Automation

Transform your job search with this comprehensive n8n workflow that automatically searches, analyzes, and applies to relevant positions across multiple job platforms. Perfect for **developers**, **engineers**, and **tech professionals** looking to streamline their job hunting process.

## ✨ Key Features

- **🔄 Multi-Platform Job Search**: Simultaneously searches Jooble, JobStreet, Indeed, and WhatJobs APIs
- **🤖 AI-Powered Job Analysis**: Uses Google Gemini AI to analyze job compatibility and generate tailored cover letters
- **📊 Smart Scoring System**: Automatically scores job matches based on your skills and requirements
- **📝 Auto-Apply Threshold**: Only applies to jobs above your specified compatibility score
- **📋 Notion Integration**: Automatically tracks applications in organized Notion database
- **💬 Telegram Notifications**: Real-time alerts for high-match job opportunities
- **☁️ Google Drive Storage**: Saves personalized cover letters for each application
- **⚠️ Error Handling**: Comprehensive error tracking with Telegram notifications
- **⏰ Automated Scheduling**: Runs every 8 hours to find fresh opportunities

## 🛠 What This Workflow Does

1. **Scheduled Search**: Automatically searches multiple job platforms every 8 hours
2. **Data Normalization**: Standardizes job data from different API sources
3. **AI Analysis**: Gemini AI evaluates each job posting against your skills profile
4. **Smart Filtering**: Only processes jobs above your compatibility threshold (default: 75%)
5. **Application Tracking**: Creates detailed records in Notion with match scores and status
6. **Instant Alerts**: Sends Telegram notifications for promising opportunities
7. **Cover Letter Generation**: AI creates personalized cover letters for each position
8. **Document Management**: Automatically saves all cover letters to Google Drive

## 🔧 Required Integrations

- **Job APIs**: Jooble API, WhatJobs API (JobStreet & Indeed use web scraping)
- **AI Service**: Google Gemini API for job analysis
- **Productivity**: Notion database for application tracking
- **Communication**: Telegram bot for notifications
- **Storage**: Google Drive for cover letter management

## 💡 Perfect For

- **Software Developers** seeking JavaScript, React, Node.js positions
- **Full-Stack Engineers** wanting automated job discovery
- **Tech Professionals** needing organized application tracking
- **Remote Workers** searching across multiple platforms
- **Career Changers** looking for systematic job hunting

## 🎛 Customizable Variables

- **Job Keywords**: Define your target roles and skills
- **Location & Radius**: Set geographic search parameters
- **Auto-Apply Threshold**: Control compatibility score requirements
- **Results Limit**: Adjust number of jobs per platform
- **Schedule Frequency**: Modify search intervals

## 📈 Benefits

- **Save 10+ hours weekly** on manual job searching
- **Never miss opportunities** with automated monitoring
- **Professional application tracking** with detailed analytics
- **Personalized cover letters** for every application
- **Instant notifications** for high-match positions
- **Complete audit trail** of all job search activities

## 🚀 Getting Started

1. Import the workflow to your n8n instance
2. Configure API credentials for all job platforms
3. Set up Notion database with provided template structure
4. Create Telegram bot and Google Drive folder
5. Customize job search parameters for your profile
6. Activate workflow and start receiving opportunities!

## 📝 Additional Notes

- Uses placeholder credentials for security (`{{PLACEHOLDER_API_KEY}}`)
- Comprehensive error handling prevents workflow failures  
- Includes detailed setup instructions via sticky notes
- Optimized for Indonesian job market (JobStreet.co.id)
- Easily adaptable for other regions and job types

Perfect for **developers**, **engineers**, and **automation enthusiasts** who want to leverage AI and n8n's power to dominate their job search process! 🚀

## 📊 Basic Information

- **Workflow ID:** 9176
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 4926
- **Downloads:** 492
- **Created:** 2025/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9176)

## 👤 Author

- **Name:** Tegar karunia ilham
- **Username:** @tegarkaruniailham

## 🏷️ Categories

- HR
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×4)
- **merge** 
- **code** 
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **if** 
- **notion** 
- **telegram** (×2)
- **googleDrive** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
