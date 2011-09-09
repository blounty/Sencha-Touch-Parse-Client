Ext.regApplication
	name: 'app',
	launch: ->
		@launched = true
		@views.viewport = new @views.Viewport()