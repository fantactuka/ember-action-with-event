import Ember from 'ember';

export default {
  name: 'ember-action-with-event',
  initialize: function() {

    // Override {{action}} helper so that the last argument being sent to the controller/router
    // is original event object
    var ActionHelper = Ember.Handlebars.ActionHelper,
      originalRegisterAction = ActionHelper.registerAction;

    ActionHelper.registerAction = function(actionNameOrPath, options) {
      var actionId = originalRegisterAction.apply(this, arguments),
        originalRegisteredActionHandler = ActionHelper.registeredActions[actionId].handler;

      ActionHelper.registeredActions[actionId].handler = function handleRegisteredAction(event) {
        options.parameters.push(event);
        return originalRegisteredActionHandler.apply(this, arguments);
      };

      return actionId;
    };
  }
}
