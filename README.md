Demo chat
===

**Attention** : les sources du front-end ne m'appartiennent pas. Voici les sources : [sources](https://codepen.io/blaketarter/pen/emWbYm).

## Socket.io

* `socket.emit` : permet d'envoyer un message au client
* `socket.broadcast.emit` : permet d'envoyer un message a TOUS les clients

[Socket.io](http://socket.io)

## Client

Les fichiers du client se trouve dans le dossier public. J'ai utilisé [http-server](https://www.npmjs.com/package/http-server) pour servir ces fichiers.

`io` est définit dans le script socket.io client importé depuis le HTML.

### Connexion au serveur (local)

```JavaScript
const socket = io.connect("localhost:8100")
```

### Mise a jour du compteur d'utilisateur

```JavaScript
socket.on("counter", val => {
  $("#counter").text(val)
})
```

### Envoi d'un message

```JavaScript
socket.emit("message", text)
```

### Reception d'un message

```JavaScript
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
