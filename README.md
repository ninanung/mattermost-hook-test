# mattermost-hook

# What is this

This is a test project for Mattermost webhooks. About...  
> slash command  
> incoming webhook  
> outgoing webhook  
> interactive message button  
> interactive dialog  

# Install

You have to install `Node.js` and `npm` first.  
```
git clone https://github.com/ninanung/mattermost-hook.git
cd mattermost-hook
npm install
```

# Routes

> /test : GET, send `Attachment` data to the mattermost server.  
> /test/incoming : GET, request(POST) to incoming webhook.  
> /test/outgoing : POST, get data from outgoing webhook and print it.  
> /test/button : POST, get data from interactive message button and print it.  

> /dialog : GET, request(POST) to open the dialog.  
> /dialog/submit : POST, get data from dialog and print it.  

# Setting

1. Open `constant.js` file and change `MATTERMOST_SERVER_URL`, `BOT_SERVER_URL`, `CALLBACK_URL` and `TOKEN` to your own value.  
2. Make your `Integrations` at the Mattermost and connect to this test server.  

# Start server

```
npm start
```