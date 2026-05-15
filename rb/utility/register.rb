# ParkingStgallen SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ParkingStgallenUtility.registrar = ->(u) {
  u.clean = ParkingStgallenUtilities::Clean
  u.done = ParkingStgallenUtilities::Done
  u.make_error = ParkingStgallenUtilities::MakeError
  u.feature_add = ParkingStgallenUtilities::FeatureAdd
  u.feature_hook = ParkingStgallenUtilities::FeatureHook
  u.feature_init = ParkingStgallenUtilities::FeatureInit
  u.fetcher = ParkingStgallenUtilities::Fetcher
  u.make_fetch_def = ParkingStgallenUtilities::MakeFetchDef
  u.make_context = ParkingStgallenUtilities::MakeContext
  u.make_options = ParkingStgallenUtilities::MakeOptions
  u.make_request = ParkingStgallenUtilities::MakeRequest
  u.make_response = ParkingStgallenUtilities::MakeResponse
  u.make_result = ParkingStgallenUtilities::MakeResult
  u.make_point = ParkingStgallenUtilities::MakePoint
  u.make_spec = ParkingStgallenUtilities::MakeSpec
  u.make_url = ParkingStgallenUtilities::MakeUrl
  u.param = ParkingStgallenUtilities::Param
  u.prepare_auth = ParkingStgallenUtilities::PrepareAuth
  u.prepare_body = ParkingStgallenUtilities::PrepareBody
  u.prepare_headers = ParkingStgallenUtilities::PrepareHeaders
  u.prepare_method = ParkingStgallenUtilities::PrepareMethod
  u.prepare_params = ParkingStgallenUtilities::PrepareParams
  u.prepare_path = ParkingStgallenUtilities::PreparePath
  u.prepare_query = ParkingStgallenUtilities::PrepareQuery
  u.result_basic = ParkingStgallenUtilities::ResultBasic
  u.result_body = ParkingStgallenUtilities::ResultBody
  u.result_headers = ParkingStgallenUtilities::ResultHeaders
  u.transform_request = ParkingStgallenUtilities::TransformRequest
  u.transform_response = ParkingStgallenUtilities::TransformResponse
}
