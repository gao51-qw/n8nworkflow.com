# WordPress content automation machine with HUMAN-IN-THE-LOOP & DEEP RESEARCH

> ## **HUMAN-IN-THE-LOOP Content Automation Pro with Deep Research & Airtable for Power Users \- Collaborative AI for WordPress Blog Automation**

**The BEST n8n Content Automation workflow** in the market is getting even better, now enabling you to have full control over the entire process. It’s time to unlock the power of true **collaborative creation with GenAI\!**

**Want to leverage AI automation but don't want to give up full control over the whole content creation process?** Get the best of both worlds \- get **“Human-in-the-Loop”** with this supreme n8n workflow template\!

This template blends the **power of AI** with the crucial oversight of **human expertise and intervention**, all managed through a central, streamlined Airtable interface. Say goodbye to generic content and hello to high-quality, deeply researched articles published directly to your WordPress site with full control. 

Check out [my Youtube channel](https://www.youtube.com/@nminhduc/) for a full walkthrough.

![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_0.jpeg](fileId:1187)
![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_13.jpeg](fileId:1182)
![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_2.jpeg](fileId:1184)![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_3.jpeg](fileId:1181)
![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_4.jpeg](fileId:1186)

### **What problem is this workflow solving? / Use cases**

Fully automated content generation tools often lack the nuance, accuracy, and strategic control necessary for truly impactful content. This workflow solves that critical gap by integrating powerful AI capabilities into a structured, human-supervised content creation process managed via a simple interface. It automates the most repetitive and time-consuming tasks – like research gathering, chapter ideations, domain copywriting – while strategically embedding essential human review points at critical junctures.

Instead of simply providing a topic and receiving a finished article of uncertain quality, you actively guide the process step-by-step within an interface. You review, refine, and approve AI suggestions for chapters and content before finalizing and publishing. This approach makes it perfect for creating high-quality, deeply researched, and brand-aligned blog posts for WordPress more efficiently, without ever sacrificing essential editorial control.

### **Who is this for?**

This workflow template is meticulously designed for individuals and teams deeply involved in content creation who seek a powerful blend of AI-driven efficiency and essential human-controlled quality assurance:

* **Content Creators & Bloggers:** Who want to leverage AI for drafting and research but maintain full editorial control.  
* **Marketing Teams:** Looking to scale content production efficiently while ensuring brand voice and quality consistency.  
* **SEO Specialists:** Needing to produce well-researched, structured, and SEO-optimized content regularly.  
* **Agencies:** Managing content creation for multiple clients with a structured, repeatable process.  
* **Anyone who prefers a "human-in-the-loop" approach** over fully automated "black box" content generators.

### **How this workflow works**

This template automates significant portions of the WordPress content creation process, utilizing Airtable as the central hub for management and user interaction, while leveraging AI for research and copywriting. The system is composed of four interconnected n8n flows, each handling a distinct stage of the content lifecycle. In addition, there is a sub-workflow dedicated to the research tool (Perplexity).

![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_12.jpeg](fileId:1185)

#### **Content Creation Process in Airtable**

The entire journey from idea to published post is managed within your Airtable base, offering transparency and control. Progress through each tab sequentially to complete the content creation process and produce a high-quality article that fulfills your requirements.

1. **Configure Settings (“Settings” Table):** Define global parameters (website details, target audience, writing style, category IDs, about us, CTA etc.) in the “Settings” table. These serve as default inputs for the AI.  
2. **Create Topics (“Create Topics“ Table):** Add a record to the “Create Topics” table for each new blog post idea. Mark the topic as ready by setting its 'Status' field to “To Do” **and** ticking the 'Execute Flow' checkbox to initiate the first flow.  
3. **Generate Chapters (“Generate Chapters“ Table):** The first flow calls to the sub-workflow to do online research and generates potential chapter outlines based on your topic and settings, saving them to the “Generate Chapters” table.  
4. **Select Chapters to Write (“Select Chapters“ Table):** Review the suggested chapters in the “Select Chapters“ Table. Select the chapters you want to proceed with by setting their 'Status' to “To Do” **and** ticking the 'Execute Flow' checkbox.   
5. **Generate Content for selected Chapters (“Generate Content“ Table):** The second flow calls to the sub-workflow to research each selected chapter and generates draft content, saving it to the “Generate Content” table, where you have the opportunity to review and modify if necessary.  
6. **Select Chapter Content (“Select Content“ Table):** Review and edit the AI-generated text directly in Airtable. Approve the content for each chapter. Once all necessary content is approved, trigger the third flow for the final assembly by setting the status to “To Do” **and** ticking the 'Execute Flow' checkbox.  
7. **Finalize Post (“Finalize Post“ Table):** The third flow aggregates the approved content, generates the title, SEO metadata, tags, chapter images and featured image, placing all compiled information in the “Finalize Post” table for your final review. When the final article is ready to be published on your website, mark the status as "To Do" and check the "Ready to Publish" box to activate the fourth and final flow.  
8. **Publish & Backup Post (“Backup Post“ Table):** the fourth flow publishes the post to the website and creates a backup record in the “Backup Post” table, archiving key details including the live URL of the published article.

#### 

#### **n8n Workflow Functions (JSON Files)**

The automation is handled by four separate n8n flows, each triggered by specific changes in Airtable:

1. **Flow 1** (Topic Initiation & Chapter Generation):  
   * **Trigger:** Monitors the “Create Topics” table; activates when a record's 'Status' is "To Do" AND 'Execute Flow' checkbox is ticked.  
   * **Action:** Fetches settings from Settings. Performs initial research (e.g., via Perplexity). Uses AI to generate chapter outlines. Saves suggestions as new records in the “Generate Chapters” table.  
2. **Flow 2** (Content Generation & Internal Linking):  
   * **Trigger:** Monitors the “Select Chapters” table; activates when a record's 'Status' is "To Do" AND 'Execute Flow'  checkbox is ticked.  
   * **Action:** Fetches chapter details and settings. Gathers internal links (e.g., by parsing sitemap). Performs online/ deep research per chapter. Uses AI to write draft content, incorporating research and links. Saves drafts into corresponding records in the “Generate Content” table.  
3. **Flow 3** (Post Assembly & Image Generation):  
   * **Trigger:** Monitors the “Select Content” table; activates when all content for a topic is approved and final assembly is triggered when a record's 'Status' is "To Do" AND 'Execute Flow' checkbox is ticked.  
   * **Action:** Fetches all content from the “Generate Content” table. Aggregates text. Uses AI for title, SEO metadata, tags, and image prompts. Generates chapter images and a featured cover image (e.g., via AI image model DALL-E). Converts content to HTML. Saves compiled data and image info into the “Finalize Post” table.  
4. **Flow 4** (WordPress Publishing & Backup):  
   * **Trigger:** Monitors the “Finalize Post” table; activates when a record is marked Status' is "To Do" AND ‘Post to Website’ checkbox is ticked.  
   * **Action:** Fetches finalized data. Uploads images to WordPress. Creates WordPress post (status set to “published” by default) with content, metadata, tags, and image. Creates a record in the “Backup Post” table, with a link to the post on the website.

This modular approach ensures each stage is handled distinctly, orchestrated via updates on Airtable interface.

### **Unique Features**

* **Human-in-the-Loop Design:** Guarantees quality and relevance through mandatory user review and approval stages within Airtable for chapters, content, and the final post.  
* **Collaborative AI Partnership:** Leverages AI as a powerful assistant for research, structuring, and drafting, significantly boosting productivity while relying on human expertise for refinement and final judgment.  
* **Airtable as Interface & Control Center:** Utilizes Airtable as an intuitive interface and central database to manage the entire content lifecycle, offering clear progress tracking and facilitating team collaboration.  
* **Deep Research Integration:** Incorporates external research tools (like Perplexity) to ensure content is based on fresh, up-to-date information, crucial for accuracy and authority.  
* **Modular n8n Structure:** Simplifies complexity by dividing the process into four manageable, interconnected flows plus one sub-flows, making the system easier to understand, troubleshoot, and customize.  
* **Rate-limit Aware:** Includes built-in Wait nodes and logic designed to mitigate API rate limit issues from AI and research tools, enhancing workflow reliability during intensive use.  
* **Multiple-Image Generation:** Generates and adds images for each chapter, as well as a featured image for the article.  
* **Direct WordPress Integration:** Streamlines publication by automatically sending finalized, formatted content, metadata, tags, and the featured image directly to your WordPress site.  
* **Internal Linking:** Embeds internal website links strategically within each chapter and throughout the article, boosting SEO and enhancing user navigation.  
* **Integrated Backup:** Provides data security by automatically archiving key post details in Airtable and optionally saving text and image files to Google Drive.

### **Future Features**

* **“Deeper Research”:** Plans for multi-level research capabilities to enable the creation of even more comprehensive reports or e-book length content.  
* **Content Sample:** Provide content samples for the AI to learn from and mimic in terms of writing style and guidelines.  
* **Category-Specific Styling:** Aiming to allow users to define styles per category for the AI to learn and imitate, ensuring greater brand consistency.  
* **Advanced Link Insertion:** Developing more sophisticated strategies for inserting relevant internal and external links, including automatic source citation and dynamic internal link density adjustments.

#### **Requirements**

1. **Airtable Account:** [create a Airtable account](https://airtable.com/invite/r/2iOynfoh) for free.  
2. **WordPress Website:** Requires an Application Password with permissions to create posts and upload media. Must have the REST API enabled.  
3. **OpenAI API Key:** Or a key from another compatible AI provider for text and image generation (DALL-E is the default for images).  
4. **Perplexity API Key:** Or an API key for your chosen online research tool.  
5. **Google Drive:** for the optional backup feature to Google Drive.

### **Setup Step-by-Step**

1. **Import n8n Workflows:** Download the .json workflow files and import them into your n8n instance. There is one main/ “month” workflow and one sub/ “child” workflow. Name the workflows to your needs.  
2. **Get Airtable Base:** Duplicate the companion Airtable Base template.   
3. **Configure Credentials:** Add new credentials in n8n for Airtable, WordPress (use Application Password), OpenAI API, PerplexityAI API, and Google (for Drive backup).  
4. **Connect Workflow Nodes:** Open each workflow in n8n and assign the correct credential to every node that requires authentication (Airtable, WordPress, AI, HTTP Request, Google nodes).  
5. **Link the main workflow to the sub-workflow:** Access the Research Tool nodes and establish a connection between the main workflow to sub-workflow.  
6. **Configure Airtable Nodes:** Update **all** Airtable nodes across **all** workflows. **Verify** that all 'Table' and 'Field' names in the nodes **exactly match** your duplicated base.  
7. **Populate Airtable Settings:** Fill in your specific details in the Settings table of your Airtable base (Website URL, Audience, Style, Category IDs, CTA, etc.).  
8. **Test Connections:** Run manual executions on key nodes within each flow to ensure connections and basic configurations are correct before activating.  
9. **Activate Workflow:** Toggle the "Active" switch ON for the main/ “mother” workflow in your n8n list. No need to activate the sub/ “child” workflow.  
10. **Start Creating:** Go to the Create Topics table in Airtable, add a new topic, go through the process and get amazed by AI magic\!

### **Airtable Database Explanation**

Airtable is the central hub, acting as the database, user interface, and trigger mechanism for this workflow.

![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_1.jpeg](fileId:1183)

* **Structure:** The base uses linked tables to manage the process:  
  * Settings: Global configurations.  
  * Create Topics: Initiates new content pieces.  
  * Generate Chapters: Stores AI-generated chapter outlines for review.  
  * Select Chapters: Facilitates user selection of chapters to write.  
  * Generate Content: Stores AI-generated draft content for selected chapters.  
  * Select Content: Manages user approval of drafted content before final assembly.  
  * Finalize Post: Holds the compiled post (text, metadata, image info) for final review and publish trigger.  
  * Backup Post: Archives data (including live URL) of successfully published posts.  
* **Workflow Interaction:**  
  * User updates trigger fields in Airtable (e.g., sets Status='To Do' & Execute Flow=true).  
  * n8n Airtable Trigger nodes detect these specific changes.  
  * The corresponding n8n flow runs, fetching data from Airtable.  
  * AI and other tools process data and generate outputs.  
  * Results are written back to the appropriate Airtable tables/fields.  
  * User reviews results in Airtable and triggers the next stage via status AND checkbox updates.  
* **Setup:** Using the **exact** duplicated Airtable base template is mandatory, as n8n workflows expect specific table and field names.

### **Tips for Pros**

* **AI Prompts:** Modify prompts in the AI nodes to refine tone, style, format, or incorporate specific instructions.  
* **AI Models:** the workflow is optimized for OpenAI's GPT-4o model due to its consistent performance. While you can replace the AI models in the nodes with alternatives (if you have the credentials for them), keep in mind that the workflow may not function.   
* **AI Research Model:** PerplexityAI is the tool of choice for research. The "sonar" model is the default for research in this workflow due to its speed and cost-effectiveness. However, you are welcome to explore Perplexity's other models, such as the "sonar-deep-research" model, which is specifically designed for in-depth research.  
* **AI Image Model:** The default AI model for image generation is OpenAI’s Dall-E. However, the outputs of this model are not impressive. While OpenAI's 4o multimodal is expected to be available via API soon, better/ superior image quality can be achieved in the meantime by using alternative AI image models (such as FLUX.1).  
* **Airtable Base:** Add or modify fields/tables to match your specific tracking needs, but remember to update corresponding n8n nodes accordingly.  
* **3rd-party Integrations:** Replace research tools, image generators, or modify the final step to publish to a different CMS or add post-publication steps like social sharing.  
* **Error Handling:** For production reliability, incorporate an “Error Handling” workflow in n8n for this automation to catch failures and send notifications

### **Important Considerations**

* **API Rate Limits:** AI and research tools have usage limits. High volume processing might cause errors. The included **Wait** nodes help, but may need adjustment based on your API plans.    
* **Testing Costs:** API calls to AI models aren't free. To ensure the workflow runs correctly, start testing with OpenAI's GPT-4o. Once you've confirmed functionality, explore using other AI models which may be cheaper to keep costs down. Be aware that the workflow may not be as reliable with models other than GPT-4o. Keep an eye on your API provider's billing dashboard to monitor usage and costs.
* **Sequential Processing:** The workflow processes one topic fully at a time to ensure stability and manage API limits. For fully automated, parallel processing from a list, consider the alternative template: [**“\[n8n\] Content Automation Pro – with DEEP RESEARCH – WordPress Blog Automation”**](https://n8n.io/workflows/3041-wordpress-auto-blogging-pro-with-deep-research-content-automation-machine/). 
![Human_in_the_loop_content_automation_pro_with_deep_research_airtable_11.jpeg](fileId:1188)

## 📊 Basic Information

- **Workflow ID:** 3725
- **Complexity:** advanced
- **Node Count:** 159
- **Views:** 1707
- **Downloads:** 170
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3725)

## 👤 Author

- **Name:** Daniel Ng
- **Username:** @danielng

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×24)
- **if** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **limit** (×7)
- **airtable** (×34)
- **wait** (×16)
- **splitOut** (×11)
- **splitInBatches** (×8)
- **code** (×7)
- **airtableTrigger** (×4)
- **filter** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **httpRequest** (×8)
- **xml** 
- **aggregate** 
- **merge** (×3)
- **set** (×5)
- **googleDrive** (×3)
- **editImage** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **markdown** 
- **wordpress** 
- **executeWorkflowTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 159 nodes with 130 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
