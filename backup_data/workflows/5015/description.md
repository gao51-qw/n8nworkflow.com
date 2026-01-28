## Setup Time

5-10 minutes

## Problem

🚨 LinkedIn search is BROKEN. Personalized cold-emailing takes hours!


I waste hours on LinkedIn manually filtering profiles, reading summaries, hoping they’d reply—tedious, frustrating, inefficient.

But even after finding the email IDs of the contacts, the job to be done is incomplete. 𝗜 𝘄𝗮𝗻𝘁 𝘁𝗼 𝘀𝘁𝗮𝗿𝘁 𝗮 𝗰𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲𝘀𝗲 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝘀.

If only I could type "𝘗𝘳𝘰𝘥𝘶𝘤𝘵 𝘮𝘢𝘯𝘢𝘨𝘦𝘳𝘴 𝘸𝘰𝘳𝘬𝘪𝘯𝘨 𝘰𝘯 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘷𝘦 𝘈𝘐 𝘪𝘯 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘪𝘯 𝘕𝘦𝘸 𝘠𝘰𝘳𝘬" and seconds later have 10 personalized outreach emails in my Gmail drafts folder, ready for my review. 

It would save me hours of research effort!

Introducing LinkGPT, a LinkedIn Agent, an automated agentic workflow powered by n8n.

## Prerequisites: 
Required accounts/API keys for Hunter.io, Google, and OpenAI.

## This would be helpful for:

🎯 Job Seekers wanting direct outreach to hiring managers (everyone applies to multiple jobs, and crafting personal emails takes hours!)

🎯 Recruiters looking to personalize candidate outreach at scale

🎯 Sales & Founders aiming for targeted customer conversations 


## Step-by-step workflow:

Takes 5-10 minutes to setup.

1. Generate a Boolean search string for LinkedIn profiles.
2. Perform authenticated Google searches using your query.
3. Extract LinkedIn URLs and workplace context from the search results.
4. Use OpenAI to extract first name, last name, and domain name from the context.
5. Use Hunter.io to find emails of the contacts.
6. Append all results to your connected Google Sheet. Columns: first_name, last_name, domain_name, email, context
7. Read everything publicly available about your target profiles
8. Identify common ground (shared backgrounds, interests, experiences)
9. Craft highly personalized, thoughtful email drafts
10. Automatically save tailored drafts in your Gmail and Google Sheets



I put together a clear, step-by-step guide on setting this up yourself.

## Sample Query

Sample:

Input: "I am headed to NYC later this month, whom should I meet with that works in product management for gen AI products?"

Output: List of 10 contacts with first name, last name, workplace, email address and context about them, and 10 personalized emails waiting for you review in your Gmail drafts folder 


