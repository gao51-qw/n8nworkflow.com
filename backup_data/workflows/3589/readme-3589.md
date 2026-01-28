# MCP AI agent Google Calendar - create, update & manage events

> ### Hi! I’m Amanda :) 💖 
I created this sweet little workflow with lots of love and care, just for you who wants to manage your Google Calendar in a smart and gentle way 💌

This AI-powered agent connects with MCP (Multi-Channel Protocol) and understands natural language like “book a meeting tomorrow at 3pm”, “reschedule my call to Monday”, or “what events do I have on Wednesday?” — and it does everything quietly and beautifully in your calendar 🧸

---

## 💡 What this lovely agent does

- 🗓️ Creates new events in your Google Calendar (with or without guests)  
- ✏️ Updates existing events with new times or details  
- 🧹 Deletes events you no longer need  
- 🔍 Retrieves scheduled events by date  
- 🤖 Works through GPT-4o or any AI via MCP Agent

---

## ⚙️ How to set it up (gently and step-by-step)

1. **Webhook** is ready for MCP messages at `POST /mcp/calendar`  
2. **Connect your Google Calendar account** using OAuth2 inside n8n  
3. **Link it to your favorite AI tool** (like LangChain, Typebot, etc.) that can talk to the MCP agent  
4. All details like title, time, date, and guests are parsed automatically from natural language 💫

---

## ✨ Requirements

- Google Calendar connected to n8n  
- n8n instance (Cloud or Self-hosted — both are supported!)  
- An AI interface that talks to the MCP agent (like LangChain or Typebot)  
- MCP Trigger API set up in your n8n environment

---

This agent is perfect for therapists, consultants, coaches, small teams, or anyone who wants to keep their calendar flowing naturally and peacefully with a little help from AI 💆‍♀️🧠

---

## Want something customized just for you?
### Chat with me 💻💛 [Chat via WhatsApp](https://wa.me/5517991557874) (+55 17 99155-7874)
.
.
## Tradução para Português:
### 💖 Oi! Eu sou a Amanda :)

Esse fluxinho aqui foi feito com muito cuidado pra você que quer automatizar sua agenda do Google Calendar de forma inteligente, simples e com muito carinho 💌

Ele funciona como um agente que conversa com outro sistema de IA (via MCP) e consegue entender pedidos como “agende uma consulta amanhã às 15h”, “remarque a reunião para segunda”, ou “quais eventos tenho na quarta?” — tudo isso feito direto no seu calendário, sem você precisar abrir nada 🧸

---

## 💡 O que ele faz com amor

- 🗓️ Cria eventos no seu Google Calendar (com ou sem convidados)  
- ✏️ Atualiza eventos já existentes com novos horários  
- 🧹 Exclui eventos que você não precisa mais  
- 🔍 Busca seus compromissos com base em datas específicas  
- ❤️ Tudo isso com suporte ao modelo GPT-4o via agente MCP

---

## ⚙️ Como configurar (bem facinho, prometo!)

1. **Conecte o webhook**: o endpoint do MCP já vem prontinho com o caminho `mcp/calendar`  
2. **Conecte sua conta do Google Calendar** usando o OAuth2 no n8n  
3. **Adicione a integração do MCP Trigger** com seu sistema de IA (LangChain, Typebot, etc.)  
4. Todos os campos como título, data, hora e convidados são extraídos automaticamente via IA 💫

---

## ✨ Requisitos

- Conta Google Calendar integrada ao n8n  
- Instância n8n (Cloud ou Self-hosted)  
- Integração com uma IA que converse com o MCP Agent (como LangChain)  
- Acesso à API MCP ativado no n8n

---

Esse agente é ideal pra psicólogos, consultores, times de atendimento, terapeutas — ou qualquer pessoa fofa que quer deixar sua agenda fluindo sozinha, com a ajuda de um toque de inteligência 💆‍♀️🧠

---

## Quer algo feito só pra você?
### Fala comigo com carinho 💻💛 [Falar no WhatsApp](https://wa.me/5517991557874) (+55 17 99155-7874)

## 📊 Basic Information

- **Workflow ID:** 3589
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 2082
- **Downloads:** 208
- **Created:** 2025/4/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3589)

## 👤 Author

- **Name:** Amanda Benks
- **Username:** @amanda

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **googleCalendarTool** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
