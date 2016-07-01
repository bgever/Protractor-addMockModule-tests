angular
  .module('app', [])
  .service('svc', function(){
     this.getMessage = function(){
         // Return the default value which the Protractor mock will override.
         return "default";
     }
  })
  .controller('view', function(svc){
    this.getMessage = function(){
        // Get the message from the service.
        return svc.getMessage();
    };
  });