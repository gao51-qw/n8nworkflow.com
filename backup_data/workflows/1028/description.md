This is the workflow that I presented at the April 9, 2021 n8n Meetup.

This workflow uses [Baserow.io](https://baserow.io) to store registration information collected using n8n as both the web server and the data processor.

To get this workflow working properly, you will either need to run it on n8n.cloud or using the on premise version with people having the ability to connect to n8n externally.

You will need an account on [Baserow.io](https://baserow.io) to store your subscriptions with a table with the following fields:

- GUID
- First Name
- Last Name
- Email
- Confirmed


