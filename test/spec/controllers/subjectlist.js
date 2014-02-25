'use strict';

describe('Controller: SubjectlistCtrl', function () {

  // load the controller's module
  beforeEach(module('mddtestSiteApp'));

  var SubjectlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubjectlistCtrl = $controller('SubjectlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
