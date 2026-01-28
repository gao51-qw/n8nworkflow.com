This workflow allows you to send position updates of the ISS every minute to a topic in MQTT using the MQTT node.

![workflow-screenshot](fileId:490)

**Cron node:** The Cron node will trigger the workflow every minute.

**HTTP Request node:** This node will make a GET request to the API `https://api.wheretheiss.at/v1/satellites/25544/positions` to fetch the position of the ISS. This information gets passed on to the next node in the workflow.

**Set node:** We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow.

**AWS SQS:** This node will send the data from the previous node to the `iss-position` topic. If you have created a topic with a different one, you can use that topic instead.