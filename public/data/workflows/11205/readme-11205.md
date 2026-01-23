# Generate marketing ad banners with LINE, Gemini, and Nano Banana Pro

> ## About This Template
This workflow creates high-quality, text-rich advertising banners from simple LINE messages. 

It combines **Google Gemini** (for marketing-focused prompt engineering) and **Nano Banana Pro** (accessed via Kie.ai API) to generate images with superior text rendering capabilities. It also handles the asynchronous API polling required for high-quality image generation.

## How It Works
1.  **Input:** Users send a banner concept via LINE (e.g., "Coffee brand, morning vibe").
2.  **Prompt Engineering:** Gemini optimizes the request into a detailed prompt, specifying lighting, composition, and Japanese catch-copy placement.
3.  **Async Generation:** The workflow submits a job to Nano Banana Pro (Kie API) and intelligently waits/polls until the image is ready.
4.  **Hosting:** The final image is downloaded and uploaded to a public AWS S3 bucket.
5.  **Delivery:** The image is pushed back to the user on LINE.

## Who It’s For
* Marketing teams creating A/B test assets.
* Japanese market advertisers needing accurate text rendering.
* Developers looking for an example of **Async API Polling** patterns in n8n.

## Requirements
* **n8n** (Cloud or Self-hosted).
* **Kie.ai API Key** (for Nano Banana Pro model).
* **Google Gemini API Key**.
* **AWS S3 Bucket** (Public access enabled).
* **LINE Official Account** (Messaging API).

## Setup Steps
1.  **Credentials:** Configure the "Header Auth" credential for the Kie.ai nodes (Header: `Authorization`, Value: `Bearer YOUR_API_KEY`).
2.  **AWS:** Ensure your S3 bucket allows public read access so LINE can display the image.
3.  **Webhook:** Add the production webhook URL to your LINE Developers console.

## 📊 Basic Information

- **Workflow ID:** 11205
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 4573
- **Downloads:** 457
- **Created:** 2025/11/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11205)

## 👤 Author

- **Name:** Masaki Go
- **Username:** @pippi

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×4)
- **httpRequest** (×4)
- **webhook** 
- **code** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** 
- **wait** (×2)
- **awsS3** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
