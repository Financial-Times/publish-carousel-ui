export default [
  {
    "id": "5118842b62670d2b",
    "name": "methode-whole-archive",
    "type": "ThrottledWholeCollection",
    "metadata": {
      "currentUuid": "",
      "errors": 0,
      "progress": 0,
      "state": "running",
      "completed": 0,
      "total": 3,
      "iteration": 250
    },
    "collection": "methode"
  },
  {
    "id": "a98e379850e52070",
    "name": "methode-one-hour",
    "type": "ScalingWindow",
    "metadata": {
      "currentUuid": "",
      "errors": 0,
      "progress": 0,
      "state": "running",
      "completed": 0,
      "total": 0,
      "iteration": 3,
      "windowStart": "2017-03-13T15:55:19.935411009Z",
      "windowEnd": "2017-03-13T15:55:19.935411009Z"
    },
    "collection": "methode",
    "timeWindow": "1h0m0s",
    "coolDown": "1m0s"
  }
]
