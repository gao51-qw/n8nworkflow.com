# Transform YouTube videos into interactive MCQ quizzes with Google Forms & Gemini AI

> ## AI-Powered MCQ Quiz Generator from YouTube Videos

Transform any YouTube video into an interactive MCQ quiz automatically! This workflow uses Google Gemini AI to analyze video content and generate comprehensive multiple-choice questions with automatic grading - perfect for educators, trainers, and content creators.

## Who is this For
This workflow is perfect for:
- **Educators** creating quizzes from educational YouTube content
- **Corporate Trainers** developing assessments from training videos
- **Content Creators** engaging their audience with interactive quizzes
- **Students** testing their knowledge on video lectures
- **Online Course Creators** building assessments from video content

## Features
* **AI Video Analysis**: Google Gemini 2.5 Flash analyzes entire YouTube videos (up to 50 minutes)
* **Dynamic Question Generation**: Creates up to 90 MCQ questions with 3 options each
* **Automatic Form Creation**: Generates Google Forms with quiz functionality
* **Smart Grading**: Built-in correct answer identification and scoring
* **Error Handling**: Robust error management with user feedback

## How It Works
1. **User Input via n8n Web Form:**
   - Form Name (Quiz Title)
   - Email Address
   - YouTube Video URL
   - Number of Questions (1-90)

2. **AI Processing Pipeline:**
   - Google Gemini analyzes the YouTube video content
   - AI extracts key concepts and generates relevant questions
   - Structured output parser formats questions into JSON

3. **Google Forms Integration:**
   - Automatically creates a new Google Form
   - Adds all generated questions with multiple choice options
   - Configures quiz settings with correct answers and scoring

4. **Completion & Access:**
   - User receives direct link to the generated quiz
   - Form ready for immediate use or sharing

5. **Video Demo:**
	- [See this youtube Video](https://youtu.be/qHQ62KoRGHc) to explore "how it works".

## Set Up Steps
1. **Import the Workflow**
   - Create a new workflow in n8n
   - Import the JSON file by clicking "three dots" (upper right corner) &gt; "Import from file..."

2. **Configure Google Gemini API**
   - Get your Google AI Studio API key from [Google AI Studio](https://aistudio.google.com)
   - On “HTTP Request to Gemini” node replace the “API_KEY” from url with your API key.
   - Create a "Google Gemini (PaLM) API" credential in n8n
   - Add your API key to the credential
   - Connect the credential to the "Google Gemini Chat Model" node

3. **Set Up Google Forms Integration**
   - Enable Google Forms API in Google Cloud Console
   - Create a "Google OAuth2 API" credential in n8n
   - Authorize the credential with Forms permissions
   - Connect the credential to both HTTP Request nodes (“Create a Google Form” node and “Create MCQ Quizzes” node)

4. **Configure Form Trigger**
   - The workflow includes a built-in form trigger
   - No additional setup needed - the form URL will be generated automatically
   - Customize form fields if needed in the “Input YouTube URL" node

5. **Test the Workflow**
   - Activate the workflow
   - Submit the form to generate a test quiz
   - Verify the Google Form is created successfully

## Pre-requisites
* **Necessary Accounts:**
  1. Google Account (for Forms API access)
  2. Google AI Studio Account (for Gemini API access)
  3. n8n Instance (cloud or self-hosted)

* **API Access:**
  - Google Forms API enabled
  - Google drive API enabled 
  - Google Generative AI API access
  - Valid API keys and OAuth credentials

* **N8N Requirements:**
  - n8n version 1.95.2 or higher
  - LangChain nodes package installed
  - Internet access for API calls

## Customization Guidance
1. **Question Generation Prompts:**
   - Modify the prompt in "Set Prompt and model" node for different question styles
   - Adjust difficulty levels or focus areas
   - Change question format (True/False, Fill-in-blanks, etc.)

2. **Form Customization:**
   - Update form title and description templates
   - Add additional input fields (difficulty level, subject area)
   - Customize success/error messages

3. **Advanced Features You Can Add:**
   - **Email Notifications**: Send quiz links via email
   - **Analytics Integration**: Track quiz performance and completion rates
   - **Multi-language Support**: Generate quizzes in different languages
   - **Question Bank Storage**: Save generated questions to a database
   - **Batch Processing**: Generate multiple quizzes from a YouTube playlist

4. **Error Handling Enhancements:**
   - Add retry logic for API failures
   - Implement fallback question generation
   - Create detailed error logging

## Technical Specifications
- **Video Length**: Up to 50 minutes supported
- **Question Limit**: 1-90 questions per quiz
- **Processing Time**: 2-10 minutes depending on video length
- **Supported Formats**: YouTube videos (public and unlisted)
- **Output Format**: Google Forms with automatic grading

## Limitations & Considerations
- YouTube video must be publicly accessible or unlisted
- Processing time increases with video length and question count
- API rate limits may apply for high-volume usage
- Some complex visual content may not be fully analyzed

**Ready to Transform Videos into Quizzes?**
This workflow streamlines the entire process from video analysis to quiz deployment. Perfect for educators and trainers looking to create engaging assessments from video content quickly and efficiently.


## 📊 Basic Information

- **Workflow ID:** 5631
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1431
- **Downloads:** 143
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5631)

## 👤 Author

- **Name:** Md. Nazmul Islam
- **Username:** @pomegai

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **set** (×2)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitInBatches** 
- **formTrigger** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **form** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
