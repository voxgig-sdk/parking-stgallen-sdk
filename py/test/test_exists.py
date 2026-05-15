# ProjectName SDK exists test

import pytest
from parkingstgallen_sdk import ParkingStgallenSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ParkingStgallenSDK.test(None, None)
        assert testsdk is not None
