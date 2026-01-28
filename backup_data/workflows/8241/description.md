## Weekly Meal Planner with Auto Grocery Lists using Fillout, FluentC AI & WhatsApp 🍽️  
### *Automate Your Weekly Family Meal Planning with AI and WhatsApp*

Say goodbye to mealtime stress. This workflow automates your entire weekly meal planning process — from family input to a WhatsApp-sent grocery list — using AI and no-code tools.

Perfect for:
- Homemakers managing household routines
- Solopreneurs balancing business and family
- Parents who want to reduce decision fatigue

The workflow:
1. 🗳️ Collects meal preferences via a **Fillout form**
2. 🤖 Uses **FluentC AI** to generate a 5-day dinner plan and categorized grocery list
3. 🛒 Checks prices using **Scrappey** (Walmart, Target, etc.)
4. 📄 Generates a printable **PDF grocery list** with **PDF4me**
5. 📲 Sends the list to your spouse or family group via **WhatsApp** using **WhatsAble**

Fully automated, beginner-friendly, and designed to bring calm to your home.

---

## Setup Requirements

Before using this workflow, ensure you have the following accounts and tools:

| Service | Purpose | Free Tier Available? |
|--------|--------|----------------------|
| [Fillout](https://fillout.com) | Collect family meal preferences | Yes |
| [FluentC AI](https://fluentc.ai) or OpenAI | AI-powered meal and grocery list generation | Yes (if using OpenAI) |
| [Scrappey](https://scrappey.com) | Scrape real-time prices from stores | Yes (150 free scrapes) |
| [PDF4me](https://pdf4me.com) | Generate clean, printable PDFs | Yes |
| [WhatsAble](https://whatsable.com) | Send WhatsApp messages via API | Yes |
| [n8n](https://n8n.io) | Orchestrate the automation | Yes |

💡 You’ll need API keys for: FluentC, Scrappey, PDF4me, WhatsAble  
🔐 All credentials should be stored securely in n8n

---

## Step-by-Step Setup Instructions

### 1. Create Your Fillout Form
Your form must include the following **fields** to work with this workflow:

| Field Name | Type | Example |
|----------|------|--------|
| `Meal Choices` | Multiple Choice or Long Text | “Pasta, Tacos, Stir Fry” |
| `Dietary Notes` | Short Text (Optional) | “No dairy, vegetarian” |
| `Preferred Days` | Checkbox | Mon, Tue, Wed |
| `Submit Timestamp` | Hidden Field | Auto-generated |

📌 **Tip**: Name your form “Weekly Family Meal Poll” and set it to auto-save responses.

🔗 After publishing, copy the **form URL** and add it to the Fillout node in n8n.

---

### 2. Import the Workflow into n8n
1. Go to your n8n dashboard.
2. Click **Workflows &gt; Create from JSON**.
3. Paste the provided JSON.
4. Click **Import**.

---

### 3. Set Up Credentials
For each service, go to **Credentials &gt; Add New** and enter your API key:
- **FluentC AI** (or OpenAI)
- **Scrappey**
- **PDF4me**
- **WhatsAble**
- **Fillout**

🔐 Never hardcode keys — always use n8n’s credential system.

---

### 4. Configure the AI Prompt
In the **FluentC: Generate Meal Plan** node:
- Edit the prompt to include dietary needs and output structure:
  ```text
  Based on these meal preferences: {{ $json["Meal Choices"] }}.
  Create a 5-day dinner plan (Mon-Fri) with simple, family-friendly recipes. Then generate a categorized grocery list. Consider dietary notes: {{ $json["Dietary Notes"] }}.
  Use a warm, friendly tone.

  Output format:
  {
    "mealPlan": "Monday: Creamy Garlic Pasta\nTuesday: Black Bean Tacos...",
    "groceryList": "Produce: Bell peppers, onions, spinach\nPantry: Canned black beans, pasta, olive oil..."
  }