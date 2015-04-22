fdbk = {}
fdbk.actions = {
  init: function(action) {
    $(document).ready(function() {
      for (var i=0; i < action.length; i++) {
        var name        = action[i];
        var behavior    = fdbk.actions[name];

        behavior.init()
      }
    })
  }
}