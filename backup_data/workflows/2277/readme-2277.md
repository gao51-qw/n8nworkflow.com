# Training feedback automation with Usertask and Airtable

> ### Who is this template for?

This workflow template is designed for teams involved in training management and feedback analysis. It is particularly useful for:

- **HR Departments**: Automating the collection and response to training feedback.
- **Training Managers**: Streamlining the process of handling feedback and ensuring timely follow-up.
- **Corporate Trainers**: Receiving direct feedback and taking actions to improve training sessions.

![image.png](fileId:802)

This workflow offers a comprehensive solution for automating feedback management, ensuring timely responses, and improving the quality of training programs.

---

### How it works

This workflow operates with an Airtable trigger but can be easily adapted to work with other triggers like webhooks from external applications.

Once feedback data is captured, the workflow evaluates the feedback and directs it to the appropriate channel for action. Tasks are created in Usertask based on the feedback rating, and notifications are sent to relevant parties.

Here’s a brief overview of this n8n workflow template:

- **Airtable Trigger**: Captures new or updated feedback entries from Airtable.
- **Switch Node**: Evaluates the feedback rating and directs the workflow based on the rating.
- **Webhook**: Retrieves the result of a Usertask task.
- **Task Creation**:
  - Creates tasks in Usertask for poor feedback.
  - Creates follow-up tasks for fair to good feedback.
  - Documents positive feedback and posts recognition on LinkedIn for very good to excellent ratings.
- **Notifications**:
  - Sends email notifications to responsible parties for urgent actions.
  - Sends congratulatory emails and posts on LinkedIn for positive feedback.

---

### To summarize

- **Flexible Integration**: This workflow can be triggered by various methods like Airtable updates or webhooks from other applications.
- **Automated Task Management**: It creates tasks in Usertask based on feedback ratings to ensure timely follow-up.
- **Multichannel Notifications**: Sends notifications via email and LinkedIn to keep stakeholders informed and recognize successes.
- **Comprehensive Feedback Handling**: Automates the evaluation and response to training feedback, improving efficiency and response time.

---

### Instructions:

1. **Set Up Airtable**: Create a table in Airtable to capture training feedback.
2. **Configure n8n**: Set up the Airtable trigger in n8n to capture new or updated feedback entries.
3. **Set Up Usertask**: Configure the Usertask nodes in n8n to create and manage tasks based on feedback ratings.
4. **Configure Email and LinkedIn Nodes**: Set up the email and LinkedIn nodes to send notifications and post updates.
5. **Test the Workflow**: Run tests to ensure the workflow captures feedback, creates tasks, and sends notifications correctly.

---

Video : [https://youtu.be/U14MhTcpqeY](https://youtu.be/U14MhTcpqeY)


Remember, this template was created in n8n v1.38.2.

## 📊 Basic Information

- **Workflow ID:** 2277
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2214
- **Downloads:** 221
- **Created:** 2024/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2277)

## 👤 Author

- **Name:** NonoCode
- **Username:** @nonocode

## 🏷️ Categories

- HR

## 🔗 Nodes Used

- **airtableTrigger** 
- **webhook** 
- **switch** (×2)
- **linkedIn** 
- **emailSend** (×3)
- **httpRequest** (×4)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
