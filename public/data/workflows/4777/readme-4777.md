# Transform documents into engaging LinkedIn posts with GPT-4.1 and email approval

> ## 🚀 How it works (Fonctionnement résumé) :

Ce template permet de transformer **un document (PDF, TXT, DocX...)** en **post LinkedIn engageant**, prêt à être publié ou validé par email, le tout avec l’aide d’une IA spécialisée en copywriting LinkedIn. Voici les étapes clés :

1. **Formulaire de dépôt** : L'utilisateur charge un fichier ou colle un texte.
2. **Détection du type de contenu** : Un `Switch` analyse le type de fichier (PDF, DOCX, TXT, ou texte brut). Attention pour DocX nécessite un compte Make pour transformer le doc (mais cela fonctionne aussi sans docX)
3. **Extraction du contenu** : Selon le format, le bon module d'extraction est utilisé.
4. **Génération d’un post LinkedIn** : L'IA transforme le contenu en post LinkedIn selon une méthodologie de copywriting optimisée.
5. **Validation par email** : Un email est envoyé à l’utilisateur pour approbation avec possibilité d’ajouter une image.
6. **Publication automatique** : Si l'utilisateur valide, le post est publié sur LinkedIn.

---

## ⚙️ Setup Steps :

1. **Connecte tes comptes** :

   * Google Docs OAuth
   * LinkedIn OAuth
   * OpenAI (via `gpt-4.1-mini` ou un autre modèle)
   * SMTP + IMAP pour l'envoi et la lecture d'emails

2. **Configure les champs du formulaire** dans le nœud `Form Trigger` selon ton usage.

3. **Personnalise le prompt IA** dans le nœud `AI Agent` si tu veux adapter le ton ou la méthodologie.

4. **Vérifie les emails** dans le nœud d'envoi (`Send Email`) et de lecture (`Email Trigger (IMAP)`), pour que la validation fonctionne.

5. **Teste le workflow** avec différents fichiers pour t'assurer que tous les types sont bien traités (PDF, DOCX, TXT, etc.).

---

## 🧩 Cas d’usage typiques :

* Créer des posts à partir de notes de réunion ou de rapports.
* Valoriser un article ou une publication professionnelle sous forme de contenu LinkedIn.
* Déléguer à l'IA le premier jet de ton contenu réseau.
* Bonus surveille une newsletter de ta messagerie pour proposer un post pertinent sur LinkedIn (vous pouvez supprimer il fonctionne en parallèle)
---




## 📊 Basic Information

- **Workflow ID:** 4777
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 904
- **Downloads:** 90
- **Created:** 2025/6/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4777)

## 👤 Author

- **Name:** Yannick
- **Username:** @yjoly

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **extractFromFile** (×2)
- **linkedIn** 
- **switch** (×2)
- **googleDocs** 
- **httpRequest** 
- **emailSend** 
- **emailReadImap** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
