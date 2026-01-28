### 📝 Overview

This workflow leverages Google Gemini 2.0 Flash multimodal AI to automatically generate detailed descriptions of video content from any public URL. It streamlines video understanding, making it ideal for content cataloging, accessibility, and content moderation.

### 💡 Use Cases

- ♿ **Accessibility**: Automatically generate detailed video descriptions for visually impaired users.
- 🛡️ **Content Moderation**: Detect inappropriate or off-brand material without manual watching.
- 🗂️ **Media Cataloging**: Enrich your media library with automatically extracted metadata.
- 📈 **Marketing & Branding**: Gain fast insights into key elements, tone, and branding in video content.

### ⚙️ Setup Instructions

1. **🔑 Get a Gemini API Key**
   - Register at [ai.google.dev](https://ai.google.dev/) and create an API key.
   - **Before running the workflow, set your Gemini API key as an environment variable named `GeminiKey`** for secure access within the workflow.
   - In the `Set Input` node, reference this environment variable instead of hardcoding the key.

2. **🌐 Configure Video URL**
   - Replace the sample URL in the `Set Input` node with your desired public video URL.
   - Ensure the video is directly accessible (no login or special permissions required).

3. **📝 Optional: Customize the Analysis**
   - Edit the prompt in the `Analyze video Gemini` node to focus on the most relevant video details for your use case (e.g., branding, key actions, visual elements).

4. **🔒 Security Tip**
   - Use n8n's credentials manager or environment variables (like `GeminiKey`) to store your API key securely.
   - Avoid hardcoding API keys directly in workflow nodes, especially in production environments.

### 🔄 How It Works

1. 📥 **Download** the video from the provided URL.
2. ☁️ **Upload** the video to Gemini’s server for processing.
3. ⏳ **Wait** for Gemini to complete processing.
4. 🤖 **Analyze** the video with Gemini AI using your customized prompt.
5. 📄 **Output** a comprehensive description of the video as `videoDescription`.

### ⚡ Technical Details

- Uses HTTP Request nodes to interact with Gemini API endpoints.
- Handles file download, upload, status checking, and result retrieval.
- Customizable Gemini AI parameters for fine-tuned response.
- Main output: `videoDescription` (detailed text describing video content).

### 🚀 Quickstart

1. Set your Gemini API key as the `GeminiKey` environment variable and configure your video URL in the workflow.
2. Execute the workflow.
3. Retrieve your rich, AI-generated video description for downstream use such as automation, tagging, or reporting.
