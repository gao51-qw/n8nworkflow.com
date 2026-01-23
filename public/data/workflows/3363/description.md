✨ Overview

This workflow allows candidates to schedule interviews through a conversational AI assistant. It integrates with your Google Calendar to check for existing events and generates a list of available 30-minute weekday slots between 9 AM and 5 PM Eastern Time. Once the candidate selects a suitable time and provides their contact information, the AI bot automatically books the meeting on your calendar and confirms the appointment.

⚡ Prerequisites

To use this workflow, you need an OpenAI account with access to the GPT-4o model, a Google account with a calendar that can be accessed through the Google Calendar API, and an active instance of n8n—either self-hosted or via n8n cloud. Within n8n, you must have two credential configurations ready: one for Google Calendar using OAuth2 authentication, and another for your OpenAI API key.

🔐 API Credentials Setup

For Google Calendar, go to the Google Cloud Console and create a new project. Enable the Google Calendar API, then create OAuth2 credentials by selecting “Web Application” as the application type. Add http://localhost:5678/rest/oauth2-credential/callback as the redirect URI if using local n8n. After that, go to n8n, navigate to the Credentials section, and create a new Google Calendar OAuth2 credential using your account. For OpenAI, visit platform.openai.com to retrieve your API key. Then go to the n8n Credentials page, create a new credential for OpenAI, paste your key, and name it for reference.

🔧 How to Make This Workflow Yours

To customize the workflow for your use, start by replacing all instances of the calendar email rbreen.ynteractive@gmail.com with your own Google Calendar email. This email is referenced in multiple places, including Google Calendar nodes and the ToolWorkflow JSON for the node named "Run Get Availability." Also update any instances where the Google Calendar credential is labeled as Google Calendar account to match your own credential name within n8n. Do the same for the OpenAI credential label, replacing OpenAi account with the name of your own credential.

Next, go to the node labeled Candidate Chat and copy the webhook URL. This is the public chat interface where candidates will engage with the bot—share this URL with them through email, your website, or anywhere you want to allow access. Optionally, you can also tweak the system message in the Interview Scheduler node to modify the tone, language, or logic used during conversations. If you want to add branding, update the title, subtitle, and inputPlaceholder in the Candidate Chat node, and consider modifying the final confirmation message in Final Response to User to reflect your brand voice. You can also update the business rules such as time zone, working hours, or default duration by editing the logic in the Generate 30 Minute Timeslots code node.

🧩 Workflow Explanation

This workflow begins with the Candidate Chat node, which triggers when a user visits the public chat URL. The Interview Scheduler node acts as an AI agent, guiding the user through providing their email, phone number, and preferred interview time. It checks availability using the Run Get Availability tool, which in turn reads your calendar and compares it with generated free time slots from the Generate 30 Minute Timeslots node. The check day names tool helps the AI interpret natural language date expressions like “next Tuesday.”

The schedule is only populated with 30-minute weekday slots from 9 AM to 5 PM Eastern Time, and no events are scheduled if they overlap with existing ones. When a suitable time is confirmed, the AI formats the result into structured JSON, creates an event on your Google Calendar, and sends a confirmation back to the user with all relevant meeting details.

🚀 Deployment Steps

To deploy the interview scheduler, import the provided workflow JSON into your n8n instance. Update the Google Calendar email, OpenAI and Google credential labels, system prompts, and branding as needed. Test the connections to ensure the API credentials are working correctly. Once everything is configured, copy and share the public chat URL from the Candidate Chat node. When candidates engage with the chat, the workflow will walk them through the interview booking process, check your availability, and finalize the booking automatically.

💡 Additional Tips

By default, the workflow avoids scheduling interviews on weekends and outside of 9–5 EST. Each interview lasts exactly 30 minutes, and overlapping with existing events is prevented. The assistant does not reveal details about other meetings. You can customize every part of this workflow to fit your use case, including subworkflows like Get Availability and check day names, or even white-label it for client use. This workflow is ready to become your AI-powered interview scheduling assistant.

## 🤝 Connect with Me

## Description  
I’m Robert Breen, founder of Ynteractive — a consulting firm that helps businesses automate operations using **n8n**, **AI agents**, and custom workflows. I’ve helped clients build everything from intelligent chatbots to complex sales automations, and I’m always excited to collaborate or support new projects.

If you found this workflow helpful or want to talk through an idea, I’d love to hear from you.

## Links  
🌐 Website: [https://www.ynteractive.com](https://www.ynteractive.com)  
📺 YouTube: [@ynteractivetraining](https://www.youtube.com/@ynteractivetraining)  
💼 LinkedIn: [https://www.linkedin.com/in/robert-breen](https://www.linkedin.com/in/robert-breen)  
📬 Email: rbreen@ynteractive.com