# ParkingStgallen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ParkingStgallenFeatures
  def self.make_feature(name)
    case name
    when "base"
      ParkingStgallenBaseFeature.new
    when "test"
      ParkingStgallenTestFeature.new
    else
      ParkingStgallenBaseFeature.new
    end
  end
end
