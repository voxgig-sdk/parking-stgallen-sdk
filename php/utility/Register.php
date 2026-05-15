<?php
declare(strict_types=1);

// ParkingStgallen SDK utility registration

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

ParkingStgallenUtility::setRegistrar(function (ParkingStgallenUtility $u): void {
    $u->clean = [ParkingStgallenClean::class, 'call'];
    $u->done = [ParkingStgallenDone::class, 'call'];
    $u->make_error = [ParkingStgallenMakeError::class, 'call'];
    $u->feature_add = [ParkingStgallenFeatureAdd::class, 'call'];
    $u->feature_hook = [ParkingStgallenFeatureHook::class, 'call'];
    $u->feature_init = [ParkingStgallenFeatureInit::class, 'call'];
    $u->fetcher = [ParkingStgallenFetcher::class, 'call'];
    $u->make_fetch_def = [ParkingStgallenMakeFetchDef::class, 'call'];
    $u->make_context = [ParkingStgallenMakeContext::class, 'call'];
    $u->make_options = [ParkingStgallenMakeOptions::class, 'call'];
    $u->make_request = [ParkingStgallenMakeRequest::class, 'call'];
    $u->make_response = [ParkingStgallenMakeResponse::class, 'call'];
    $u->make_result = [ParkingStgallenMakeResult::class, 'call'];
    $u->make_point = [ParkingStgallenMakePoint::class, 'call'];
    $u->make_spec = [ParkingStgallenMakeSpec::class, 'call'];
    $u->make_url = [ParkingStgallenMakeUrl::class, 'call'];
    $u->param = [ParkingStgallenParam::class, 'call'];
    $u->prepare_auth = [ParkingStgallenPrepareAuth::class, 'call'];
    $u->prepare_body = [ParkingStgallenPrepareBody::class, 'call'];
    $u->prepare_headers = [ParkingStgallenPrepareHeaders::class, 'call'];
    $u->prepare_method = [ParkingStgallenPrepareMethod::class, 'call'];
    $u->prepare_params = [ParkingStgallenPrepareParams::class, 'call'];
    $u->prepare_path = [ParkingStgallenPreparePath::class, 'call'];
    $u->prepare_query = [ParkingStgallenPrepareQuery::class, 'call'];
    $u->result_basic = [ParkingStgallenResultBasic::class, 'call'];
    $u->result_body = [ParkingStgallenResultBody::class, 'call'];
    $u->result_headers = [ParkingStgallenResultHeaders::class, 'call'];
    $u->transform_request = [ParkingStgallenTransformRequest::class, 'call'];
    $u->transform_response = [ParkingStgallenTransformResponse::class, 'call'];
});
