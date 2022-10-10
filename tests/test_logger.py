import logging
import unittest  
from unittest.mock import patch

import sys,os

sys.path.insert(0, '../scripts/')
sys.path.append(os.path.abspath(os.path.join('scripts')))

from log_helper import AppLog




class TestCases(unittest.TestCase):
    @patch("log_helper.logging.info")
    def test_logging(self):
        AppLog.get_app_logger()
        self.assert_called_once_with("Hello, World!")

   

        