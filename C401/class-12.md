# Notes for Class 12

## [Web Sockets](https://en.wikipedia.org/wiki/WebSocket)

1. What is a Web Socket?
    * computer communications protocol which allows for computers to talk to each other
2. Describe the Web Socket request/response handshake and what happens once the connection is established.
    * Request from client to server, when returned to client, _web socket_ is bridged
3. Web Sockets provide a standardized way for the server to send content to a client without first receiving a ____ from that client.
    * request

## [Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)

1. What does the event handler io.on() do?
    * uses socket object to handle connections and disconnects
2. Describe some possible proof of life or proof that the code works as expected
    * logs to console when uses connect and disconnect
3. What does socket.emit() do?
    * create custom events

## [Socket.io vs Web Sockets](https://www.educba.com/websocket-vs-socket-io/)

1. What is the difference between WebSocket and Socket.IO? (think Git and GitHub, or OAuth and Auth0).
    * WebSocket is always open and allow for traffic flow via the information (port/server/host/etc)
    * Socket.IO is a library to control and regulate the WebSocket and allows additional features based on events
2. When would you use Socket.IO?
    * set up work based events on server side (Connect, message, disconnect, ping, and reconnect)
3. When would you use WebSockets?
    * Constantly. To connect to different parts of internet and get updates in real time without the need to request

### Videos

* [OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)

1. What are a couple of key takeaways from this video?
    * OSI: Open System Interconnection Model: how data is transferred from one computer to another
    * Application
    * Presentation
    * Session
    * Transport
    * Network
    * Data Link
    * Physical

* [TCP Handshakes Explained](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

1. Translate the gist of this video to a non-technical friend
    * 1st: client sends packet to _request_ a connection
    * 2nd: server _responds_ with packet, confirms the connection AND _requests_ an acknowledgement
    * 3rd: client sends packet, which acknowledges the connection

#### Bookmark and Review

* [Socket.io Documentation](https://socket.io/docs/)
* [Socket.io Server API](https://socket.io/docs/server-api)
* [Socket.io Client API](https://socket.io/docs/client-api)
* [Socket Testing Tool](https://amritb.github.io/socketio-client-tool/)
