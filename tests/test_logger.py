from unittest import TestCase
from example import method_with_logging

class TestExample(TestCase):
    def test_logging(self):
        with self.assertLogs() as captured:
            method_with_logging()
        self.assertEqual(len(captured.records), 1) # check that there is only one log message
        self.assertEqual(captured.records[0].getMessage(), "Hello, World!") # and it is the proper one