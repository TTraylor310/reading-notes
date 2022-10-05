# Notes for Class 13

## [Socket.io Chat Example](https://socket.io/get-started/chat/)

1. Explain to a non-technical recruiter what the Chat Example (above) does.
    * allows users to connect together or in a room to allow for instant updates when information is pushed to the 'room' or between participants
2. What proof of life are we getting on the backend from the above app?
    * See when a user connects and disconnects by running node
3. Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?
    * `broadcast.emit();`

## [Rooms](https://socket.io/docs/v4/rooms)

1. What is a room and how might a room be useful?
    * separates clients (users) so information logged and displayed can be filtered
2. How do you join a room?
    * `socket.join("some room");`
3. How do you leave a room?
    * `sock.on("disconnect => {socket.room})` will leave the socket connected

## [Namespaces](https://socket.io/docs/v4/namespaces/)

1. What is a Namespace and what does it allow you to do?
    * allows you to split 'logic of your application' over a single connection.
        * basically allows  you to send all the info in one packet then split it up when you need to send it to specific rooms or spaces
2. Each namespace potentially has its own what? (hint: 3 things)
    * Event Handlers
    * Rooms
    * Middleware
3. Discuss a possible use case for separate namespaces
    * ways to limit access to sensitive information for people in a group or company

### Bookmark and Review

* [Socket.io Emit Cheatsheet](https://socket.io/docs/v4/emit-cheatsheet/)
