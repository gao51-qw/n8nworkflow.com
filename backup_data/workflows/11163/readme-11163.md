# Generate 100+ ad variations from one image with Fal.AI Nano Banana and GPT-5

> ## Scale Your Creative Strategy: 100+ Creative Ads from 1 Image using Fal.AI, Nano Banana model and GPT-5.1

This workflow turns a single reference image into up to 100 high-performing ad variations using **Fal.AI's Nano Banana** model and **GPT-5.1**. Simply upload your inspiration to a form, and watch as unique, campaign-ready images appear in your Google Drive.

### Why use this?
*   **Scale Instantly:** Turn one idea into a full campaign without manual design work.
*   **Smart Variations:** Uses GPT-5.1 to analyze your reference and rewrite prompts based on proven creative recipes (Metaphors, Pointers, Comparisons).
*   **Cost Effective:** Generates 100 variations for approximately **$4.60** (vs. hundreds of dollars with manual design).

### How does it work?
1.  **You submit the form** with your reference image, company name, and selected "Creative Recipe."
2.  **GPT-5.1 analyzes your image** deeply ("Describe the image extremely comprehensively...").
3.  **It rewrites the prompt** into multiple unique variations based on your chosen strategy (e.g., "The Metaphor Bake").
4.  **Fal.AI generates the images** using the fast and efficient Nano Banana model.
5.  **The results are saved** directly to your Google Drive output folder.

### What do you need?
*   **Google Drive Credentials:** To upload your reference and save the results ([Guide](https://docs.n8n.io/integrations/builtin/credentials/google/)).
*   **OpenAI API Key:** For GPT-5.1 analysis and prompt engineering.
*   **Fal.AI API Key:** For generating the images (ensure you have credits).
*   **A Google Drive Folder:** One for inputs and one for outputs.

### 💰 Estimated Costs
*   **Fal.AI:** ~$4.00 for 100 images ($0.04/image).
*   **GPT-5.1:** ~$0.60 for 100 descriptions (Input: $1.25/1M tokens, Output: $10.00/1M tokens).
*   **Total:** ~$4.60 per 100-ad campaign.

### Important: The Prompt Strategy
This automation doesn't just copy your image. It uses a specific instruction to **"Describe the image extremely comprehensively. don't leave anything behind"**. This ensures GPT-5.1 captures every visual detail—lighting, composition, and mood—before rewriting it into new creative angles.

That’s it! Just fill the form and let the automation build your ad campaign.

If you have any questions, just contact me in X **[@maxrojasdelgado](https://x.com/maxrojasdelgado)**.


## 📊 Basic Information

- **Workflow ID:** 11163
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 695
- **Downloads:** 69
- **Created:** 2025/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11163)

## 👤 Author

- **Name:** Maximiliano Rojas-Delgado
- **Username:** @maxr

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **stickyNote** (×8)
- **set** (×2)
- **httpRequest** (×4)
- **splitInBatches** 
- **if** 
- **extractFromFile** 
- **googleDrive** (×3)
- **wait** 
- **formTrigger** 
- **splitOut** 
- **merge** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
