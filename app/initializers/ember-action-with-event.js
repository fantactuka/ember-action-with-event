import Ember from 'ember';

export default {
  name: 'action-with-event',
  initialize: function() {

    // Override {{action}} helper so that the last argument being sent to the controller/router
    // is original event object
    var ActionHelper = Ember.Handlebars.ActionHelper,
      originalRegisterAction = Ember.Handlebars.ActionHelper.registerAction;

    Ember.Handlebars.ActionHelper.registerAction = function(actionNameOrPath, options) {
      var actionId = originalRegisterAction.apply(this, arguments),
        originalRegisteredActionHandler = ActionHelper.registeredActions[actionId].handler;

      ActionHelper.registeredActions[actionId].handler = function handleRegisteredAction(event) {
        options.parameters.push(event);
        originalRegisteredActionHandler.call(this, event);
      };

      return actionId;
    };
  }
}
