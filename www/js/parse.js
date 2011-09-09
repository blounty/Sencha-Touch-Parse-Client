(function() {
  var Parse;
  window.Parse = Parse = (function() {
    function Parse(applicationId, masterKey) {
      this.applicationId = applicationId;
      this.masterKey = masterKey;
      this.endpoint = 'https://api.parse.com/1/classes/';
    }
    Parse.prototype.create = function(args) {
      return Ext.Ajax.request({
        url: this.endpoint + args.className,
        method: 'POST',
        jsonData: args.object,
        success: (function(result) {
          return args.success(JSON.parse(result.responseText));
        }),
        error: args.error,
        headers: {
          Authorization: "Basic " + (Base64.encode(this.applicationId + ":" + this.masterKey))
        }
      });
    };
    Parse.prototype.get = function(args) {
      return Ext.Ajax.request({
        url: this.endpoint + args.className + '/' + args.objectId,
        method: 'GET',
        success: (function(result) {
          return args.success(JSON.parse(result.responseText));
        }),
        error: args.error,
        headers: {
          Authorization: "Basic " + (Base64.encode(this.applicationId + ":" + this.masterKey))
        }
      });
    };
    Parse.prototype.update = function(args) {
      return Ext.Ajax.request({
        url: this.endpoint + args.className + '/' + args.objectId,
        method: 'POST',
        jsonData: args.object,
        success: (function(result) {
          return args.success(JSON.parse(result.responseText));
        }),
        error: args.error,
        headers: {
          Authorization: "Basic " + (Base64.encode(this.applicationId + ":" + this.masterKey)),
          'X-HTTP-Method-Override': 'PUT'
        }
      });
    };
    Parse.prototype["delete"] = function(args) {
      return Ext.Ajax.request({
        url: this.endpoint + args.className + '/' + args.objectId,
        method: 'POST',
        success: (function(result) {
          return args.success(JSON.parse(result.responseText));
        }),
        error: args.error,
        headers: {
          Authorization: "Basic " + (Base64.encode(this.applicationId + ":" + this.masterKey)),
          'X-HTTP-Method-Override': 'DELETE'
        }
      });
    };
    return Parse;
  })();
}).call(this);
