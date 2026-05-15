# MagicTheGathering SDK utility registration
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

MagicTheGatheringUtility.registrar = ->(u) {
  u.clean = MagicTheGatheringUtilities::Clean
  u.done = MagicTheGatheringUtilities::Done
  u.make_error = MagicTheGatheringUtilities::MakeError
  u.feature_add = MagicTheGatheringUtilities::FeatureAdd
  u.feature_hook = MagicTheGatheringUtilities::FeatureHook
  u.feature_init = MagicTheGatheringUtilities::FeatureInit
  u.fetcher = MagicTheGatheringUtilities::Fetcher
  u.make_fetch_def = MagicTheGatheringUtilities::MakeFetchDef
  u.make_context = MagicTheGatheringUtilities::MakeContext
  u.make_options = MagicTheGatheringUtilities::MakeOptions
  u.make_request = MagicTheGatheringUtilities::MakeRequest
  u.make_response = MagicTheGatheringUtilities::MakeResponse
  u.make_result = MagicTheGatheringUtilities::MakeResult
  u.make_point = MagicTheGatheringUtilities::MakePoint
  u.make_spec = MagicTheGatheringUtilities::MakeSpec
  u.make_url = MagicTheGatheringUtilities::MakeUrl
  u.param = MagicTheGatheringUtilities::Param
  u.prepare_auth = MagicTheGatheringUtilities::PrepareAuth
  u.prepare_body = MagicTheGatheringUtilities::PrepareBody
  u.prepare_headers = MagicTheGatheringUtilities::PrepareHeaders
  u.prepare_method = MagicTheGatheringUtilities::PrepareMethod
  u.prepare_params = MagicTheGatheringUtilities::PrepareParams
  u.prepare_path = MagicTheGatheringUtilities::PreparePath
  u.prepare_query = MagicTheGatheringUtilities::PrepareQuery
  u.result_basic = MagicTheGatheringUtilities::ResultBasic
  u.result_body = MagicTheGatheringUtilities::ResultBody
  u.result_headers = MagicTheGatheringUtilities::ResultHeaders
  u.transform_request = MagicTheGatheringUtilities::TransformRequest
  u.transform_response = MagicTheGatheringUtilities::TransformResponse
}
