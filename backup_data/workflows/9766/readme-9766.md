# Retweet cleanup with scheduling for X/Twitter

> ## Who’s it for

Social media managers, creators, and brand accounts that rely on retweets for reach but want an automated, hands-off cleanup after campaigns to keep profiles tidy and on-brand.

## What it does / How it works

On a schedule, the workflow resolves your handle to a user ID, fetches recent tweets, filters **retweets only**, and safely unretweets them using batching and delays to respect rate limits. A dedicated **CONFIG (Set Fields)** node centralizes variables (e.g., `target_username`, `max_results`, `batch_delay_minutes`) so you can adjust behavior without touching logic.

## API endpoints used

* **GET** `/2/users/by/username/{username}` – resolve handle → user ID
* **GET** `/2/users/{id}/tweets?tweet.fields=created_at,referenced_tweets` – fetch recent tweets (identify retweets via `referenced_tweets.type === "retweeted"`)
* **DELETE** `/2/users/{id}/retweets/{tweet_id}` – unretweet

## Example response payloads

**GET /2/users/by/username/{username}**

```json
{
  "data": { "id": "2244994945", "name": "Twitter Dev", "username": "TwitterDev" }
}
```

**GET /2/users/{id}/tweets** (truncated)

```json
{
  "data": [
    {
      "id": "1760000000000000000",
      "text": "RT @someone: …",
      "referenced_tweets": [{ "type": "retweeted", "id": "1759999999999999999" }],
      "created_at": "2025-01-15T09:10:11.000Z"
    }
  ],
  "meta": { "result_count": 20 }
}
```

**DELETE /2/users/{id}/retweets/{tweet_id}**

```json
{ "data": { "retweeted": false } }
```

## Use cases

* **Brand hygiene:** Auto-unretweet promos after 48–72h.
* **Campaign cadence:** Remove event retweets once the event ends.
* **Feed freshness:** Clear low-priority retweets on a rolling basis.

## How to set up

1. Open **CONFIG (Set Fields)** and replace placeholders:

   * `target_username = "your_handle"`
   * `max_results = 100` (per fetch)
   * `batch_delay_minutes = 2` (throttle between batches)
2. Connect X/Twitter credentials in n8n (no keys hard-coded in HTTP nodes).
3. Run once with small values, verify logs, then enable the schedule.

&gt; Optional enhancements: add a **dead-letter path** (Error Trigger → Set → Sheets/Email/Slack) and a **notification node** (e.g., Slack) for execution feedback.


## 📊 Basic Information

- **Workflow ID:** 9766
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 69
- **Downloads:** 6
- **Created:** 2025/10/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9766)

## 👤 Author

- **Name:** masaya kawabe
- **Username:** @kawabe03

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×2)
- **httpRequest** (×2)
- **splitOut** 
- **if** 
- **splitInBatches** 
- **twitter** 
- **wait** 
- **stickyNote** (×16)
- **slack** 
- **errorTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
