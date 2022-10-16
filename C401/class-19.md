# Notes for Class 19

## [AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

1. What is the difference between SQS and SNS?
    * distributed publish-subscribe service, allowing to push notification to large number of recipients
    * distributed queuing service, messages are not pushed to receivers, they must poll
2. What are some use cases for both SNS and SQS?
    * SNS
        * publish and consume batches of messages
        * multiple subscribers are needed
    * SQS
        * simple queue
        * 1 subscriber needed

## [AWS SNS and SQS](https://www.youtube.com/watch?v=mXk0MNjlO7A)

1. Describe how to use SQS and SNS in a “fan out” pattern.
    * publish topics to many subscribers, messages broadcast to one-to-many arrangement
2. Explain how “push notifications” work, using SNS.
    * looks like SMS text messages, but only to users who installed app

## [SQS and SNS Basics](https://www.youtube.com/watch?v=UesxWuZMZqI)

1. How might a large scale, distributed application make use of a Queue system like SQS?
    * queue would allow to send massive amounts of users messages, but sometimes there are duplicates and/or out of order messages

### Bookmark and Review

* [SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
* [SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)
