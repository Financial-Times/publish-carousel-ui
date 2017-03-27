export default [
  {
    "id": "21b2982a14078168",
    "name": "brightcove-whole-archive",
    "type": "ThrottledWholeCollection",
    "metadata": {
      "currentUuid": "8c0d6c9b-3940-364d-8440-0b76a529aeb9",
      "errors": 1,
      "progress": 0.9799139167862266,
      "state": [
        "running",
        "unhealthy",
        "stopped",
        "starting"
      ],
      "completed": 2732,
      "total": 2788,
      "iteration": 18
    },
    "collection": "brightcove",
    "origin": "brightcove",
    "coolDown": "5m0s"
  },
  {
    "id": "8e4189daf42b5276",
    "name": "brightcove-one-hour",
    "type": "ScalingWindow",
    "metadata": {
      "currentUuid": "",
      "errors": 0,
      "progress": 0,
      "state": [
        "cooldown"
      ],
      "completed": 0,
      "total": 0,
      "iteration": 793,
      "windowStart": "2017-03-27T07:49:52.287810873Z",
      "windowEnd": "2017-03-27T07:54:52.294982922Z"
    },
    "collection": "brightcove",
    "origin": "brightcove",
    "coolDown": "5m0s",
    "timeWindow": "1h0m0s",
    "minimumThrottle": "1s",
    "maximumThrottle": "1m0s"
  },
  {
    "id": "5118842b62670d2b",
    "name": "methode-whole-archive",
    "type": "ThrottledWholeCollection",
    "metadata": {
      "currentUuid": "86ada382-aa8b-11e6-9cb3-bb8207902122",
      "errors": 42,
      "progress": 0.38713646991262973,
      "state": [
        "running"
      ],
      "completed": 28314,
      "total": 73137,
      "iteration": 20
    },
    "collection": "methode",
    "origin": "methode-web-pub",
    "coolDown": "5m0s"
  },
  {
    "id": "a98e379850e52070",
    "name": "methode-one-hour",
    "type": "ScalingWindow",
    "metadata": {
      "currentUuid": "4f2f97ea-b8ec-11e4-b8e6-00144feab7de",
      "errors": 0,
      "progress": 0.3076923076923077,
      "state": [
        "running"
      ],
      "completed": 4,
      "total": 13,
      "iteration": 621,
      "windowStart": "2017-03-27T07:38:07.835962472Z",
      "windowEnd": "2017-03-27T07:53:07.83744501Z"
    },
    "collection": "methode",
    "origin": "methode-web-pub",
    "coolDown": "5m0s",
    "timeWindow": "1h0m0s",
    "minimumThrottle": "1s",
    "maximumThrottle": "1m0s"
  },
  {
    "id": "833a81142f19398b",
    "name": "wordpress-whole-archive",
    "type": "ThrottledWholeCollection",
    "metadata": {
      "currentUuid": "5a697fbb-11fd-3c85-b173-d52f4d49a1d0",
      "errors": 5,
      "progress": 0.6074608679351392,
      "state": [
        "running"
      ],
      "completed": 6481,
      "total": 10669,
      "iteration": 11
    },
    "collection": "wordpress",
    "origin": "wordpress",
    "coolDown": "5m0s"
  },
  {
    "id": "0541b5b87f478b86",
    "name": "wordpress-one-hour",
    "type": "ScalingWindow",
    "metadata": {
      "currentUuid": "",
      "errors": 0,
      "progress": 0,
      "state": [
        "cooldown"
      ],
      "completed": 0,
      "total": 0,
      "iteration": 837,
      "windowStart": "2017-03-27T07:54:59.87513722Z",
      "windowEnd": "2017-03-27T07:55:59.892062192Z"
    },
    "collection": "wordpress",
    "origin": "wordpress",
    "coolDown": "5m0s",
    "timeWindow": "1h0m0s",
    "minimumThrottle": "1s",
    "maximumThrottle": "1m0s"
  }
]
