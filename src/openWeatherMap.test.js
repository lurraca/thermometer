jest.mock('./request');

const openWeatherMap = require('./openWeatherMap');

describe('#getDailyForecast() using Promises', () => {
  it('should load weather data', () => {
    return openWeatherMap.getDailyForecast()
      .then(data => {
        expect(data).toBeDefined();
        expect(data.entity.city.name).toEqual('Dublin');
        expect(data.entity.list.length).toBe(3);
      })
  })
})