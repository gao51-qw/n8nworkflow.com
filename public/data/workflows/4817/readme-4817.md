# Compose/Stitch separate images together using n8n & Gemini AI image editing

> ### This n8n template demonstrates how to use AI to compose or "stitch" separate images together to generate a new image which retains the source assets and consistent style.

Use cases are many: Try producing storyboard scenes with consistent characters, marketing material with existing product assets or trying on different articles on fashion!

**Good to know**
* At time of writing, each image generated will cost $0.039 USD. See Gemini Pricing for updated info.
* The model used in this workflow is geo-restricted! If it says model not found, it may not be available in your country or region.

### How it works
* We'll import our required assets via our Cloud storage using the HTTP node.
* The images are then converted to base64 strings and aggregated so we can use it for our AI model.
* Gemini's image generation model is used which takes all 3 images and a prompt that we define. Our prompt instructs the model on how to compose the final image.
* Gemini generates a new image but uses the original 3 assets to do so. The consistency to the source images is very high and shows little signs of hallucinations!
* Gemini's output is base64 so we use a "Convert to file" node to convert the data to binary.
* The final binary image is then uploaded to Google Drive to complete the demonstration.

### How to use
* The manual trigger node is used as an example but feel free to replace this with other triggers such as webhook or even a form.
* Technically, you should be able to compose even more images but of course, the generation will take longer and cost more.

### Requirements
* Gemini account for LLM and Image generation
* Google drive for upload

### Customising this workflow
* AI Image editing can be used for many use-cases. Try a popular use-case such as virtual try-on for fashion or applying branding on editing image assets.

## 📊 Basic Information

- **Workflow ID:** 4817
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 3810
- **Downloads:** 381
- **Created:** 2025/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4817)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **googleDrive** 
- **stickyNote** (×9)
- **convertToFile** 
- **extractFromFile** 
- **merge** 
- **aggregate** 
- **httpRequest** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
