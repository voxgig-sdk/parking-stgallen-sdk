# ParkingStgallen SDK utility: make_context
require_relative '../core/context'
module ParkingStgallenUtilities
  MakeContext = ->(ctxmap, basectx) {
    ParkingStgallenContext.new(ctxmap, basectx)
  }
end
