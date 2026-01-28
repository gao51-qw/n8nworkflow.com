# What's up Guys. I'm Luís 🙋🏻‍♂️
### Let me make one thing clear up front: this isn't just another WhatsApp summary workflow.

It’s a fully structured automation built for people who actually need to stay informed without wasting time and with total control over what gets summarized.

## What this workflow does:
- Receives messages via webhook from Evolution API
- Checks if the message is from a group or an individual
- Routes messages by type: text or audio (with automatic transcription using OpenAI)
- Stores everything in a Google Sheet organized by group, sender, timestamp and message sended
- Creates a Control Panel with a checkbox for each group. So, you decide which groups should receive summaries (this is the main differentiator about this workflow)
- Collects all messages from yesterday, groups them by chat, and sends them to GPT to generate a summary
- Sends the summary in a clean, formatted in Whatsapp every morning (fully automated).

### 🧩 How the flow is structured

This workflow is strategically divided into two independent parts to ensure clarity, organization, and easy scalability:

#### Part 1 – Message Capture and Storage

- Triggered via webhook, this part:
- Receives messages from Evolution API
- Checks if the message is from a group
- Distinguishes between text and audio (with automatic transcription)
- Stores the message in Google Sheets
-Checks if the group exists in the control tab
- If it doesn't, it creates a new row with a checkbox so you can enable/disable summaries for that group

#### Part 2 – Summary Generation and Delivery

- Scheduled to run daily at 08:00 AM or choose your preferred trigger time
- Pulls all messages from the previous day
- Groups them by chat and checks if that group is enabled for summaries
- Sends the messages to OpenAI to generate a digest
- Delivers the summary directly into the WhatsApp group using Evolution API
- This structure makes the flow easier to manage, customize, and scale — plug in other tools without
- breaking the logic.


## Tools used:
✅ **Evolution API** (*WhatsApp connection API non-official*)
✅ **Google Sheets** (*template provided)*
✅ **OpenAI** (*for transcription and summarization*)

## How to set it up:

- Set up the webhook on Evolution and connect it to n8n
- Use the included Google Sheets template. Click here to make your copy 👉🏻 [[Template] Log - Group Summary](https://docs.google.com/spreadsheets/d/1ymkWd0thcFRTtWdNrenUg1k8lAmn19ebznSHtvKHaoE/edit?usp=sharing)
- Connect your Google Sheets credentials
- Add your OpenAI API key
- (Optional) Customize the prompt and choose your preferred trigger time

## Why this workflow stands out:
📊 ***Real control panel**: enable or disable summaries per group with a single click*
🔍 Fully traceable and modular logic with clear branching and error handling
⚙️ Built for scale. Ideal for **teams, communities, or educational groups**
📬 Automatically delivers structured daily insights straight to your Whatsapp Groups

---

✅ Works on both n8n Cloud and Self-hosted
🔐 100% secure. No hacks. No shortcuts.

Want to adapt this flow for your business, team, or community?

📩 Custom requests: WhatsApp me at +5534992569346

---- 

## Português &lt;&gt; PT-BR
 
# Fala, galera! Eu sou o Luís 🙋🏻‍♂️  
### Eu já vou deixar uma coisa clara: esse **não é só mais um fluxo de resumo do WhatsApp**.

É uma automação completa, estruturada do início ao fim, feita pra quem realmente precisa se manter informado **sem perder tempo**  e com **controle total** sobre o que vai ou não pro resumo.

## O que esse fluxo faz:
- Recebe mensagens via webhook da Evolution API  
- Verifica se a mensagem é de grupo ou contato individual  
- Separa as mensagens por tipo: texto ou áudio (com transcrição automática via OpenAI)  
- Armazena tudo no Google Sheets, organizado por grupo, autor, horário e conteúdo  
- Cria um **Painel de Controle** com checkbox para cada grupo — você decide quais grupos vão ou não receber o resumo (esse é o grande diferencial do fluxo)  
- Coleta todas as mensagens do dia anterior, agrupa por grupo e envia para a IA gerar o resumo  
- Envia o resumo formatado direto no grupo do WhatsApp todas as manhãs (100% automático)

### 🧩 Como o fluxo está estruturado

Esse fluxo foi estrategicamente dividido em **duas partes independentes**, garantindo clareza, organização e escalabilidade:

#### Parte 1 – Captura e Armazenamento das Mensagens

- Ativado por webhook:
- Recebe mensagens da Evolution API  
- Verifica se é de grupo  
- Separa entre texto e áudio (com transcrição automática)  
- Armazena a mensagem no Google Sheets  
- Verifica se o grupo já existe na aba de controle  
- Caso não exista, cria uma nova linha com checkbox para ativar ou não os resumos daquele grupo  

#### Parte 2 – Geração e Envio do Resumo

- Agendado para rodar todo dia às 08:00 (ou no horário que você quiser)  
- Coleta todas as mensagens do dia anterior  
- Agrupa por grupo e valida se o grupo está habilitado no painel de controle  
- Envia as mensagens para o OpenAI gerar o resumo  
- Entrega o resumo diretamente no grupo via Evolution API  
- Essa estrutura torna o fluxo muito mais fácil de manter, adaptar e escalar — pode integrar novas ferramentas sem bagunçar nada

## Ferramentas utilizadas:
✅ **Evolution API** (*conexão com o WhatsApp, API não oficial*)  
✅ **Google Sheets** (*modelo incluso*)  
✅ **OpenAI** (*para transcrição e geração do resumo*)

## Como configurar:

- Configure o webhook no Evolution e conecte ao n8n  
- Use a planilha modelo que acompanha esse fluxo. Faça sua cópia clicando aqui 👉🏻 [[Template] Log - Group Summary](https://docs.google.com/spreadsheets/d/1ymkWd0thcFRTtWdNrenUg1k8lAmn19ebznSHtvKHaoE/edit?usp=sharing)  
- Conecte suas credenciais do Google Sheets  
- Adicione sua chave da OpenAI  
- (Opcional) Personalize o prompt da IA e defina o melhor horário de execução

## Por que esse fluxo se destaca:
📊 ***Painel de controle real**: ative ou desative os resumos por grupo com 1 clique*  
🔍 Lógica rastreável e modular, com ramificações claras e tratamento de exceções  
⚙️ Pronto pra escalar. Ideal para **times, comunidades ou grupos educacionais**  
📬 Entrega automática de resumos diários direto nos grupos do WhatsApp

---

✅ Compatível com n8n Cloud e Self-hosted  
🔐 100% seguro. Sem gambiarra. Sem atalhos.

Quer adaptar esse fluxo para seu negócio, time ou comunidade?

📩 Solicitações personalizadas: me chama no WhatsApp +5534992569346
