'use strict';

describe('Service: checklogin', function () {

  // load the service's module
  beforeEach(module('mddtestSiteApp'));

  // instantiate service
  var checklogin;
  beforeEach(inject(function (_checklogin_) {
    checklogin = _checklogin_;
  }));

  it('should do something', function () {
    expect(!!checklogin).toBe(true);
  });

});
