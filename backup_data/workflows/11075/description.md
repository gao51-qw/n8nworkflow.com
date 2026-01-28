## 📊 Description
Streamline AI-focused SEO research by automatically analyzing URLs stored in Google Sheets, extracting semantic signals from each webpage, and generating high-quality topic clusters for AI discovery. 🤖🔍 This automation fetches URLs weekly, scrapes headings (H1–H6), extracts entities, keywords, topics, and summaries using GPT-4o-mini, and classifies each page into clusters and subclusters optimized for LLM search visibility. It also generates internal linking suggestions for better topical authority and writes all results back into Google Sheets. Perfect for content strategists, SEO teams, and AI-search optimization workflows. 📈🧩

## 🔁 What This Template Does
1️⃣ Triggers weekly to process URLs stored in Google Sheets. 📅
 2️⃣ Fetches all URL records from the configured sheet. 📥
 3️⃣ Processes URLs in batches to avoid API overload. 🔁
 4️⃣ Extracts webpage HTML and pulls semantic headings (H1–H6). 📰
 5️⃣ Sends headings + URL context to GPT-4o-mini for structured extraction of:
 — title
 — entities
 — keywords
 — topics
 — summary
 6️⃣ Generates high-level cluster + subcluster labels for each page. 🧠
 7️⃣ Recommends 3–5 internal linking URLs to strengthen topical authority. 🔗
 8️⃣ Updates Google Sheets with all extracted fields + status flags. 📊
 9️⃣ Repeats the process until all URLs are analyzed. 🔄

## ⭐ Key Benefits
✅ Automates topical clustering for AI search optimization
 ✅ Extracts entities, keywords, and topics with high semantic accuracy
 ✅ Strengthens internal linking strategies using AI suggestions
 ✅ Eliminates manual scraping and analysis work
 ✅ Enables scalable content audits for large URL datasets
 ✅ Enhances visibility in AI-driven search systems and answer engines

## 🧩 Features
- Google Sheets integration for input + output
- HTML parsing for H1–H6 extraction
- GPT-4o-mini structured JSON extraction
- Topic clustering engine (cluster & subcluster classification)
- Internal linking recommendation generator
- Batch processing for large URL datasets
- Status-based updating in Google Sheets

## 🔐 Requirements
- Google Sheets OAuth2 credentials
- OpenAI API key (GPT-4o-mini)
- Publicly accessible URLs (or authenticated HTML if applicable)
- n8n with LangChain nodes enabled

## 🎯 Target Audience
- SEO teams performing semantic clustering at scale
- Content strategists creating AI-ready topic maps
- Agencies optimizing large client URL collections
- AI-search consultants building structured content libraries
- Technical marketers needing automated content analysis
