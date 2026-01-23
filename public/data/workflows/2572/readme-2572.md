# Cv screening with OpenAI

> ### Video Guide

I prepared a detailed guide that showed the whole process of building a resume analyzer.

[![OPENAI 8.png](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/11.png)](https://youtu.be/TWuI3dOcn0E)

### Who is this for?
This workflow is ideal for recruitment agencies, HR professionals, and hiring managers looking to automate the initial screening of CVs. It is especially useful for organizations handling large volumes of applications and seeking to streamline their recruitment process.

### What problem does this workflow solve?
Manually screening resumes is time-consuming and prone to human error. This workflow automates the process, providing consistent and objective analysis of CVs against job descriptions. It helps filter out unsuitable candidates early, reducing workload and improving the overall efficiency of the recruitment process.

### What this workflow does
This workflow automates the resume screening process using OpenAI for analysis. It provides a matching score, a summary of candidate suitability, and key insights into why the candidate fits (or doesn’t fit) the job. 

1. **Retrieve Resume**: The workflow downloads CVs from a direct link (e.g., Supabase storage or Dropbox).
2. **Extract Data**: Extracts text data from PDF or DOC files for analysis.
3. **Analyze with OpenAI**: Sends the extracted data and job description to OpenAI to:
   - Generate a matching score.
   - Summarize candidate strengths and weaknesses.
   - Provide actionable insights into their suitability for the job.

### Setup

#### Preparation
1. **Create Accounts**:
   - [N8N](https://n8n.partnerlinks.io/2hr10zpkki6a): For workflow automation.
   - [OpenAI](https://openai.com/): For AI-powered CV analysis.
2. **Get CV Link**:
   - Upload CV files to Supabase storage or Dropbox to generate a direct link for processing.
3. **Prepare Artifacts for OpenAI**:
   - **Define Metrics**: Identify the metrics you want from the analysis (e.g., matching percentage, strengths, weaknesses).
   - **Generate JSON Schema**: Use OpenAI to structure responses, ensuring compatibility with your database.
   - **Write a Prompt**: Provide OpenAI with a clear and detailed prompt to ensure accurate analysis.

#### N8N Scenario
1. **Download File**: Fetch the CV using its direct URL.
2. **Extract Data**: Use N8N’s PDF or text extraction nodes to retrieve text from the CV.
3. **Send to OpenAI**:
   - **URL**: POST to OpenAI’s API for analysis.
   - **Parameters**:
     - Include the extracted CV data and job description.
     - Use JSON Schema to structure the response.

### Summary
This workflow provides a seamless, automated solution for CV screening, helping recruitment agencies and HR teams save time while maintaining consistency in candidate evaluation. It enables organizations to focus on the most suitable candidates, improving the overall hiring process.

## 📊 Basic Information

- **Workflow ID:** 2572
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 14798
- **Downloads:** 1479
- **Created:** 2024/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2572)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **extractFromFile** 
- **httpRequest** (×2)
- **manualTrigger** 
- **stickyNote** (×5)
- **set** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
