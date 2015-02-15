# SecretFancyAPI
#### Send anonymous love notes. Get matched if the feeling is mutual.

![It's a match!](http://secretfancy.com/images/match.jpg)

This is a GSD (Get S**t Done) project that I did solo in the three days leading up to Valentine's Day 2015. My goal was to provide a simple, anonymous way for 'secret admirers' to share their feelings, and provide a mechanism through which they could be matched with the recipient _only_ if the feeling is mutual.

------

#### Tech Used

__API:__
* [Node](https://github.com/joyent/node)
* [Express](https://github.com/strongloop/express)
* [MongoDB](https://github.com/mongodb/mongo)
* [SendGrid](https://github.com/sendgrid/sendgrid-nodejs) (for sending email)
* [Twilio](https://github.com/twilio/twilio-node) (for sending texts)

__[Frontend](https://github.com/bferioli/SecretFancy):__
* JavaScript
* [jQuery](https://github.com/jquery/jquery)
* [Backbone](https://github.com/jashkenas/backbone)
* [Handlebars](https://github.com/wycats/handlebars.js)
* [RequireJS](https://github.com/jrburke/requirejs)
* Facebook Authentication

------

#### To-do

I acheived my goal of getting the app built and production-ready in three days, but of course there are still some things I'd like to do:

* ✓ ~~Externalize HTML email templates~~
* Change rate limiting from all time to per day
* Include Linux service script
