## 📊 Description
Automate your eCommerce content workflow by generating AI-optimized product descriptions directly from Airtable. 🛍️🤖 This automation checks for pending products every 15 minutes, processes them in batches, and uses GPT-4o-mini to create structured long descriptions, short answer blocks, bullet features, and feature tables. All AI-generated fields are then written back into the same Airtable record, ensuring clean, consistent, and SEO-friendly product copy. Perfect for stores looking to scale product listings without manual writing. ✨📄

## 🔁 What This Template Does
1️⃣ Triggers every 15 minutes to look for products marked as “pending”. ⏰
 2️⃣ Fetches product data from Airtable for processing. 📦
 3️⃣ Splits results into batches to avoid API rate limits. 🔁
 4️⃣ Sends product attributes to GPT-4o-mini for AI-generated content. 🤖
 5️⃣ Uses a structured JSON parser to ensure clean, valid AI output. 📐
 6️⃣ Converts the AI JSON into Airtable-friendly fields using a Code node. 🧩
 7️⃣ Updates the original Airtable product record with generated descriptions. ✍️
 8️⃣ Marks each item as “done” with a timestamp. ✔️

## ⭐ Key Benefits
✅ Creates consistent, high-quality product descriptions automatically
 ✅ Produces AI-friendly content for search engines & answer engines
 ✅ Eliminates manual copywriting for large product catalogs
 ✅ Ensures structured, valid, and predictable output every time
 ✅ Runs reliably on schedule with zero human oversight
 ✅ Ideal for eCommerce teams scaling product listings

## 🧩 Features
- Scheduled automation (every 15 minutes)
- Airtable integration for fetching & updating records
- Batch processing to prevent rate-limit issues
- GPT-4o-mini AI content generation
- Structured output parser for clean JSON
- Code node formatting for Airtable
- Automatic status + timestamp updating

## 🔐 Requirements
- Airtable Personal Access Token
- OpenAI API key (GPT-4o-mini)
- Airtable base + table with required fields
- n8n with LangChain nodes enabled

## 🎯 Target Audience
- eCommerce teams managing product catalogs
- Marketplace sellers needing scalable content
- Operations teams automating product listings
- Agencies generating optimized product copy for clients
