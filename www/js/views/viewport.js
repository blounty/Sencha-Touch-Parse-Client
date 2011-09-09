(function() {
  app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
      Ext.apply(app.views, {
        Home: new app.views.Home()
      });
      Ext.apply(this, {
        items: [app.views.Home]
      });
      return app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
  });
}).call(this);
