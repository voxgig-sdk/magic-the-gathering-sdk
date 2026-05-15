# ProjectName SDK exists test

import pytest
from magicthegathering_sdk import MagicTheGatheringSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MagicTheGatheringSDK.test(None, None)
        assert testsdk is not None
