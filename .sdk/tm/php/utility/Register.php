<?php
declare(strict_types=1);

// MagicTheGathering SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MagicTheGatheringUtility::setRegistrar(function (MagicTheGatheringUtility $u): void {
    $u->clean = [MagicTheGatheringClean::class, 'call'];
    $u->done = [MagicTheGatheringDone::class, 'call'];
    $u->make_error = [MagicTheGatheringMakeError::class, 'call'];
    $u->feature_add = [MagicTheGatheringFeatureAdd::class, 'call'];
    $u->feature_hook = [MagicTheGatheringFeatureHook::class, 'call'];
    $u->feature_init = [MagicTheGatheringFeatureInit::class, 'call'];
    $u->fetcher = [MagicTheGatheringFetcher::class, 'call'];
    $u->make_fetch_def = [MagicTheGatheringMakeFetchDef::class, 'call'];
    $u->make_context = [MagicTheGatheringMakeContext::class, 'call'];
    $u->make_options = [MagicTheGatheringMakeOptions::class, 'call'];
    $u->make_request = [MagicTheGatheringMakeRequest::class, 'call'];
    $u->make_response = [MagicTheGatheringMakeResponse::class, 'call'];
    $u->make_result = [MagicTheGatheringMakeResult::class, 'call'];
    $u->make_point = [MagicTheGatheringMakePoint::class, 'call'];
    $u->make_spec = [MagicTheGatheringMakeSpec::class, 'call'];
    $u->make_url = [MagicTheGatheringMakeUrl::class, 'call'];
    $u->param = [MagicTheGatheringParam::class, 'call'];
    $u->prepare_auth = [MagicTheGatheringPrepareAuth::class, 'call'];
    $u->prepare_body = [MagicTheGatheringPrepareBody::class, 'call'];
    $u->prepare_headers = [MagicTheGatheringPrepareHeaders::class, 'call'];
    $u->prepare_method = [MagicTheGatheringPrepareMethod::class, 'call'];
    $u->prepare_params = [MagicTheGatheringPrepareParams::class, 'call'];
    $u->prepare_path = [MagicTheGatheringPreparePath::class, 'call'];
    $u->prepare_query = [MagicTheGatheringPrepareQuery::class, 'call'];
    $u->result_basic = [MagicTheGatheringResultBasic::class, 'call'];
    $u->result_body = [MagicTheGatheringResultBody::class, 'call'];
    $u->result_headers = [MagicTheGatheringResultHeaders::class, 'call'];
    $u->transform_request = [MagicTheGatheringTransformRequest::class, 'call'];
    $u->transform_response = [MagicTheGatheringTransformResponse::class, 'call'];
});
