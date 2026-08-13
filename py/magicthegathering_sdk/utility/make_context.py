# MagicTheGathering SDK utility: make_context

from magicthegathering_sdk.core.context import MagicTheGatheringContext


def make_context_util(ctxmap, basectx):
    return MagicTheGatheringContext(ctxmap, basectx)
