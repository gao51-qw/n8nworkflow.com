# Poll emails using JMAP

> n8n does not currently offer a way to retrieve emails from arbritrary providers via a regular node. Unless you're using Gmail or Outlook, you can only use the email trigger to start a workflow when a new email arrives.

This currently limits the possible use cases you can cover in your n8n workflows, as you cannot (for example) get an idea of how many unread messages there are in an inbox, or search for specific messages when an event occurs.

But fear not, there's a new sheriff in town! The [JMAP standard](https://jmap.io/index.html) allows you to interact with your mailboxes, calendars and contacts through single HTTP requests whenever needed.

This n8n workflow demonstrates how to retrieve the total number of unread messages from a JMAP server and also retrieve details for the first 3 messages. It can easily be adapted to search for messages other than unread, or to return details for more than the first 3 messages.

# Screenshots

![image.png](fileId:722)

![image.png](fileId:721)

# FAQ

## Which n8n version do I need?

The workflow was built using n8n 1.20 and should work here out of the box. HTTP requests are also supported on older n8n versions, so the workflow can be backported as an alternative.

## Which credentials do I need?

The JMAP standard does not limit the available authentication options. Fastmail (the sponsor of the standard) supports Bearer authentication as well as OAuth2.

In n8n you can implement the Fastmail Bearer authentication by creating Header Auth credentials with a name of `Authorization` and a value of `Bearer $apiToken` (replacing `$apiToken` with your actual API token from Fastmail).

For other services you'd need to check the respective API documentation for more details on the support authentication methods. 

## What even is JMAP?

It's an official Internet Engineering Task Force (IETF) standard, sponsored by Fastmail, that will hopefully replace the legacy standards CalDAV, CardDAV, and IMAP soon. The full specs are [available here](https://jmap.io/spec.html).

## How can I use JMAP?

If you're a [Fastmail](https://ref.fm/u30544864) customer or if you're hosting your own [Stalwart mail server](https://github.com/stalwartlabs/mail-server) you can use JMAP today.

If your email provider doesn't yet support JMAP, you might want to contact them and let them know you're interested in this functionality.

## 📊 Basic Information

- **Workflow ID:** 2032
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 982
- **Downloads:** 98
- **Created:** 2023/12/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2032)

## 👤 Author

- **Name:** Tom
- **Username:** @mutedjam

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×3)
- **set** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
