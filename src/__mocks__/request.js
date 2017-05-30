const fs = require('fs')

// const weatherData = {};

const weatherData = {
  'city': {
    'id': 2964574,
    'name': 'Dublin',
    'coord': {'lon': -6.2672, 'lat': 53.344},
    'country': 'IE',
    'population': 0
  },
  'cod': '200',
  'message': 0.1407489,
  'cnt': 3,
  'list': [{
    'dt': 1496059200,
    'temp': {'day': 16, 'min': 14.19, 'max': 16.64, 'night': 14.19, 'eve': 16.59, 'morn': 16},
    'pressure': 1019.02,
    'humidity': 94,
    'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
    'speed': 0.96,
    'deg': 242,
    'clouds': 0
  }, {
    'dt': 1496145600,
    'temp': {'day': 14.47, 'min': 11.93, 'max': 15.1, 'night': 11.93, 'eve': 14.94, 'morn': 12.45},
    'pressure': 1022.25,
    'humidity': 84,
    'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
    'speed': 7.11,
    'deg': 269,
    'clouds': 24
  }, {
    'dt': 1496232000,
    'temp': {'day': 13.14, 'min': 12, 'max': 13.71, 'night': 12.62, 'eve': 13.71, 'morn': 12},
    'pressure': 1029.02,
    'humidity': 92,
    'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
    'speed': 8.36,
    'deg': 157,
    'clouds': 20
  }]
};

const request = (url) => new Promise((resolve, reject) => {
  resolve({entity: weatherData})
  reject({error: "bad"})
});

export default request;