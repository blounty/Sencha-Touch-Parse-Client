(function() {
  Ext.regApplication({
    name: 'app',
    launch: function() {
      this.launched = true;
      return this.views.viewport = new this.views.Viewport();
    }
  });
}).call(this);
