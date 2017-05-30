import request from './request';

const getDailyForecast = () => {
  return request("http://api.openweathermap.org/data/2.5/forecast/daily?q=Dublin,ie&cnt=3&mode=json&APPID=b0d504f66dfb644103d67633568f25e0&units=metric')");
};

export { getDailyForecast }