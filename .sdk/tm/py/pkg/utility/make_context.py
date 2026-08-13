# ParkingStgallen SDK utility: make_context

from projectname_sdk.core.context import ParkingStgallenContext


def make_context_util(ctxmap, basectx):
    return ParkingStgallenContext(ctxmap, basectx)
