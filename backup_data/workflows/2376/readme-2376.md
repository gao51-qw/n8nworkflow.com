# Backup tag-selected workflows to Gitlab

> Fetches workflow definitions from within n8n, selecting only the ones that have one or more (configurable) assigned tags and then:
1. Derives a suitable backup filename by reducing the workflow name to a string with alphanumeric characters and no-spaces
    * *Note: This isn't bulletproof, but works as long as workflow names aren't too crazy.*
2. Determines which workflows need to be backed up based on whether each one:
    * has been modified. (*Note: Even repositioning a node counts.*)
   ...or...
    * is new. (*Note: Renaming counts as this.*)
3. Commits JSON copies of each workflow, as necessary, to a Gitlab repository with a generated, date-stamped commit message.

## Setup
### Credentials
  * Create a Gitlab Credentials item and assign it to all Gitlab nodes.
  * Create an n8n Credentials item and assign it to the n8n node
    * Note: This was tested with **http://localhost:5678/api/v1** but should work with any reachable n8n instance and API key.

### Modify these values in the "Globals" Node
  * **gitlab_owner** - {{your gitlab account}}
  * **gitlab_project** - {{ your gitlab project name }}
  * **gitlab_workflow_path** - {{ subdirectory in the project where backup files should be saved/committed }}
  * **tags_to_match_for_backup** - {{tag(s) to match for backup selection}}
    * ***ALERT:** According to the **n8n** node's **Filters -&gt; tags** field annotations, and API documentation, this supports a CSV list of multiple tags (e.g. tag1,tag2), **but** the API behavior requires workflows to have **all-of** the listed tags, not **any-of** them.*
      * **See:** https://github.com/n8n-io/n8n/issues/10348
      * **TL/DR** - Don't expect a multiple tag list to be **more** inclusive.
      * **Possible workaround:** To match more than one tag value, duplicate the n8n node into multiple single-tag matches, or split and iterate multiple values, and merge the results.

## Possible Enhancements
* Make the branch ("Reference") for all the gitlab nodes configurable.  Fixed on all as "main" in the template.
* Add an n8n node to generate an audit and store the output in gitlab along with the backups.
* Extend the workflow at the end to create a Gitlab release/tag whenever any backup files are actually updated or created.




## 📊 Basic Information

- **Workflow ID:** 2376
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1962
- **Downloads:** 196
- **Created:** 2024/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2376)

## 👤 Author

- **Name:** Hubschrauber
- **Username:** @hubschrauber

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n** 
- **set** (×2)
- **gitlab** (×4)
- **stickyNote** (×4)
- **filter** 
- **scheduleTrigger** 
- **aggregate** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
