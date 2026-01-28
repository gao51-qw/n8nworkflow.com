## Overview

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

