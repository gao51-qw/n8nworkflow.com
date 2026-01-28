# Authenticate a user in a workflow with OpenID Connect

> # Intro

This workflow needs a user to authenticate by using an openid connect provider in order to call the webhook.

If the user is not authenticated, it starts a login process by using an Authorization Code with PKCE [https://datatracker.ietf.org/doc/html/rfc7636](https://datatracker.ietf.org/doc/html/rfc7636), a standard way to authenticate users with openid connect.

Then, after the user logs in, the webhook is refreshed and gets the user's token from a cookie. With this token, all details about the user are requested through the userinfo endpoint on the identity provider.

# How to set up with Keycloak

[Keycloak](https://www.keycloak.org) Keycloak is an open source identity and access management solution.

Feel free to get a demo realm at [https://please-open.it](https://please-open.it) or get your own Keycloak server up and running.

After creating a realm, go to "Realm Settings" and click on "OpenID Endpoint Configuration" 

![image.png](fileId:718)

Retrieve authorization_endpoint, token_endpoint and userinfo_endpoint values. Set those variables in the "Set variables" node.

In Keycloak, create a new client (name it as you want)

![image.png](fileId:715)

Disable the client authentication, check only "standard flow" : 

![image.png](fileId:717)

At the third step, put the webhook url in "valid redirect URIs", fill "Web origins" with a "+".

![image.png](fileId:716)

You're done, open the webhook and it asks you to authenticate.

# Usage

## User informations

The userinfo node returns this structure about the user has logged in : 

```json
[
  {
    "sub":"73a6543f-f420-4fa6-9811-209e903c348b",
    "email_verified":true,
    "preferred_username": "mathieu.passenaud@please-open.it",
    "email": "mathieu.passenaud@please-open.it"
  }
]
```

I can use those infos in my workflow for custom operations.

## APIs calls

the "code" node returns me a cookie named "n8n-custom-auth" which is the access_token returned by the identity provider. This access_token can be used to call APIs connected to this identity provider (for example, we call userinfo API with this token).

Example : asks a user to log in with his Google account then call an API (Gmail, drive...) with his own token.

# How it works

We published a blog post about this flow, how it works and how you can use it : 
[https://blog.please-open.it/n8n-openid-client/](https://blog.please-open.it/n8n-openid-client/)

## 📊 Basic Information

- **Workflow ID:** 1997
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 8038
- **Downloads:** 803
- **Created:** 2023/11/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1997)

## 👤 Author

- **Name:** please-open.it
- **Username:** @please-open-it

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **webhook** 
- **code** 
- **httpRequest** (×2)
- **respondToWebhook** (×2)
- **if** (×3)
- **html** (×2)
- **stickyNote** (×3)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
