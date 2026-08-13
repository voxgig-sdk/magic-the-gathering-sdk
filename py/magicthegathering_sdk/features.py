# MagicTheGathering SDK feature factory

from magicthegathering_sdk.feature.base_feature import MagicTheGatheringBaseFeature
from magicthegathering_sdk.feature.test_feature import MagicTheGatheringTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MagicTheGatheringBaseFeature(),
        "test": lambda: MagicTheGatheringTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
