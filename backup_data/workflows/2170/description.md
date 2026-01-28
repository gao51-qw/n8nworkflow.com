With this workflow you can extract data from resume documents uploaded via a Telegram bot. Workflow transform readable content of PDF resume into structured data, using AI nodes and returns PDF with formatted, plain HTML. 

You can modify this workflow to perform other actions with structured data (e.g. insert it into database or create other, well-formatted documents).

Functionality of this workflow was presented during the n8n community call on March 7, 2024 - recording of presentation available [here](https://youtu.be/eZacuxrhCuo?si=KkJQrgQuvLxj-6FM&t=1701). 

⚠️ **Workflow made for demo purposes.** If you want to use it in real life, please make sure necessary measures for personal data protection are set. 

## How it works? 

User uploads readable PDF resume document into Telegram bot. After authentication based on chat ID parameter, workflow extracts text from the PDF and transfers it into AI chain with connected sub-nodes: OpenAI Chat Model and Structured Output (JSON) Parser. 

Then, each extracted section (employment history, projects etc.) is formatted into desired HTML structure. Finally, the document is converted into new, structured PDF using Gotenberg. 

💡 This workflow requires installed Gotenberg. If you are not familiar with this software, please have a look on [my YouTube tutorial](https://youtu.be/bo15xdjXf1Y?si=3hfPxS5SDzpGse0p). You can also replace call to Gotenberg with other PDF generation service (such as PDFMonkey or ApiTemplate). 

## Set up steps

1. Create Telegram bot and add its credentials in n8n. 
2. Set your chat ID parameter in *Auth* node. 
3. Adjust JSON schema in *Structured Output Parser* according to your needs. 
4. Optionally: replace HTTP call to Gotenberg with PDF generation service of your choice. 

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows) and/or [my newsletter](https://workfloows.com/).

