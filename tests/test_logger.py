import unittest  
from example import method_with_logging

class TestCases(unittest.TestCase):
    def test_logging(self):
        with self.assertLogs() as captured:
            method_with_logging()
        self.assertEqual(len(captured.records), 1) 
        self.assertEqual(captured.records[0].getMessage(), "Hello, World!") 