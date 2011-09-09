(function() {
  app.views.Home = Ext.extend(Ext.Panel, {
    id: 'home',
    fullscreen: true,
    dockedItems: [
      {
        dock: 'top',
        xtype: 'toolbar',
        title: 'Sencha and Parse',
        items: [
          {
            xtype: 'spacer'
          }
        ]
      }
    ],
    items: [
      {
        html: 'Hello Parse from Sencha'
      }, {
        xtype: 'button',
        text: 'create person',
        handler: function() {
          var parse;
          app.views.Home.lastObject = {
            gender: 'male',
            firstName: 'James',
            lastName: 'Jones'
          };
          parse = app.views.Home.getParseClient();
          return parse.create({
            object: app.views.Home.lastObject,
            success: app.views.Home.objectCreated,
            error: app.views.Home.objectCreatedError,
            className: 'Person'
          });
        }
      }, {
        xtype: 'button',
        text: 'get last person',
        handler: function() {
          var parse;
          parse = app.views.Home.getParseClient();
          return parse.get({
            objectId: app.views.Home.lastObjectId,
            success: app.views.Home.objectRetrieved,
            error: app.views.Home.objectRetrievedError,
            className: 'Person'
          });
        }
      }, {
        xtype: 'button',
        text: 'update last person',
        handler: function() {
          var parse;
          parse = app.views.Home.getParseClient();
          app.views.Home.lastObject.firstName = 'Alex';
          return parse.update({
            objectId: app.views.Home.lastObjectId,
            object: app.views.Home.lastObject,
            success: app.views.Home.objectUpdated,
            error: app.views.Home.objectUpdatedError,
            className: 'Person'
          });
        }
      }, {
        xtype: 'button',
        text: 'delete last person',
        handler: function() {
          var parse;
          parse = app.views.Home.getParseClient();
          return parse["delete"]({
            objectId: app.views.Home.lastObjectId,
            success: app.views.Home.objectDeleted,
            error: app.views.Home.objectDeletedError,
            className: 'Person'
          });
        }
      }
    ],
    getParseClient: function() {
      if (!app.views.Home.parse) {
        app.views.Home.parse = new Parse('YourApplicationID', 'YourMasterKey');
      }
      return app.views.Home.parse;
    },
    objectCreated: function(result) {
      app.views.Home.lastObjectId = result.objectId;
      return alert("objectId created " + app.views.Home.lastObjectId);
    },
    objectCreatedError: function(result) {
      return alert("A creation error occured");
    },
    objectRetrieved: function(result) {
      return alert(result.firstName + ' ' + result.lastName);
    },
    objectRetrievedError: function(result) {
      return alert("A retrieval error occured");
    },
    objectUpdated: function(result) {
      return alert(app.views.Home.lastObject.firstName + ' ' + app.views.Home.lastObject.lastName);
    },
    objectUpdatedError: function(result) {
      return alert("An update error occured");
    },
    objectDeleted: function(result) {
      return alert("object " + app.views.Home.lastObjectId + " deleted");
    },
    objectUpdatedError: function(result) {
      return alert("A delete error occured");
    }
  });
}).call(this);
