import talib


docstring = talib.BETA.__doc__
lines = [line.strip() for line in docstring.strip().split("\n") if line.strip()]
lines
