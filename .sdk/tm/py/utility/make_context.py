# ParkingStgallen SDK utility: make_context

from core.context import ParkingStgallenContext


def make_context_util(ctxmap, basectx):
    return ParkingStgallenContext(ctxmap, basectx)
