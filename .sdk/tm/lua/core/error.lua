-- ParkingStgallen SDK error

local ParkingStgallenError = {}
ParkingStgallenError.__index = ParkingStgallenError


function ParkingStgallenError.new(code, msg, ctx)
  local self = setmetatable({}, ParkingStgallenError)
  self.is_sdk_error = true
  self.sdk = "ParkingStgallen"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ParkingStgallenError:error()
  return self.msg
end


function ParkingStgallenError:__tostring()
  return self.msg
end


return ParkingStgallenError
