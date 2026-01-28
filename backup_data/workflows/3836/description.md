## Who is this template for?

This workflow template is built for **SEO specialists** and **digital marketers** looking to uncover **keyword opportunities** effortlessly.

It uses **Google's autocomplete** magic to help you spot what's trending.

## How it works

Just give it a **keyword**.

The workflow then **queries Google** and **collects all autocomplete suggestions** by appending every letter from A to Z to your keyword.

**Output example** with the keyword "***n8n***" :

![n8n keywords.png](fileId:1228)

You can sort these keywords and give them to an LLM to produce entity-enriched text.

## Setup instructions

It works right out of the box. 🛠️

However, you may want to tweak the **output format** to better fit your use case.

### Exporting the Keywords

You can easily add a node to export the keywords in various ways:

- via a webhook
- by email
- as a file (e.g., saved to Google Drive)
- directly to a website

### Adapting the Language

Autocomplete results depend on the selected language.

You can change the `&hl=en` parameter in the **Google Autocomplete** node.  

Replace the `"en"` part with the language code of your choice.

**Examples:**  
- `&hl=fr` → French  
- `&hl=es` → Spanish  
- `&hl=de` → German