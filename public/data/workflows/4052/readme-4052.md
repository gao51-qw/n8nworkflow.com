# AI chatbot call center: General exception flow (production-ready, part 8)

> ### Workflow Name: 👻 Exception Flow

Template was created in n8n v1.90.2

### Skill Level: Low

### Categories: n8n, Chatbot

### Stacks

- Error Trigger
- Slack node

# What this workflow does?

This is a n8n **Error Workflow**. It will trigger when there is an error in another workflow. When this happens, it then tries to send an error notification to the preset Slack channel.

# **How it works**

- The **Error Trigger** node will trigger when there is an error in another workflow, as long as that workflow is set up to do so.
- A error notification will be sent to the **Slack Channel**.

# **Set up instructions**

1. Create you **Slack credentials**, refer to [n8n integration documentation](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) for more information.
2. Set up the **Channel** in **👻 Exception Alert** node.
3. For any n8n workflows to trigger this, switch to that workflow, select menu &gt; settings, and set the **Error Workflow** to **👻 Exception Flow.**

# How to adjust it to your needs

Although this workflow template is part of the **AI Chatbot Call Center Series**, it could be used with any n8n workflows.

- Update the **Channel** in **👻 Exception Alert** to your own channel

https://chatpaylabs.com/blog/part-8-build-your-own-ai-chatbot-call-center-general-exception-flow-production-ready-n8n-workflow-free-download-


## 📊 Basic Information

- **Workflow ID:** 4052
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 1169
- **Downloads:** 116
- **Created:** 2025/5/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4052)

## 👤 Author

- **Name:** ChatPayLabs
- **Username:** @chatpaylabs

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **errorTrigger** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
