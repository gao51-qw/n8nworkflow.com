# Get local datetime into Function node using moment.js

> ![workflow-screenshot](fileId:260)

A quick example showing how to get the local date and time into a Function node using moment.js.

This relies on the `GENERIC_TIMEZONE` environment variable being correctly configured (see the docs [here](https://docs.n8n.io/reference/configuration.html#timezone))

**NOTE**: In order for this to work, you must whitelist the moment library for use by setting the following environment variable:

```bash
NODE_FUNCTION_ALLOW_EXTERNAL=moment
```

For convenience, the Function code is as follows:

```javascript
const moment = require('moment');

let date = moment().tz($env['GENERIC_TIMEZONE']);

let year = date.year();
let month = date.month(); // zero-indexed!
let day = date.date();
let hour = date.hours();
let minute = date.minutes();
let second = date.seconds();
let millisecond = date.millisecond();
let formatted = date.format('YYYY-MM-DD HH:mm:ss.SSS Z');

return [
  {
    json: {
      utc: date,
      year: year,
      month: month, // zero-indexed!
      day: day,
      hour: hour,
      minute: minute,
      second: second,
      millisecond: millisecond,
      formatted: formatted
    }
  }
];
```

## 📊 Basic Information

- **Workflow ID:** 695
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 1924
- **Downloads:** 192
- **Created:** 2020/10/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/695)

## 👤 Author

- **Name:** Trey
- **Username:** @trey

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
