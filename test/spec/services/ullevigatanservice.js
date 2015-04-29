'use strict';

describe('Service: ullevigatanService', function () {

  // load the service's module
  beforeEach(module('lunchUlleviApp'));

  // instantiate service
  var ullevigatanService;
  beforeEach(inject(function (_ullevigatanService_) {
    ullevigatanService = _ullevigatanService_;
  }));

  it('should do something', function () {
    expect(!!ullevigatanService).toBe(true);
  });

});
