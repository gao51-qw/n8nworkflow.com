This template integrates OpenAI's image generation and editing endpoints via the GPT-Image-1 model to visually create and manipulate images based on prompts. It features base64 conversion, binary handling, and prompt chaining.

Perfect for marketing, design, product visuals and creative workflows.

**🛠️ Requirements**
OpenAI account with access to gpt-image-1(probably you need organizations verifications for access to that model)

OpenAI API credentials configured in n8n

A self-hosted or cloud n8n instance

Basic familiarity with the n8n UI (no programming required)

**🔧 Step-by-step Instructions**

Step 1: Manual Trigger
Starts the workflow on click. Ideal for testing the generation and edit logic.

Step 2: Generate Image
The Create image call node sends a prompt to OpenAI and returns a base64 image.

**Example prompt:**

A cyberpunk city at night with flying cars and neon lights

**Step 3: Convert to Binary**
The base64 image is converted into a usable binary PNG file with the Convert json binary to File node.

**Step 4: Edit the Image**
The binary file is passed to OpenAI’s /images/edits endpoint. A new prompt applies changes to the image.

**Example:**

Add a glowing robot in the foreground with a neon sword

✅ Supports model: gpt-image-1
⚠️ Requires binary file (not base64)

**Step 5: Final Conversion**
Converts the final edited image from base64 to file so it can be downloaded or used in other nodes.

**🎯 Real-World Use Cases**
🎨 Artists & Creators: concept art and illustration variations

🛍️ E-commerce: auto-generate product mockups

📰 Marketing: create eye-catching blog or social visuals

**💡 Bonus Ideas**
Add a Telegram or Slack node to generate or edit images via chat

Use a Webhook to feed prompts from a form or frontend

Add a mask to restrict edits to specific areas (e.g., background only)


