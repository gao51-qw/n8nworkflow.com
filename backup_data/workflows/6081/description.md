# Generate and Auto-Evaluate Facebook Ad Headlines using GPT-4o-mini

Built with **n8n + OpenAI**

This workflow captures a product description, generates ad headlines, evaluates them with custom criteria, decides whether another draft is needed, and finally sends the best version via Gmail.

---

## ⚡ Section 1: Capture the Brief & Build the Prompt

* **📝 FormTrigger\_CopywritingBrief** → A simple form asks: *“What is your product about?”*
* **⚙️ Set\_PromptForHeadline** → Prepares the input by appending the instruction:
  *“Write a Facebook ad headline for this product:”*

**Benefit:** Ensures consistent, structured prompts so the AI receives clear context every time.

---

## ✍️ Section 2: Draft the Headline

* **💬 LLM\_HeadlineWriterModel** → GPT-4o-mini model provides the intelligence.
* **✍️ Agent\_HeadlineWriter** → Generates a first-pass Facebook ad headline.

**Benefit:** Produces creative copy instantly without waiting on a human writer.

---

## 📋 Section 3: Define Scoring Criteria

* **💬 LLM\_EvalCriteriaModel** → Calls GPT-4o-mini again.
* **📑 Agent\_EvalCriteriaBuilder** → Suggests 5 scoring parameters (scale 1-10).
  Example: Clarity, Relevance, Hook Strength, Brand Voice, Scroll-Stoppage.

**Benefit:** Builds an objective, repeatable evaluation rubric automatically.

---

## 🔍 Section 4: Evaluate the Headline

* **💬 LLM\_HeadlineEvaluatorModel** → Supplies reasoning power.
* **🔍 Agent\_HeadlineEvaluator** → Applies the 5 criteria to the generated headline and outputs:

  * JSON with scores per parameter
  * An average score
  * A plain-language bottom-line

**Benefit:** Turns subjective copy quality into measurable numbers.

---

## 🔄 Section 5: Decide & Iterate (if needed)

* **💬 LLM\_BottomLineModel** → Interprets the evaluation results.
* **🤔 Agent\_IterationDecision** → Decides:

  * Return **NO** → headline is acceptable.
  * Return **YES** + feedback → headline should be rewritten.
* **🔀 If\_NeedMoreIterations** → Branches:

  * If **NO** → continue workflow.
  * If **YES** → (loop wiring possible) headline can be regenerated with feedback.

**Benefit:** Keeps iterating until the AI headline meets your standards.

---

## 📩 Section 6: Deliver the Result

* **📧 Send a message (Gmail node)** → Sends the accepted headline via email.

**Benefit:** Automates delivery of the polished, AI-approved headline to your inbox or team.

---

## 📊 Workflow Overview

| Section              | Purpose                            | Key Nodes                                             | Benefit                        |
| -------------------- | ---------------------------------- | ----------------------------------------------------- | ------------------------------ |
| ⚡ Capture Brief      | Collect product info & prep prompt | FormTrigger, Set                                      | Structured AI input            |
| ✍️ Draft Headline    | Generate first headline            | LLM\_HeadlineWriterModel, Agent\_HeadlineWriter       | Instant creative draft         |
| 📋 Define Criteria   | Build scoring rubric               | LLM\_EvalCriteriaModel, Agent\_EvalCriteriaBuilder    | Objective evaluation           |
| 🔍 Evaluate Headline | Score headline & summarize         | LLM\_HeadlineEvaluatorModel, Agent\_HeadlineEvaluator | Transparent quality check      |
| 🔄 Decide & Iterate  | Accept or refine headline          | LLM\_BottomLineModel, Agent\_IterationDecision, If    | Only good results move forward |
| 📩 Deliver Result    | Share the final copy               | Gmail                                                 | Automates delivery             |

---

## ✅ Final Benefits

* 🚀 One-click workflow: from product description to tested headline.
* 📊 Automatic rubric: objective scoring each time.
* 🔄 Self-improving: poor headlines can auto-iterate with feedback.
* 📧 Direct integration: approved headlines land in Gmail instantly.
* 🧩 Fully modular: easy to extend with Google Sheets, Slack, or CRM nodes.

---

