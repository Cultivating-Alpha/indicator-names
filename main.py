import json
import talib
from talib import abstract

items = []
for func in talib.get_functions():
    items.append(abstract.Function(func).info)

json.dump(items, open("talib_indicators.json", "w"), indent=2)
json.dumps(items)


talib.get_function_groups()

abstract.Function("SMA").input_names
