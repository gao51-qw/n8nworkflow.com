# Generate social posts from GitHub pushes to Twitter and LinkedIn
On each GitHub *push*, this workflow checks if the commit set includes **README.md** and **CHANGELOG.md**, fetches both files, lets an **LLM** generate a Twitter and LinkedIn post, then publishes to **Twitter** and **LinkedIn (Person)**.
## Apps & Nodes
* **Trigger:** Webhook
* **Logic:** IF, Merge, Aggregate
* **GitHub:** Get Repository File (×2)
* **Files:** Extract from File (text) (×2)
* **AI:** OpenAI Chat Model → LLM Chain (+ Structured Output Parser)
* **Publish:** Twitter, LinkedIn (Person)
## Prerequisites
* **GitHub:** OAuth2 or PAT with repo read.
* **OpenAI:** API key.
* **Twitter:** OAuth2 app with *Read and Write*; scopes `tweet.read tweet.write users.read offline.access`.
* **LinkedIn (Person):** OAuth2 credentials; **required scope:** `w_member_social`, `openid`.
## Setup
1. **GitHub Webhook:** Repo → *Settings → Webhooks*

   * Payload URL: `https://&lt;your-n8n-domain&gt;/webhook/github/push`
   * Content type: `application/json` • Event: *Push* • Secret (optional) • Branches as needed.
2. **Credentials:** Connect GitHub, OpenAI, Twitter, and LinkedIn (Person).
## How it Works
1. **Webhook** receives GitHub push payload.
2. **IF** checks that `README` and `CHANGELOG` appear in *added/modified*.
3. **GitHub (Get Repository File)** pulls `README.md` and `CHANGELOG.md`.
4. **Extract from File (text)** converts both binaries to text.
5. **Merge & Aggregate** combines into one item with both contents.
6. **LLM (OpenAI + Parser)** returns a JSON with `twitter` and `linkedin`.
7. **Twitter** posts the tweet.
8. **LinkedIn (Person)** posts the LinkedIn text.
