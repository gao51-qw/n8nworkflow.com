# Create emotional stories with Gemini AI: Generate images and Veo3 JSON prompts

> ![Screenshot 20250902 at 3.45.36 PM.png](fileId:2304)

**This n8n template demonstrates how to create an automated emotional story generation system that produces structured video prompts and generates corresponding images using AI. The workflow creates a complete story with 5 scenes featuring a Pakistani character named Yusra, converts them into Veo 3 video generation prompts, and generates images for each scene.**

**Use cases include:**
- Automated story creation for social media content
- Video pre-production with AI-generated storyboards
- Content creation for educational or entertainment purposes
- Multi-scene narrative development with consistent character design

**Good to know:**
- Uses Gemini 2.5 Flash Lite for story generation and prompt conversion
- Uses Gemini 2.0 Flash Exp for image generation
- The image generation model may be geo-restricted in some regions
- Workflow includes automatic Google Drive organization and Google Sheets tracking

**How it works:**
1. **Story Creation**: Gemini AI creates a 5-scene emotional story featuring Yusra, a Pakistani girl aged 20-25 in traditional dress
2. **Folder Organization**: AI generates a unique folder name with timestamp for project organization
3. **Google Sheets Setup**: Creates a new sheet to track all scenes and their processing status
4. **Scene Processing**: Each scene is processed individually with character and action prompts
5. **Veo 3 Prompt Conversion**: Converts natural language scene descriptions into structured JSON format optimized for Veo 3 video generation, including parameters like:
   - Detailed scene descriptions
   - Camera movements and angles
   - Lighting and mood settings
   - Style and quality specifications
   - Aspect ratios and technical parameters
6. **Image Generation**: Uses Gemini's image generation model to create visual representations of each scene
7. **File Management**: Automatically uploads images to Google Drive and organizes them in project folders
8. **Status Tracking**: Updates Google Sheets with processing status and file URLs
9. **Automated Workflow**: Includes conditional logic to handle different processing states and file movements

**How to use:**
1. Execute the workflow manually or set up automated triggers
2. The system will automatically create a new story with 5 scenes
3. Each scene gets processed through the AI pipeline
4. Generated images are organized in Google Drive folders
5. Track progress through the Google Sheets interface
6. The workflow handles all file management and status updates automatically

**Requirements:**
- Gemini API access for both text and image generation
- Google Drive for file storage and organization
- Google Sheets for project tracking and management
- n8n instance with appropriate node access

**Customizing this workflow:**
- Modify the character description in the Story Creator node
- Adjust the number of scenes by changing the story prompt
- Customize the Veo 3 prompt parameters for different video styles
- Add additional AI models or processing steps
- Integrate with other content creation tools
- Modify the folder naming convention or organization structure

**Technical Features:**
- Automated retry logic for failed operations
- Conditional processing based on status flags
- Batch processing for multiple scenes
- Error handling and status tracking
- File organization with timestamp-based naming
- Integration with Google Workspace services

This template is perfect for content creators, educators, or anyone looking to automate story-based content creation with AI assistance.

## 📊 Basic Information

- **Workflow ID:** 8158
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 1476
- **Downloads:** 147
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8158)

## 👤 Author

- **Name:** Muhammad Farooq Iqbal
- **Username:** @mfarooqone

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **if** (×2)
- **googleDrive** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **googleSheets** (×7)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **limit** 
- **splitInBatches** 
- **code** 
- **set** 
- **noOp** 
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
