'use strict';

var Alexa = require('alexa-sdk'),
  APP_ID = "amzn1.ask.skill.2503b285-f3cb-43ce-91cf-820e23bcb60c";

var handlers = {
  'LaunchRequest': function() {
    this.emit('AboutPapaBear');
  },
  'GetAboutPapaBearIntent': function() {
    this.emit('AboutPapaBear');
  },
  'AboutPapaBear': function() {
    var speechOutput = "<s>Papa Bear is a Yorkie from Los Angeles!</s> <s>Saying goes, His bark is worst than his bite.</s> <s>But those people haven't met Papa Bear yet!</s> <s>Squirrels better watch out, RAWR!</s>";
    var cardTitle = "About Papa Bear";
    this.emit(':tellWithCard', speechOutput, cardTitle, speechOutput)
  },
  'AMAZON.HelpIntent': function() {
    var speechOutput = "You can say tell me about Papa Bear, or, you can say exit... What can I help you with?";
    var reprompt = "What can I help you with?";
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function() {
    this.emit(':tell', 'Goodbye!');
  },
  'AMAZON.StopIntent': function() {
    this.emit(':tell', 'Goodbye!');
  }
};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
