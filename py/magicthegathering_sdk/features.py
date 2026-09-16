# MagicTheGathering SDK feature factory

from magicthegathering_sdk.feature.base_feature import MagicTheGatheringBaseFeature
from magicthegathering_sdk.feature.ratelimit_feature import MagicTheGatheringRatelimitFeature
from magicthegathering_sdk.feature.retry_feature import MagicTheGatheringRetryFeature
from magicthegathering_sdk.feature.test_feature import MagicTheGatheringTestFeature
from magicthegathering_sdk.feature.timeout_feature import MagicTheGatheringTimeoutFeature


_FEATURES = {
    "base": lambda: MagicTheGatheringBaseFeature(),
    "ratelimit": lambda: MagicTheGatheringRatelimitFeature(),
    "retry": lambda: MagicTheGatheringRetryFeature(),
    "test": lambda: MagicTheGatheringTestFeature(),
    "timeout": lambda: MagicTheGatheringTimeoutFeature(),
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
