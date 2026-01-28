# Generate logos and images with consistent visual styles using Imagen 3.0

> ### This n8n template allows you to use AI to generate logos or images which mimic visual styles of other logos or images. The model used to generate the images is Google's Imagen 3.0.

With this template, users will be able to automate design and marketing tasks such as creating variants of existing designs, remixing existing assets to validate different styles and explore a range of designs which would have been otherwise too expensive and time-consming previously.

![banner](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/vu8uyt2w5qheyetpqj7q)

### How it works
* A form trigger is used to capture the source image to reference styles from and a prompt for the target image to generate.
* The source image is passed to Gemini 2.0 to be analysed and its visual style and tone extracted as a detailed description.
* This visual style description is then combined with the user's initial target image prompt. This final prompt is given to Imagen 3.0 to generate the images.
* A quick webpage is put together with the generated images to present back to the user.
* If the user provided an email address, a copy of this HTML page will be sent.

### How to use
* Ensure the workflow is live to share the form publicly.
* The source image must be accessible to your n8n instance - either a public image of the internet or within your network.
* For best results, select a source image which has strong visual identity as these will allow the LLM to better describe it.
* For your prompt, refer to the imagen prompt guide found here: [https://ai.google.dev/gemini-api/docs/image-generation#imagen-prompt-guide](https://ai.google.dev/gemini-api/docs/image-generation#imagen-prompt-guide)

### Requirements
* Gemini for LLM and Imagen model.
* Cloudinary for image CDN.
* Gmail for email sending.

### Customising this workflow
* Feel free to swap any of these out for tools and services you prefer.
* Want to fully automate? Switch the form trigger for a webhook trigger!


## 📊 Basic Information

- **Workflow ID:** 3954
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 23173
- **Downloads:** 2317
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3954)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **splitOut** 
- **httpRequest** (×4)
- **set** 
- **formTrigger** 
- **if** (×2)
- **form** (×2)
- **stickyNote** (×5)
- **convertToFile** (×2)
- **html** 
- **gmail** 
- **extractFromFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
