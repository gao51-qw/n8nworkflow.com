## Overview
HR departments and recruiters spend countless hours manually reviewing resumes, often missing qualified candidates due to time constraints. This workflow automates the entire resume screening process by extracting structured data from resumes in any format (PDF, Word documents, or even photographed/scanned resume images), calculating experience scores, and creating comprehensive candidate profiles ready for your ATS system.

## What You Can Do
This workflow automatically retrieves resumes from Google Drive and uses AI to extract all relevant candidate information including personal details, work experience with dates, education, skills, and certifications. It intelligently handles various resume formats including PDFs, Word documents, and even scanned or photographed resumes using OCR. The workflow calculates total years of experience, tracks skill-specific experience, generates proficiency scores for each skill, and provides an AI-powered assessment of candidate strengths and suitability for different roles.

## Who It's For
Perfect for HR departments processing high volumes of applications, recruitment agencies managing multiple clients, talent acquisition teams seeking to improve candidate quality, and hiring managers who want data-driven insights for decision making. Ideal for organizations that need to maintain consistent evaluation standards across different reviewers and want to reduce time-to-hire while improving candidate match quality.

## The Problem It Solves
Manual resume screening is inefficient and inconsistent. Different reviewers may evaluate the same resume differently, leading to missed opportunities and bias. This workflow standardizes the extraction process, automatically calculates years of experience for each skill, and provides objective scoring metrics to help identify the best candidates faster while reducing human bias in the initial screening process.

## Setup Instructions
1. Configure Google Drive credentials in n8n
2. Install the PDF Vector community node from the n8n marketplace
3. Configure your PDF Vector API credentials
4. Set up your preferred data storage (database or spreadsheet)
5. Customize the skill categories for your industry
6. Configure the scoring algorithm based on your requirements
7. Connect to your existing ATS system if needed

## Key Features
- **Automatic Resume Retrieval**: Pull resumes from Google Drive folders automatically
- **Universal Format Support**: Process PDFs, Word documents, and photographed resumes
- **OCR Capabilities**: Extract text from scanned or photographed documents
- **Experience Calculation**: Automatically compute total and skill-specific experience
- **Proficiency Scoring**: Generate objective skill proficiency ratings
- **AI Assessment**: Get intelligent insights on candidate fit and strengths
- **Multi-Language Support**: Handle resumes in various languages
- **ATS Integration**: Output structured data compatible with major ATS systems

## Customization Options
Define custom skill categories relevant to your industry, adjust scoring weights for different experience types, add specific extraction fields for your organization, implement keyword matching for job requirements, set up automated candidate ranking systems, create role-specific evaluation criteria, and integrate with LinkedIn or other professional networks for enhanced candidate insights.

**Note:** This workflow uses the PDF Vector community node. Make sure to install it from the n8n community nodes collection before using this template.