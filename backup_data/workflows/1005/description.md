This workflow allows you to send daily weather updates via an SMS message using the Plivo node.

![workflow-screenshot](fileId:460)

**Cron node:** The Cron node will trigger the workflow daily at 9 AM.

**OpenWeatherMap node:** This node will return data about the current weather in Berlin. To get the weather updates for your city, you can enter the name of your city instead.

**Plivo node:** This node will send an SMS with the weather update, which was sent by the previous node.
