-- ParkingStgallen SDK exists test

local sdk = require("parking-stgallen_sdk")

describe("ParkingStgallenSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
