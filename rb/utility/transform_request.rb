# ParkingStgallen SDK utility: transform_request
require_relative 'struct/voxgig_struct'
require_relative '../core/helpers'
module ParkingStgallenUtilities
  TransformRequest = ->(ctx) {
    spec = ctx.spec
    point = ctx.point
    spec.step = "reqform" if spec
    transform = ParkingStgallenHelpers.to_map(VoxgigStruct.getprop(point, "transform"))
    return ctx.reqdata unless transform
    reqform = VoxgigStruct.getprop(transform, "req")
    return ctx.reqdata unless reqform
    VoxgigStruct.transform({ "reqdata" => ctx.reqdata }, reqform)
  }
end
