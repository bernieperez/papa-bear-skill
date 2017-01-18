'use strict';

var AlexaSkill = require('./lib/AlexaSkill'),
    APP_ID = "amzn1.ask.skill.2503b285-f3cb-43ce-91cf-820e23bcb60c";

var PapaBear = function() {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill base skill
PapaBear.prototype = Object.create(AlexaSkill.prototype);
PapaBear.prototype.constructor = PapaBear;

PapaBear.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
    console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleAboutPapaBearRequest(response);
};

PapaBear.prototype.intentHandlers = {
    "GetAboutPapaBearIntent": function(intent, session, response) {
        console.log("intentHandlers sessionId: " + session.sessionId);
        handleAboutPapaBearRequest(response);
    },

    "AMAZON.HelpIntent": function(intent, session, response) {
        response.ask("You can say tell me about Papa Bear, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function(intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function(intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

function handleAboutPapaBearRequest(response) {
    var speechOutput = "Papa Bear is a Yorkie from Los Angeles! Saying goes, \"His bark is worst than his bite.\" But they haven't met him yet! RAWR";
    var cardTitle = "About Papa Bear";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}

exports.handler = function(event, context) {
    var papaBear = new PapaBear();
    papaBear.execute(event, context);
};
