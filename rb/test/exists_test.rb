# ParkingStgallen SDK exists test

require "minitest/autorun"
require_relative "../ParkingStgallen_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ParkingStgallenSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
