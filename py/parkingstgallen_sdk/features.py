# ParkingStgallen SDK feature factory

from parkingstgallen_sdk.feature.base_feature import ParkingStgallenBaseFeature
from parkingstgallen_sdk.feature.test_feature import ParkingStgallenTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ParkingStgallenBaseFeature(),
        "test": lambda: ParkingStgallenTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
