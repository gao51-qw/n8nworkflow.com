# Monthly live music events newsletter

> # How it works?

- This workflows sends you a monthly lists of live music events for a specific location. 
- Events are fetched from songkick.com and delivered to you by email to a provided email address(es). 
- Each event in the list has a link to a full SongKick page where you can see more details about the event and buy tickets for it.

**Example email:**
![Example email](https://i.imgur.com/7WTn72L.png)

# How to set it up?
First thing that this workflow needs is a location link for your desired city from the SongKick website. You can get it by following these steps:
1. Visit [songkick.com](https://www.songkick.com/) and enter the city name in the search box:
	![Songkick search](https://i.imgur.com/lNwGG9p.png)
    
2. From the results page, click the result that contains the location info. These will have the `Location` tag on top of the location name:
    ![Location result example](https://i.imgur.com/vMQJTbL.png)
3. Once on the location page, copy the url
    ![URL copy example](https://i.imgur.com/GErLksA.png)
4. Back in the n8n workflow page, paste the url in the _location_ parameter of the node called _Setup location and email_:
    ![URL in node settings](https://i.imgur.com/ZwUucrt.png)

Second thing it needs is the email address which will receive the monthly list. For this, simply enter it in the _email_ field of the _Setup location and email_ node. If you want to set multiple receivers, simply separate email addresses by `,`:
![Emails in node settings](https://i.imgur.com/3XGkrsD.png)

# Required accounts
This workflow requires you to have a properly set up Gmail account that will be used by Gmail Node to send emails. You can read more about how to create credentials for a Gmail node in n8n documentation [here](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/?utm_source=n8n_app&utm_medium=left_nav_menu&utm_campaign=create_new_credentials_modal).

## 📊 Basic Information

- **Workflow ID:** 2050
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 2521
- **Downloads:** 252
- **Created:** 2024/1/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2050)

## 👤 Author

- **Name:** Milorad Filipovic
- **Username:** @mfilipovic

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** 
- **if** 
- **htmlExtract** (×2)
- **itemLists** (×2)
- **wait** 
- **code** (×2)
- **scheduleTrigger** 
- **set** 
- **gmail** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
