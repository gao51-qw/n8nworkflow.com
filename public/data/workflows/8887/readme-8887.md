# Generating vintage Polaroid style photos with Gemini AI

> ## Overview
This workflow uses the Defapi API with Google's **Gemini AI** to transform digital photos into authentic Polaroid-style vintage photographs. Upload your photos, provide a creative prompt, and get AI-generated vintage effects with that distinctive instant camera charm.

**Input:** Digital photos + creative prompt + API key  
**Output:** Polaroid-style vintage photographs

The system provides a simple form interface where users submit their images, prompt, and API key. It automatically processes requests through Defapi API, monitors generation status, and delivers the final vintage photo output. Ideal for photographers, content creators, and social media enthusiasts looking to add vintage charm to their digital photos.


## Prerequisites
- A Defapi account and API key: Sign up at [Defapi.org](https://defapi.org/model/google/gemini-2.5-flash-image)
- An active n8n instance (cloud or self-hosted) with HTTP Request and form submission capabilities
- Digital photos for transformation (well-lit photos work best)
- Basic knowledge of AI prompts for vintage photo generation

**Example prompt:** Take a picture with a Polaroid camera. The photo should exhibit rich saturation and vintage color cast, with soft tones, low contrast, and vignetting. The texture features distinct film grain. Do not change the faces. Replace the background behind the two people with a white curtain. Make them close to each other with clear faces and normal skin color.

## Setup Instructions
1. **Obtain API Key**: Register at Defapi.org and generate your API key. Store it securely.
2. **Configure the Form**: Set up the "Upload 2 Images" form trigger with: Image 01 & Image 02 (file uploads), API Key (text field), and Prompt (text field).
3. **Test the Workflow**:
   - Click "Execute Workflow" in n8n
   - Access the form URL, upload two photos, enter your prompt, and provide your API key
   - The workflow processes images, sends the request to Defapi API, waits 10 seconds, then polls until generation is complete
4. **Handle Outputs**: The final node displays the generated image URL for download or sharing.

## Workflow Structure
The workflow consists of the following nodes:
1. **Upload 2 Images** (Form Trigger) - Collects user input: two image files, API key, and prompt
2. **Convert to JSON** (Code Node) - Converts uploaded images to base64 and formats data
3. **Send Image Generation Request to Defapi.org API** (HTTP Request) - Submits generation request
4. **Wait for Image Processing Completion** (Wait Node) - Waits 10 seconds before checking status
5. **Obtain the generated status** (HTTP Request) - Polls API for completion status
6. **Check if Image Generation is Complete** (IF Node) - Checks if status equals 'success'
7. **Format and Display Image Results** (Set Node) - Formats final image URL output

## Technical Details
- **API Endpoint**: `https://api.defapi.org/api/image/gen` (POST request)
- **Model Used**: `google/gemini` (**Gemini AI**)
- **Status Check Endpoint**: `https://api.defapi.org/api/task/query` (GET request)
- **Wait Time**: 10 seconds between status checks
- **Image Processing**: Uploaded images are converted to base64 format for API submission
- **Authentication**: Bearer token authentication using the provided API key
- **Specialized For**: Polaroid-style vintage photography and instant camera effects

## Customization Tips
- **Enhance Prompts**: Include specifics like vintage color cast, film grain texture, vignetting, lighting conditions, and atmosphere to improve AI photo quality. Specify desired saturation levels and contrast adjustments.
- **Photo Quality**: Use well-lit, clearly exposed photos for best results. The AI can simulate flash effects and vintage lighting, but quality input produces better output. Note that generated photos may sometimes be unclear or have incorrect skin tones - try multiple generations to achieve optimal results.


## 📊 Basic Information

- **Workflow ID:** 8887
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 249
- **Downloads:** 24
- **Created:** 2025/9/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8887)

## 👤 Author

- **Name:** panyanyany
- **Username:** @panyanyany

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **httpRequest** (×2)
- **wait** 
- **if** 
- **set** 
- **code** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
