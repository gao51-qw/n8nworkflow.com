# Enviar miembros del CMS Ghost hacia Newsletter Sendy

> # Ghost + Sendy Integration
****

Está es una integración del CMS Ghost hacia Sendy

* Sendy ( [www.sendy.co](www.sendy.co) )
* Ghost ( [www.ghost.org](www.ghost.org) )

Con esta integración podrás importar los miembros del CMS Ghost en su nueva versión que incluye la parte de Membresía hacía el Software de newsletter sendy.

Está integración además nos avisa si se ha registrado un nuevo miembro via telegram.

Para realizar esta customización es necesaria la creación de una custom integration en Ghost.

Para ello desde el panel de Administración vamos a **CUSTOM INTEGRATIONS** / **+ Add custom Integration**

Una vez allí nos solicitará un nombre le ponemos el que queramos y añadimos un nuevo Hook:

![image.png](fileId:210)

En Target URL debe ir La url que nos genera nuestro webhook dentro de n8n:

![Captura de pantalla 20200903 a las 15.27.23.png](fileId:211)

Pegamos la URL y acamos de rellenar los datos del **HTTP REQUEST1** con los datos de nuestra lista rellenando los campos.

* api_key
* list

Que encontaras en tú instalación de Sendy

Por último faltara añadir las credenciales de Telegram de Nuestro BOT 
( [https://docs.n8n.io/credentials/telegram/](https://docs.n8n.io/credentials/telegram/) ) e indicar el grupo o usuario donde queremos que notifique.

Saludos,



## 📊 Basic Information

- **Workflow ID:** 629
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 546
- **Downloads:** 54
- **Created:** 2020/9/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/629)

## 👤 Author

- **Name:** The { AI } rtist
- **Username:** @tuxed

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** 
- **webhook** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
