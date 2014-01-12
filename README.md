# Tweebot Image Uploader
### a Sails application

This is a dead simple image uploader ready to serve images to Tweetbot.

Clone the repo and 

```
npm install

sails lift

```

Set for production and port 80.

This will just use the sails disk, but if you want persistent storage you can use one of the sails adapters to have it.

Set your Tweetbot Custom Image service to "http://your.url/photos/create"" and you are good to go.