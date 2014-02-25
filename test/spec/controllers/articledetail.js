'use strict';

describe('Controller: ArticledetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mddtestSiteApp'));

  var ArticledetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticledetailCtrl = $controller('ArticledetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
