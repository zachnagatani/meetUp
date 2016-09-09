(function() {
	'use strict';

	meetUp.service('idbService', [function() {
		var self = this;
		this.dbPromise = idb.open('test-db', 1, function(upgradeDb) {
			var keyValStore = upgradeDb.createObjectStore('keyval');
			keyValStore.put('hello', 'world');
		});
	}]);
})();