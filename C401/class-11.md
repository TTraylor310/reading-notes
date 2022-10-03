# Notes for Class 11

## [Event Driven Programming](https://www.digitalocean.com/community/tutorials/nodejs-event-driven-programming)

1. What native Node.js module allows us to get started with Event Driven Programming?
    * EventEmitter
2. What is the value of Object Oriented Programming used in tandem with Event Driven Programming?
    * It changes the way functions and results of actions are called. Instead of the new function referencing and using another function of another area of code, it sends out an 'event' which is being 'listened for' by another function/user/tool to make the event occur based off that 'event'
3. Consider your knowledge of Event Driven Programming in the Web Browser, now explain to a non-technical friend how  Event Driven Programming might be useful on the backend using Node.js.
    * This Event Driven Programming helps the backside work more efficiently in returning information because of the basic structure of how information is referenced inside itself.

### Bookmark and Review

* [Node Docs: events](https://nodejs.org/api/events.html)

#### Important Notes

* _it would be a challenge to remove the listener for the message event from outside of the userJoined function due to the fact that it’s an anonymous function declared within a closure. In this case the only place we would be able to directly reference this method would be in the EventEmitter Object itself. This would be impractical if we ever had more than one listener registered to a single event as we would then have to figure out a way to decipher which of the listeners is our intended target._
