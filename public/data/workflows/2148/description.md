## Use Case
Track all Linear tickets in Google sheets. Useful if you want to do some custom analysis but don't want to pay for Linear's Plus features (Linear Insights) or that it does not cover.

![Screenshot 20240229 at 12.20.05.png](fileId:761)

## Setup 
1. Add Linear API header key
2. Add Google sheets creds
3. Update which teams to get tickets from in Graphql Nodes
4. Update which Google Sheets page to write all the tickets to
 **You only need to add one column, id, in the sheet. Google Sheets node in automatic mapping mode will handle adding the rest of the columns.**
5. Set any custom data on each ticket
6. Activate workflow 🚀

## How to adjust this template
Set any custom fields you want to get out of this, that you can quickly do in n8n.
