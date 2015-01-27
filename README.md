# ember-action-with-event
Adding original event object into {{action}} helper handlers, which is no longer available by default (see https://github.com/emberjs/ember.js/issues/1684)

## Installation
Put ember-action-with-event.js into `app/initializers` folder

## Usage example
```hbs
<button {{action "save" param1 param2}}>Save</button>
```

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {
    save(param1, param2, event) {
      
    }
  }
  
});
```
