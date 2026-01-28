## Use Case
When tracking your contacts and leads in Hubspot CRM, every new contact might be a potential customer. To guarantee that you're keeping the overview you'd normally need to look at every new lead that is coming in manually to identify high-quality leads to prioritize their engagement and optimize the sales process. This workflow saves the work and does it for you.

## What this workflow does
The workflow runs every 5 minutes. On every run, it checks the Hubspot CRM for contacts that were added since the last check. It then checks if they meet certain criteria (in this case if they are making +5m annual revenue) and alerts you in Slack for every match.

## Setup
1. Add `Hubspot`, and `Slack` credentials.
2. Click on `Test workflow`.

## How to adjust this workflow to your needs
1. Change the schedule interval
2. Adjust the criteria to send alerts