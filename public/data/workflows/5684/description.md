## This n8n workflow tracks user engagement in a specific WhatsApp group by capturing incoming messages via a Whapi webhook. 

It first filters messages to ensure they come from the correct group, then identifies the message type—text, emoji reaction, voice, or image. The workflow searches for the user in an Airtable database using their WhatsApp ID and increments their message count by one. It updates the Airtable record with the new count and the date of the last interaction. 

This automated process helps measure user activity and supports engagement initiatives like weekly raffles or rewards. The system is flexible and can be expanded to include more message types or additional actions. 

## Overall, it provides a seamless way to encourage and track user participation in your WhatsApp community.

