# ParkingStgallen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ParkingStgallenFeatures
  def self.make_feature(name)
    case name
    when "base"
      ParkingStgallenBaseFeature.new
    when "ratelimit"
      ParkingStgallenRatelimitFeature.new
    when "retry"
      ParkingStgallenRetryFeature.new
    when "test"
      ParkingStgallenTestFeature.new
    when "timeout"
      ParkingStgallenTimeoutFeature.new
    else
      ParkingStgallenBaseFeature.new
    end
  end
end
