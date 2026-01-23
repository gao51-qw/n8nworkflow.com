## **Who is this for?**

This workflow is perfect for:

* **HR professionals** seeking to automate employee and department management
* **Startups and SMBs** that want an AI-powered HR assistant on Telegram
* **Internal operations teams** that want to simplify onboarding and employee data tracking

---

## **What problem is this workflow solving?**

Managing employee databases manually is error-prone and inefficient—especially for growing teams. This workflow solves that by:

* Enabling **natural language-based HR operations** directly through Telegram
* Automating the **creation, retrieval, and deletion** of employee records in Airtable
* Dynamically managing related data such as **departments and job titles**
* Handling **data consistency** and linking across relational tables automatically
* Providing a conversational interface backed by **OpenAI** for smart decision-making

---

## **What this workflow does**

Using Telegram as the interface and Airtable as the backend database, this intelligent HR workflow allows users to:

1. **Chat in natural language** (e.g. “Show me all employees” or “Create employee: Sarah, Marketing…”)
2. **Interpret and route requests** via an AI Agent that acts as the orchestrator
3. **Query employee, department, and job title data** from Airtable
4. **Create or update records** as needed:

   * Add new departments and job titles automatically if they don’t exist
   * Create new employees and link them to the correct department and job title
5. **Delete employees** based on ID
6. **Respond directly in Telegram**, providing user-friendly feedback

---

## **Setup**
1. **View & Copy the Airtable base** here:
   👉 [Employee Database Management – Airtable Base Template](https://airtable.com/appgVjZcaRP8BsKf0/shrQAqQ2JUW50EEyW)

2. **Telegram Bot**: Set up a Telegram bot and connect it to the Telegram Trigger node

3. **Airtable**: Prepare three Airtable tables:

   * `Employees` with links to Departments and Job Titles
   * `Departments` with Name & Description
   * `Job Titles` with Title & Description

4. **Connect your Airtable API key** and base/table IDs into the appropriate Airtable nodes

5. **Add your OpenAI API key** to the AI Agent nodes

6. **Deploy both workflows**: the main chatbot workflow and the employee creation sub-workflow

7. **Test with sample messages** like:

   * “Create employee: John Doe, [john@company.com](mailto:john@company.com), Engineering, Software Engineer”
   * “Remove employee ID rec123xyz”

---

## **How to customize this workflow to your needs**

* **Switch databases**: Replace Airtable with Notion, PostgreSQL, or Google Sheets if desired
* **Enhance security**: Add authentication and validation before allowing deletion
* **Add approval flows**: Integrate Telegram button-based approvals for sensitive actions
* **Multi-language support**: Expand system prompts to support multiple languages
* **Add logging**: Store every user action in a log table for auditability
* **Expand capabilities**: Integrate payroll, time tracking, or Slack notifications

---

## **Extra Tips**

* This is a **two-workflow setup**. Make sure the sub-workflow is deployed and accessible from the main agent.
* Use **Simple Memory** per chat ID to preserve context across user queries.
* You can expand the orchestration logic by adding more tools to the main agent—such as “Get active employees only” or “List employees by job title.”

---

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**