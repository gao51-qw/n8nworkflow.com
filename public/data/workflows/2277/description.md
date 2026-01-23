### Who is this template for?

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