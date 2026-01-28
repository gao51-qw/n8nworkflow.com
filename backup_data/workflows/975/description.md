This workflow posts a poem translated into English every day in a Telegram chat.

![workflow-screenshot](fileId:447)

**Cron node**: triggers the workflow every day at 10:00. You can change the time and interval based on your use case. 

**HTTP Request node**: makes an HTTP request to the Poemist API that returns a random poem.

**LingvaNex node**: translates the returned poems into English.

**Telegram node**: takes in the translated poem and posts it in the chat.