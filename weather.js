let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
console.log(data.weather[0].description); 
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
//第四回目
let re = document.querySelector('div#result');
let p = document.createElement('li');
p.textContent = "都市名 : " + data.name;
re.insertAdjacentElement('beforeend', p);

re = document.querySelector('div#result');
p = document.createElement('li');
p.textContent = "天気 : " + data.weather[0].description;
re.insertAdjacentElement('beforeend', p); 

re = document.querySelector('div#result');
p = document.createElement('li');
p.textContent = "最低気温 : " + data.main.temp_min;
re.insertAdjacentElement('beforeend', p); 

re = document.querySelector('div#result');
p = document.createElement('li');
p.textContent = "最高気温 : " + data.main.temp_max;
re.insertAdjacentElement('beforeend', p); 

re = document.querySelector('div#result');
p = document.createElement('li');
p.textContent = "湿度 : " + data.main.humidity;
re.insertAdjacentElement('beforeend', p); 
/*
re = document.querySelector('div#result');
p = document.createElement('li');
p.textContent = "風速 : " + data.wind.speed;
re.insertAdjacentElement('beforeend', p); 

re = document.querySelector('div#result');
p = document.createElement('li');
p.textContent = "風向き : " + data.wind.deg;
re.insertAdjacentElement('beforeend', p); 
*/

let b1 = document.querySelector('button#city');
b1.addEventListener('click', kensaku);

function kensaku(){
  let x = document.querySelector('select#city').value;
  console.log("検索キー : " + x);
}
