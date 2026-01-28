# Organizing UI toolbar icons: Apple HIG standards and Gemini AI

> ## Overview

When designing user interfaces, toolbar icons often get overlooked, even though their placement and grouping dramatically impact usability and user flow. This workflow leverages **Gemini AI** to automatically analyze UI screens, classify toolbar icons based on **Apple’s Human Interface Guidelines (HIG)**, and suggest optimal placements.

By combining AI analysis with structured placement logic, this workflow helps designers build more consistent, efficient, and user-friendly interfaces—without spending hours manually arranging icons.

---

## 🚀 Features

* **AI Classification**: Uses Gemini AI to analyze screenshots and classify icons into roles like `.primaryAction`, `.navigation`, `.confirmationAction`, and more.
* **HIG-Based Placement**: Automatically assigns icons to the correct toolbar areas—Leading (Left), Trailing (Right), Center, Bottom, or System-decided.
* **Usage-Aware Reordering**: Reorders icons based on frequency of use so the most relevant actions appear where users expect them.
* **JSON Output**: Delivers structured results for seamless integration into design tools or documentation.

---

## 🔧 Setup Instructions

1. **Install the Workflow**: Import the workflow into your n8n instance.
2. **Configure Input**:

   * Upload a **screenshot** of your UI.
   * Upload a **set of icons** you want to classify and place.
3. **Set Up Gemini AI Node**:

   * Add your Gemini AI API key in the node’s credentials.
4. **Run the Workflow**: Submit the inputs and let the AI classify and assign placements.
5. **Export Results**: Copy the JSON output or connect the workflow to your preferred design/documentation tools.

---

## ⚙️ How It Works

1. **Form Submission** – Capture screenshot + icons.
2. **Gemini AI Agent** – Interprets screen context and classifies each icon.
3. **Placement Logic** – Maps icons to the correct toolbar areas.
4. **Reordering** – Adjusts order based on relevance and HIG standards.
5. **Structured Output** – Produces clean JSON for further use.

---

## 🎨 Customization

* **Change AI Prompts**: Modify the Gemini AI node prompts to reflect your app’s design language.
* **Adjust Placement Rules**: Update logic to follow custom guidelines beyond Apple HIG.
* **Integrate with Design Tools**: Send the JSON output directly to tools like Figma, Sketch, or internal systems.

---

## 💡 Why This Matters

* **Consistency**: Ensures toolbar designs always follow Apple’s HIG.
* **Efficiency**: Saves designers hours of manual icon placement.
* **Scalability**: Works across multiple screens, flows, and apps.
* **AI-Assisted Design**: Augments designer decisions with structured insights instead of replacing them.



## 📊 Basic Information

- **Workflow ID:** 8206
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 62
- **Downloads:** 6
- **Created:** 2025/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8206)

## 👤 Author

- **Name:** Zeinabsadat Mousavi Amin
- **Username:** @zeinabdesigner

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
