##  What this workflow does

This workflow automates the discovery, evaluation, and notification of job opportunities based on a candidate’s professional profile.

It fetches remote job listings, compares each role against a structured candidate profile stored in Google Sheets, and uses AI to evaluate real alignment in terms of skills, seniority, salary, industry, and role complexity.

Only the most relevant opportunities are kept, stored in Google Sheets, and delivered via email as a Top 5 shortlist.

[Decodo – Web Scraper for n8n](https://visit.decodo.com/raqXGD)



## How to configure (quick setup)

1. Define the candidate profile in Google Sheets (skills, salary expectations, preferences).
![image.png](fileId:3866)

2. Configure credentials (Google Sheets, Gmail, decodo, AI provider).

3. Set the matching threshold (e.g. skill match ≥ 90%).

4. Run the workflow manually or on a schedule.

### Output

Structured job match results in Google Sheets

Automated email with the Top 5 best-matched job opportunities

![image.png](fileId:3867)