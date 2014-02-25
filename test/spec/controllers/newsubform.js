'use strict';

describe('Controller: NewsubformCtrl', function () {

  // load the controller's module
  beforeEach(module('mddtestSiteApp'));

  var NewsubformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsubformCtrl = $controller('NewsubformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
