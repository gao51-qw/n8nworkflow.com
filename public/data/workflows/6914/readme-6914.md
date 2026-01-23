# Creative design agency simulation with OpenAI O3 and GPT-4.1-mini multi-agent

> # Creative Design Agency Simulation with OpenAI O3 and GPT-4.1-mini Multi-Agent Team

This n8n workflow simulates a **full-service creative agency powered by AI**. At the center is a **Creative Director Agent (O3 model)** who takes client requests, plans the creative direction, and delegates work to a **specialized design team**. Each specialist runs on **GPT-4.1-mini**, keeping execution **fast and cost-efficient**.

---

## 🟢 Section 1 – Entry & Strategic Leadership

**Nodes:**

* 💬 **When chat message received** → Entry point, listens for design briefs.
* 🎨 **Creative Director Agent (O3)** → The “agency head” who interprets requirements and decides which specialists to involve.
* 💡 **Think Tool** → Helps the Director brainstorm, evaluate alternatives, and refine direction.
* 🧠 **OpenAI Chat Model Director (O3)** → Strategic reasoning engine for the Director.

✅ **Benefit for beginners:** Think of this as the **project manager’s desk** — you submit a design request, and the Director figures out how to make it happen.

---

## ✍️ Section 2 – Core Creative Specialists

**Nodes:**

* 🖼️ **Graphic Designer** → Logos, visual identity, print, packaging.
* 📱 **UI/UX Designer** → Wireframes, prototypes, interaction design.
* 🎯 **Brand Strategist** → Market positioning, brand guidelines, competitive research.
* 📝 **Creative Copywriter** → Taglines, messaging, campaign copy.

Each agent is powered by **GPT-4.1-mini**.

✅ **Benefit for beginners:** This section is your **creative studio team** — they craft visuals, design user experiences, and write compelling words.

---

## 🚀 Section 3 – Extended Design & Motion Team

**Nodes:**

* 🎬 **Motion Graphics Designer** → Animations, promo videos, explainer graphics.
* 🌐 **Web Designer** → Websites, responsive layouts, accessibility improvements.
* 🖌️ **OpenAI Chat Model Agents (GPT-4.1-mini)** → Back each specialist with creative power.

✅ **Benefit for beginners:** This section brings **motion and web** into the mix, ensuring your creative package isn’t static — it moves, animates, and lives online.

---

## 📊 Summary Table

| Section             | Key Roles                         | Model        | Purpose               | Beginner Benefit                      |
| ------------------- | --------------------------------- | ------------ | --------------------- | ------------------------------------- |
| 🟢 Entry & Strategy | Chat Trigger, Director, Think     | O3           | Leadership & planning | Turns briefs into action plans        |
| ✍️ Core Creatives   | Graphic, UI/UX, Brand, Copywriter | GPT-4.1-mini | Design & content      | Produces visuals, UX, and words       |
| 🚀 Extended Team    | Motion Graphics, Web              | GPT-4.1-mini | Motion & web design   | Animates, builds, and scales projects |

---

## 🌟 Why This Workflow Rocks

* **Complete agency in a box** → Strategy + Design + Motion + Web + Copy
* **Smart leadership** → Director (O3) only used for high-level thinking
* **Cost-effective execution** → GPT-4.1-mini runs most tasks
* **Parallel creativity** → Specialists work simultaneously
* **Scalable** → Adaptable to any design or branding request

---

👉 Example: Send a message like *“Design a brand identity for a sustainable clothing startup”*.
Within minutes, your AI agency produces:

* A logo & color scheme 🎨
* A UX prototype 📱
* A brand positioning doc 🎯
* Animated ad ideas 🎬
* Website mockups 🌐
* A tagline & ad copy ✍️

---

## 📊 Basic Information

- **Workflow ID:** 6914
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 3932
- **Downloads:** 393
- **Created:** 2025/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6914)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Content Creation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.agentTool** (×6)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×7)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
