## Problem

🚨 LinkedIn search is BROKEN. 


I waste hours on LinkedIn manually filtering profiles, reading summaries, hoping they’d reply—tedious, frustrating, inefficient.

I wish LinkedIn had built an agent that would get me to the right profile with one click!

If only I could just type:
"Product managers working on YouTube Shorts' generative AI features."

and seconds later, have LinkedIn URLs, names, emails, and full context about them.

Introducing LinkGPT, a LinkedIn Agent, an automated agentic workflow powered by n8n.

## Prerequisites: 
Required accounts/API keys for Hunter.io, Google, and OpenAI.

## This would be helpful for:

🎯 Job Seekers: Skip ATS, email hiring managers directly ( I wish I had this when I was recruiting!)

🎯 Recruiters: Reach your dream candidates first

🎯 Founders & Sales Teams: Share your demos with customers directly (this does NOT use the expensive Sales Navigator API)


## Step-by-step workflow:

Takes 5-10 minutes to setup.

1. Generate a Boolean search string for LinkedIn profiles.
2. Perform authenticated Google searches using your query.
3. Extract LinkedIn URLs and workplace context from the search results.
4. Use OpenAI to extract first name, last name, and domain name from the context.
5. Use Hunter.io to find emails of the contacts.
6. Append all results to your connected Google Sheet. Columns: first_name, last_name, domain_name, email, context



I put together a clear, step-by-step guide on setting this up yourself.

## Sample Query

Sample:

Input: "I am headed to NYC later this month, whom should I meet with that works in product management for gen AI products?"

Output: List of 10 contacts with first name, last name, workplace, email address and context about them so you can email them. 


