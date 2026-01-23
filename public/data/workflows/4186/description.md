Turn plain-language chat like “Tomorrow 9 AM: write blog post” into neatly organised Todoist tasks with GPT-4o and n8n—zero code.

![ultimate_todoist_agent.png](fileId:1322)

# 🪄 Ultimate Personal **Todoist Agent**

Turn natural-language requests into perfectly-organized Todoist tasks—all on autopilot inside **n8n**.

&gt; “Add *Finish quarterly report by Friday afternoon*” → the agent creates the task, sets the due date & priority, and even drops it into the right project. ✨

---

## 🌟 Why this workflow rocks

* **All-in-one Todoist super‑powers** – create, update, complete, move, archive… every major Todoist endpoint is wired up (tasks, projects, sections, labels, comments).
* **LLM‑powered intent detection** – an OpenAI model interprets plain-English (or emoji‑filled!) messages so you don’t have to remember slash‑commands.
* **Minimal setup** – just two credentials and you’re live.
* **Battle‑tested building block** – use it as‑is, or plug the Todoist Agent node into your own agents & chatbots.

---

## 🛠️ What you’ll need

| Credential         | Where it’s used                        | How to set it up                                                                              |
| ------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| **OpenAI API**     | Orchestrator & LLM nodes               | Paste your OpenAI secret key into an **OpenAI** credential in n8n.                            |
| **Todoist OAuth2** | Todoist node **and** HTTP Request node | Log in **Todoist** from your browser to set up credential in n8n. |

&gt; That’s it—no webhooks, no extra secrets.
&gt; *Tested with **gpt‑4o‑latest** – the fastest & most accurate model in our trials.*

---

## ⚡ Quick‑start (5 minutes)

1. **Import** the JSON template (hit **▶️ Try it out** on the n8n template page or drag‑drop the file into your canvas).
2. **Select your credentials** in the two credential dropdowns.
3. Click **Test workflow**. In the sample Function node, tweak the `message` field (e.g. *“Tomorrow at 9 am: write blog post”*). Run → watch your new Todoist task appear.
4. (Optional) Swap the Function node for your favourite chat trigger (Telegram, Slack, WhatsApp, Discord, you name it).

Boom—your personal Todoist genie is alive! 🧞‍♂️

---

## 🧩 How it works (under the hood)

```
[Trigger / Chat message]
        │
        ▼
[🗂️ Orchestrator Agent]  ← OpenAI Chat Model + Short‑term Memory
        │                 ↳ Parses intent & entities
        │
        ▼
[🤖 Todoist Agent]       ← 15+ Todoist endpoints
        │                 ↳ Executes the right call (create, update, complete, etc.)
        ▼
[Done ✅  ]
```

*The Orchestrator is an example.* In production you can drop it and simply expose the **Todoist Agent** as a tool for any other agent workflow.

---

## 🎛️ Customising & extending

| Idea                      | How to do it                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| **Notion / Sheets sync**  | After the Todoist Agent node, add a Notion or Google Sheets node to log completed items. |
| **Voice commands**        | Swap the chat trigger for a Speech‑to‑Text node (e.g. Whisper).                          |

---

## 🤝 Need custom automations?

Want me to build or tweak something for you?
→ Email **[maxemelyanenko@gmail.com](mailto:maxemelyanenko@gmail.com)** and let’s make it happen!

---

## ⚠️ What’s *not* included (yet)

* Shared projects & other Todoist **Pro/Business** endpoints.
* File attachments in the comments.
* Editing comments.

Pull requests welcome! 🙌
