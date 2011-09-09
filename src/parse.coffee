window.Parse = class Parse
	constructor: (applicationId, masterKey) ->
		@applicationId = applicationId
		@masterKey = masterKey
		@endpoint = 'https://api.parse.com/1/classes/'
	create: (args) ->
		Ext.Ajax.request {
			url: @endpoint + args.className
			method: 'POST'
			jsonData: args.object
			success: ((result) -> args.success (JSON.parse result.responseText))
			error: args.error
			headers : { Authorization : "Basic " + (Base64.encode @applicationId + ":" + @masterKey) }
		}
	get: (args) ->
		Ext.Ajax.request {
			url: @endpoint + args.className + '/' + args.objectId
			method: 'GET'
			success: ((result) -> args.success (JSON.parse result.responseText))
			error: args.error
			headers : { Authorization : "Basic " + (Base64.encode @applicationId + ":" + @masterKey) }
		}
	update: (args) ->
		Ext.Ajax.request {
			url: @endpoint + args.className + '/' + args.objectId
			method: 'POST'
			jsonData: args.object
			success: ((result) -> args.success (JSON.parse result.responseText))
			error: args.error
			headers: 
				{ 
					Authorization : "Basic " + (Base64.encode @applicationId + ":" + @masterKey)
					'X-HTTP-Method-Override' : 'PUT'
				}
		}
	delete: (args) ->
		Ext.Ajax.request {
			url: @endpoint + args.className + '/' + args.objectId
			method: 'POST'
			success: ((result) -> args.success (JSON.parse result.responseText))
			error: args.error
			headers: 
				{ 
					Authorization : "Basic " + (Base64.encode @applicationId + ":" + @masterKey)
					'X-HTTP-Method-Override' : 'DELETE'
				}
		}
	







