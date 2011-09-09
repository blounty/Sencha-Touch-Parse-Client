app.views.Home = Ext.extend Ext.Panel, {
	id: 'home'
	fullscreen: true
	dockedItems: [
		dock: 'top'
		xtype: 'toolbar'
		title: 'Sencha and Parse'
		items:[
			{
				xtype: 'spacer'
			}
		]
	]
	items:[ 
		{
			html: 'Hello Parse from Sencha'
		}
		{
			xtype: 'button'
			text: 'create person'
			handler: ->
				app.views.Home.lastObject = {
					gender: 'male'
					firstName: 'James'
					lastName: 'Jones'
				}
				parse = app.views.Home.getParseClient()
				parse.create {
					object: app.views.Home.lastObject
					success: app.views.Home.objectCreated
					error: app.views.Home.objectCreatedError
					className: 'Person'
				}
		}
		{
			xtype: 'button'
			text: 'get last person'
			handler: ->
				parse = app.views.Home.getParseClient()
				parse.get {
					objectId: app.views.Home.lastObjectId
					success: app.views.Home.objectRetrieved
					error: app.views.Home.objectRetrievedError
					className: 'Person'
				}
		}
		{
			xtype: 'button'
			text: 'update last person'
			handler: ->
				parse = app.views.Home.getParseClient()
				app.views.Home.lastObject.firstName = 'Alex'
				parse.update {
					objectId: app.views.Home.lastObjectId
					object: app.views.Home.lastObject
					success: app.views.Home.objectUpdated
					error: app.views.Home.objectUpdatedError
					className: 'Person'
				}
		}
		{
			xtype: 'button'
			text: 'delete last person'
			handler: ->
				parse = app.views.Home.getParseClient()
				parse.delete {
					objectId: app.views.Home.lastObjectId
					success: app.views.Home.objectDeleted
					error: app.views.Home.objectDeletedError
					className: 'Person'
				}
		}
	]
	getParseClient: ->
		if !app.views.Home.parse
			app.views.Home.parse = new Parse 'YourApplicationID', 'YourMasterKey'
		app.views.Home.parse
	objectCreated: (result) ->
		app.views.Home.lastObjectId = result.objectId
		alert "objectId created " + app.views.Home.lastObjectId
	objectCreatedError: (result) ->
		alert "A creation error occured"
	objectRetrieved: (result) ->
		alert result.firstName + ' ' + result.lastName
	objectRetrievedError: (result) ->
		alert "A retrieval error occured"
	objectUpdated: (result) ->
		alert app.views.Home.lastObject.firstName + ' ' + app.views.Home.lastObject.lastName
	objectUpdatedError: (result) ->
		alert "An update error occured"
	objectDeleted: (result) ->
		alert "object " + app.views.Home.lastObjectId + " deleted"
	objectUpdatedError: (result) ->
		alert "A delete error occured"
}	