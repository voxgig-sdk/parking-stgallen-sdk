# ParkingStgallen SDK utility: feature_add
module ParkingStgallenUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
