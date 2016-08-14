Demo chat
===

**Attention** : les sources du front-end ne m'appartiennent pas. Voici les sources : [sources](https://codepen.io/blaketarter/pen/emWbYm).

## Socket.io

* `socket.emit` : permet d'envoyer un message au client
* `socket.broadcast.emit` : permet d'envoyer un message à TOUS les clients

[Socket.io](http://socket.io)

## Client

Les fichiers du client se trouvent dans le dossier public. J'ai utilisé [http-server](https://www.npmjs.com/package/http-server) pour servir ces fichiers.

`io` est défini dans le script socket.io client importé depuis le HTML.

### Connexion au serveur (local)

```js
const socket = io.connect("localhost:8100")
```

### Mise a jour du compteur d'utilisateur

```js
socket.on("counter", val => {
  $("#counter").text(val)
})
```

### Envoi d'un message

```js
socket.emit("message", text)
```

### Réception d'un message

```js
socket.on("message", message => {
  messenger.recieve(message)
})
```

## Server

Il faut installer les dépendances avec NPM. Taper la commande suivante dans le dossier du projet :
```shell
npm install
```

Pour lancer le serveur il suffit de taper la commande suivante :
```shell
node server.js
```

Le serveur (websocket) sera accessible sur le port 8100.
