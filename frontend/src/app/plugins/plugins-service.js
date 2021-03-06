/**
 * This file contains all necessary Angular controller definitions for 'frontend.admin.login-history' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  angular.module('frontend.plugins')
    .service('PluginsService', [
        '$log', '$state','$http','BackendConfig',
      function( $log, $state, $http,BackendConfig) {

          return {

            load : function(query) {
                return $http.get(BackendConfig.url + '/kong/plugins',{
                    params: query
                })
            },

            add : function(data) {
                return $http.post(BackendConfig.url + '/kong/plugins',data)
            },

            update : function(id,data) {
              return $http.patch(BackendConfig.url + '/kong/plugins/' + id,data)
            },

            fetch : function(pluginId) {
                return $http.get(BackendConfig.url + '/kong/plugins/' + pluginId)
            },

            schema : function(name) {
                 return $http.get(BackendConfig.url + '/kong/plugins/schema/' + name)
            },

            enabled : function() {
                return $http.get(BackendConfig.url + '/kong/plugins/enabled');
            },

            delete : function(id) {
                return $http.delete(BackendConfig.url + '/kong/plugins/' + id)
            }
          }
      }
    ])
  ;
}());
