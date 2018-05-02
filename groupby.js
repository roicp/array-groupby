Array.prototype.groupBy = function (groupKey) {
    function reducer(groupKey) {
        var func = function (accumulator, currentValue, currentIndex, array) {
            var found = accumulator.find(finder(groupKey, currentValue));

            if (found) {
                found.values.push(currentValue);
            } else {
                var key = buildKey(groupKey, currentValue);

                accumulator.push({
                    key: key,
                    values: [currentValue]
                });
            }

            return accumulator;
        }

        return func;
    }

    function finder(groupKey, currentValue) {
        var func = function (element) {
            var found = compareKeyValue(groupKey, currentValue, element);
            return found;
        }

        return func;
    }

    function buildKey(groupKey, currentValue) {
        var key;

        if (Array.isArray(groupKey)) {
            if (groupKey.length === 1) {
                key = currentValue[groupKey[0]];
            } else {
                key = {};

                for (var i = 0; i < groupKey.length; i++) {
                    var keyName = groupKey[i];
                    key[keyName] = currentValue[keyName];
                }
            }
        } else {
            key = currentValue[groupKey];
        }

        return key;
    }

    function compareKeyValue(groupKey, currentValue, element) {
        var equals = true;

        if (Array.isArray(groupKey)) {
            if (groupKey.length === 1) {
                equals = element.key === currentValue[groupKey[0]];
            } else {
                for (var i = 0; i < groupKey.length; i++) {
                    var keyName = groupKey[i];
                    equals = element.key[keyName] === currentValue[keyName];

                    if (!equals) {
                        break;
                    }
                }
            }
        } else {
            equals = element.key === currentValue[groupKey];
        }

        return equals;
    }

    var result = this.reduce(reducer(groupKey), []);
    return result;
}
