**Description**
This workflow automatically classifies user queries and retrieves the most relevant information based on the query type. 🌟 It uses adaptive strategies like;
   Factual, Analytical, Opinion, and Contextual to deliver more precise and meaningful responses by leveraging n8n's flexibility. Integrated with Qdrant vector store and Google Gemini, it processes each query faster and more effectively. 🚀

**How It Works?**
Query Reception: A user query is triggered (e.g., through a chatbot interface). 💬

*Classification*: The query is classified into one of four categories:

*Factual*: Queries seeking verifiable information.

*Analytical*: Queries that require in-depth analysis or explanation.

*Opinion*: Queries looking for different perspectives or subjective viewpoints.

*Contextual*: Queries specific to the user or certain contextual conditions.

*Adaptive Strategy Application*: Based on classification, the query is restructured using the relevant strategy for better results.

Response Generation**: The most relevant documents and context are used to generate a tailored response. 🎯

**Set Up Steps**

Estimated Time: ⏳ 10-15 minutes
Prerequisites: You need an n8n account and a Qdrant vector store connection.
Steps:

Import the n8n workflow: Load the workflow into your n8n instance.

Connect Google Gemini and Qdrant: Link these tools for query processing and data retrieval.

Connect the Trigger Interface: Integrate with a chatbot or API to trigger the workflow.

Customize: Adjust settings based on the query types you want to handle and the output format. 🔧

**For more detailed instructions, please check the sticky notes inside the workflow. 📌**