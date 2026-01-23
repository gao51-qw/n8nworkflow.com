# Create professional image watermarks with JSONCut API

> Example generated with this workflow:
![imagecmg9sbi0q0020prjy8sh10blf.png](fileId:2756)

Simply upload a image and a watermark file, and the workflow will automatically combine them into a professional watermarked image.

Use cases include adding logos to content, branding product photos, or protecting images with copyright marks.

## Good to know

- Completely free solution with no ongoing costs or subscriptions
- Processing typically takes 5-15 seconds depending on image size
- The workflow uses a polling mechanism to check job completion every 3 seconds
- Supports standard image formats (PNG, JPG, etc.)
- No credit card required to get started

## How it works

1. The Form Trigger creates a user-friendly upload interface for two files: main image and watermark
2. Both images are uploaded simultaneously to the API's file storage via parallel HTTP requests
3. The uploaded file URLs are aggregated and used to create an image composition job
4. The workflow polls the API every 3 seconds to check job completion status
5. Once completed, the final watermarked image is downloaded and returned as a file download

The watermark is automatically positioned in the bottom-right corner with 50% opacity, but this can be easily customized.

## How to use

The form trigger provides a clean interface, but you can replace this with other triggers like webhooks or manual triggers if needed. The workflow handles all file processing automatically and returns the result as a downloadable file.

## Requirements

- Free account at [jsoncut.com](https://jsoncut.com)
- API key with full access (generated at [app.jsoncut.com](https://app.jsoncut.com))
- HTTP Header Auth credential configured in n8n with header name `x-api-key`

## Setup steps

1. Sign up for a free account at [jsoncut.com](https://jsoncut.com)
2. Navigate to your dashboard at [app.jsoncut.com](https://app.jsoncut.com) → API Keys and create a new key with full access

![dashboardapikey.png](fileId:2758)

3. In n8n, create an HTTP Header Auth credential named "JsonCut API Key"
4. Set the header name to `x-api-key` and the value to your API key

![n8nauth.png](fileId:2757)

5. Apply this credential to all HTTP Request nodes in the workflow

## Customising this workflow

The watermark positioning, size, and opacity can be easily adjusted by modifying the JSON body in the "Create Job" node. You can change:
- Position coordinates (x, y values from 0 to 1)
- Watermark dimensions (width, height in pixels)  
- Transparency (opacity from 0.1 to 1.0)
- Output image dimensions
- Fit options (cover, contain, fill)

For more advanced image generation examples and configuration options, check out the [documentation](https://docs.jsoncut.com) and [image generation examples](https://docs.jsoncut.com/docs/image-generation/examples).

For bulk processing, you could extend this workflow to handle multiple images or integrate it with cloud storage/database services.

## 📊 Basic Information

- **Workflow ID:** 9204
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 303
- **Downloads:** 30
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9204)

## 👤 Author

- **Name:** 8Automator
- **Username:** @kesim0

## 🏷️ Categories

- Content Creation
- File Management

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×5)
- **merge** 
- **wait** 
- **if** (×2)
- **stopAndError** 
- **aggregate** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
