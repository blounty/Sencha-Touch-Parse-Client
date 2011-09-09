app.views.Viewport = Ext.extend Ext.Panel, {
	fullscreen: true,
	layout: 'card',
	cardSwitchAnimation: 'slide',
	initComponent: ->
		Ext.apply app.views, {
			Home: new app.views.Home()
		}
		Ext.apply @, {
			items: [
				app.views.Home
				]
		}
		app.views.Viewport.superclass.initComponent.apply @, arguments
}