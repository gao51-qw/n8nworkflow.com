## How it works  
This workflow checks the health of your web services or APIs on a schedule, prevents false alerts with a second verification, and sends confirmed failure alerts directly to Slack.  

- Performs scheduled HTTP health checks  
- Waits and retries before confirming failure  
- Sends alerts only if the service fails twice in a row  
- Reduces false positives and avoids alert fatigue  

## Setup steps  
1. Add your service URL(s) in the HTTP Request nodes  
2. Configure your Slack Bot Token in n8n  
3. Deploy the workflow  
4. Get real-time Slack alerts when services go down 🚨  

## Use case  
Perfect for IT teams, DevOps engineers, and developers who need reliable uptime monitoring without noise.  

![Slack Example](https://raw.githubusercontent.com/TuguiDragos/Service-Health-Monitor/refs/heads/main/Slack.png)