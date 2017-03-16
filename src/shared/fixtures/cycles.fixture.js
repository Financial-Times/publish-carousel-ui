export default [
  {
    "id": "5118842b62670d2b",
    "name": "methode-whole-archive",
    "type": "ThrottledWholeCollection",
    "metadata": {
      "currentUuid": "",
      "errors": 148,
      "progress": 0.0018113724818250802,
      "state": "running",
      "completed": 148,
      "total": 81706,
      "iteration": 23
    },
    "collection": "methode"
  },
  {
    "id": "a98e379850e52070",
    "name": "methode-one-hour",
    "type": "ScalingWindow",
    "metadata": {
      "currentUuid": "a6f97fc0-28be-11e6-8ba3-cdd781d02d89",
      "errors": 37,
      "progress": 0.7551020408163265,
      "state": "running",
      "completed": 37,
      "total": 49,
      "iteration": 1,
      "windowStart": "2017-03-16T08:57:36.389053732Z",
      "windowEnd": "2017-03-16T08:57:36.389053732Z"
    },
    "collection": "methode",
    "timeWindow": "1h0m0s",
    "coolDown": "5m0s",
    "minimumThrottle": "1s",
    "maximumThrottle": "1m0s"
  }
]
