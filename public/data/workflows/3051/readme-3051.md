# Effortless job hunting: Let this automation find your next role

> # Find Job Postings from LinkedIn, Indeed, and Glassdoor and Save Them to Google Sheets Using AI

## Overview
Effortlessly discover and apply to jobs tailored to your profile—AI handles the search, you handle the interviews.

Say goodbye to endless job board scrolling. This automation leverages AI to analyze your resume, identify your skills, experience, and more, to match you with the most relevant job opportunities. It sources job postings from LinkedIn, Indeed, Glassdoor, ZipRecruiter, Monster, and other public job sites on the web. With seamless integration and automatic organization of results, you can focus on applying rather than searching.

## Key Features

### **Intelligent Resume Parsing**
- Extracts key information from your PDF resume using AI.
- Identifies skills, experience, education, and job preferences.

### **Targeted Job Matching**
- Uses the parsed resume data to search for jobs that align with your profile.
- Ensures relevance by analyzing job descriptions for matching criteria.

### **Automated Data Organization**
- Compiles job listings into a structured Google Spreadsheet.
- Eliminates the need for manual data entry, saving valuable time.

### **Easy Access and Review**
- Stores results in a familiar Google Sheets format for easy tracking.
- Allows for filtering and sorting to prioritize applications.

## **Setup Instructions**

### **Prerequisites**
- A free API key for the job search service.
- Google Drive and Google Sheets accounts.
- An updated resume in PDF format.

### **Step 1: Connect Your Resume Parsing AI**
1. Upload your PDF resume to Google Drive.
2. Configure the AI parser node in n8n to extract relevant information.
3. Map the extracted fields (e.g., skills, job title, experience) for job searching.

### **Step 2: Automate the Job Search**
1. Use the extracted data to perform a job search on LinkedIn, Indeed, Glassdoor, and other supported job sites.
2. Retrieve job postings based on relevant keywords and location preferences.

### **Step 3: Save Job Listings to Google Sheets**
1. Create a new Google Sheet to store job listings.
2. Set up the automation to write job details (e.g., title, company, location, link) into the sheet.
3. Format the sheet for better readability and tracking.

### **Step 4: Review and Apply to Jobs**
1. Open your Google Sheet to view job matches.
2. Click on the links to apply directly on the respective job sites.
3. Update the status of each job application as you progress.

## **Why Use This Automation?**
- **Saves Time**: Automates job searching and listing compilation.
- **Enhances Efficiency**: Eliminates manual scrolling and data entry.
- **Improves Organization**: Keeps all job opportunities in a structured format.
- **Optimizes Your Job Hunt**: Increases chances of landing the perfect role.

Designed specifically for job seekers aiming to optimize their search process, this automation integrates with Google Drive and Sheets, streamlining your job hunt and enhancing your chances of finding the right opportunity. Get started today and accelerate your career growth!

## 📊 Basic Information

- **Workflow ID:** 3051
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 11493
- **Downloads:** 1149
- **Created:** 2025/3/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3051)

## 👤 Author

- **Name:** Matt F.
- **Username:** @lemolex

## 🏷️ Categories

- Personal Productivity
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **readPDF** 
- **googleDrive** 
- **splitOut** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 
- **googleSheets** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
