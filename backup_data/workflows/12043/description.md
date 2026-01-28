## Overview: AI-Powered Interview Scheduling & Reminders

This workflow automates the end-to-end process of scheduling technical or behavioral interviews. It captures interview data via Webhook, creates a Google Calendar event with an integrated Google Meet link, generates a personalized, professional reminder email using AI (GPT-4.1-mini), and automatically sends it via Gmail exactly 24 hours before the interview.

## Setup Instructions

To implement this workflow, follow these steps:

1. **Webhook:** Copy the Production URL and configure it in your Recrutei ATS to send interview JSON data.
2. **Google Calendar:** Connect your account. The node is pre-configured to generate a "hangoutsMeet" conference link.
3. **OpenAI:** Requires a valid API Key. The AI acts as a Recruitment Assistant to draft a professional email body.
4. **Wait Node:** Currently set to "1 day before" the interview. You can adjust this timing based on your communication policy.
5. **Gmail:** Connect your recruiter or company account to perform the final delivery.
6. **Recrutei's API:** Inserts your Recrutei token in the Authorization header.