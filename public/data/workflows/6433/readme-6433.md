# Generate LinkedIn posts from Wikipedia with GPT-4 summaries and Ideogram images

> # Wikipedia to LinkedIn AI Content Poster with Image via Bright Data

## 📋 Overview

**Workflow Description:** Automatically scrapes Wikipedia articles, generates AI-powered LinkedIn summaries with custom images, and posts professional content to LinkedIn using Bright Data extraction and intelligent content optimization.

---

## 🚀 How It Works

The workflow follows these simple steps:

1. **Article Input:** User submits a Wikipedia article name through a simple form interface
2. **Data Extraction:** Bright Data scrapes the Wikipedia article content including title and full text
3. **AI Summarization:** Advanced AI models (OpenAI GPT-4 or Claude) create professional LinkedIn-optimized summaries under 2000 characters
4. **Image Generation:** Ideogram AI creates relevant visual content based on the article summary
5. **LinkedIn Publishing:** Automatically posts the summary with generated image to your LinkedIn profile
6. **URL Generation:** Provides a shareable LinkedIn post URL for easy access and sharing

---

## ⚡ Setup Requirements

**Estimated Setup Time: 10-15 minutes**

### Prerequisites
- n8n instance (self-hosted or cloud)
- Bright Data account with Wikipedia dataset access
- OpenAI API account (for GPT-4 access)
- Anthropic API account (for Claude access - optional)
- Ideogram AI account (for image generation)
- LinkedIn account with API access

---

## 🔧 Configuration Steps

### Step 1: Import Workflow
1. Copy the provided JSON workflow file
2. In n8n: Navigate to `Workflows → + Add workflow → Import from JSON`
3. Paste the JSON content and click **Import**
4. Save the workflow with a descriptive name

### Step 2: Configure API Credentials

#### 🌐 Bright Data Setup
- Go to `Credentials → + Add credential → Bright Data API`
- Enter your Bright Data API token
- Replace `BRIGHT_DATA_API_KEY` in all HTTP request nodes
- Test the connection to ensure access

#### 🤖 OpenAI Setup
- Configure OpenAI credentials in n8n
- Ensure GPT-4 model access
- Link credentials to the "OpenAI Chat Model" node
- Test API connectivity

#### 🎨 Ideogram AI Setup
- Obtain Ideogram AI API key
- Replace `IDEOGRAM_API_KEY` in the "Image Generate" node
- Configure image generation parameters
- Test image generation functionality

#### 💼 LinkedIn Setup
- Set up LinkedIn OAuth2 credentials in n8n
- Replace `LINKEDIN_PROFILE_ID` with your profile ID
- Configure posting permissions
- Test posting functionality

### Step 3: Configure Workflow Parameters

**Update Node Settings:**
- **Form Trigger:** Customize the form title and field labels as needed
- **AI Agent:** Adjust the system message for different content styles
- **Image Generate:** Modify image resolution and rendering speed settings
- **LinkedIn Post:** Configure additional fields like hashtags or mentions

### Step 4: Test the Workflow

**Testing Recommendations:**
- Start with a simple Wikipedia article (e.g., "Artificial Intelligence")
- Monitor each node execution for errors
- Verify the generated summary quality
- Check image generation and LinkedIn posting
- Confirm the final LinkedIn URL generation

---

## 🎯 Usage Instructions

### Running the Workflow
1. **Access the Form:** Use the generated webhook URL to access the submission form
2. **Enter Article Name:** Type the exact Wikipedia article title you want to process
3. **Submit Request:** Click submit to start the automated process
4. **Monitor Progress:** Check the n8n execution log for real-time progress
5. **View Results:** The workflow will return a LinkedIn post URL upon completion

### Expected Output

#### 📝 Content Summary
- Professional LinkedIn-optimized text
- Under 2000 characters
- Engaging and informative tone
- Bullet points for readability

#### 🖼️ Generated Image
- High-quality AI-generated visual
- 1280x704 resolution
- Relevant to article content
- Professional appearance

#### 🔗 LinkedIn Post
- Published to your LinkedIn profile
- Includes both text and image
- Shareable public URL
- Professional formatting

---

## 🛠️ Customization Options

### Content Personalization
- **AI Prompts:** Modify the system message in the AI Agent node to change writing style
- **Character Limits:** Adjust summary length requirements
- **Tone Settings:** Change from professional to casual or technical
- **Hashtag Integration:** Add relevant hashtags to LinkedIn posts

### Visual Customization
- **Image Style:** Modify Ideogram prompts for different visual styles
- **Resolution:** Change image dimensions based on LinkedIn requirements
- **Rendering Speed:** Balance between speed and quality
- **Brand Elements:** Include company logos or brand colors

---

## 🔍 Troubleshooting

### Common Issues & Solutions

#### ⚠️ Bright Data Connection Issues
- Verify API key is correctly configured
- Check dataset access permissions
- Ensure sufficient API credits
- Validate Wikipedia article exists

#### 🤖 AI Processing Errors
- Check OpenAI API quotas and limits
- Verify model access permissions
- Review input text length and format
- Test with simpler article content

#### 🖼️ Image Generation Failures
- Validate Ideogram API key
- Check image prompt content
- Verify API usage limits
- Test with shorter prompts

#### 💼 LinkedIn Posting Issues
- Re-authenticate LinkedIn OAuth
- Check posting permissions
- Verify profile ID configuration
- Test with shorter content

---

## ⚡ Performance & Limitations

### Expected Processing Times
- **Wikipedia Scraping:** 30-60 seconds
- **AI Summarization:** 15-30 seconds
- **Image Generation:** 45-90 seconds
- **LinkedIn Posting:** 10-15 seconds
- **Total Workflow:** 2-4 minutes per article

### Usage Recommendations
**Best Practices:**
- Use well-known Wikipedia articles for better results
- Monitor API usage across all services
- Test content quality before bulk processing
- Respect LinkedIn posting frequency limits
- Keep backup of successful configurations

---

## 📊 Use Cases

### 📚 Educational Content
Create engaging educational posts from Wikipedia articles on science, history, or technology topics.

### 🏢 Thought Leadership
Transform complex topics into accessible LinkedIn content to establish industry expertise.

### 📰 Content Marketing
Generate regular, informative posts to maintain active LinkedIn presence with minimal effort.

### 🔬 Research Sharing
Quickly summarize and share research findings or scientific discoveries with your network.

---

## 🎉 Conclusion

This workflow provides a powerful, automated solution for creating professional LinkedIn content from Wikipedia articles. By combining web scraping, AI summarization, image generation, and social media posting, you can maintain an active and engaging LinkedIn presence with minimal manual effort.

The workflow is designed to be flexible and customizable, allowing you to adapt the content style, visual elements, and posting frequency to match your professional brand and audience preferences.


For any questions or support, please contact:  
[info@incrementors.com](mailto:info@incrementors.com)  
or fill out this form: [https://www.incrementors.com/contact-us/](https://www.incrementors.com/contact-us/)


## 📊 Basic Information

- **Workflow ID:** 6433
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 517
- **Downloads:** 51
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6433)

## 👤 Author

- **Name:** Incrementors
- **Username:** @incrementors

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×5)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.outputParserAutofixing** 
- **linkedIn** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **code** 
- **wait** 
- **formTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
