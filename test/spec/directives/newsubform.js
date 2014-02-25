'use strict';

describe('Directive: newsubform', function () {

  // load the directive's module
  beforeEach(module('mddtestSiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<newsubform></newsubform>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newsubform directive');
  }));
});
