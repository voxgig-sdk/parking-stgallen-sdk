# ParkingStgallen SDK feature factory

from parkingstgallen_sdk.feature.base_feature import ParkingStgallenBaseFeature
from parkingstgallen_sdk.feature.ratelimit_feature import ParkingStgallenRatelimitFeature
from parkingstgallen_sdk.feature.retry_feature import ParkingStgallenRetryFeature
from parkingstgallen_sdk.feature.test_feature import ParkingStgallenTestFeature
from parkingstgallen_sdk.feature.timeout_feature import ParkingStgallenTimeoutFeature


_FEATURES = {
    "base": lambda: ParkingStgallenBaseFeature(),
    "ratelimit": lambda: ParkingStgallenRatelimitFeature(),
    "retry": lambda: ParkingStgallenRetryFeature(),
    "test": lambda: ParkingStgallenTestFeature(),
    "timeout": lambda: ParkingStgallenTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
