
//print(data);

let re = document.querySelector('div#result');
let p1 = document.createElement('li');
let p2 = document.createElement('li');
let p3 = document.createElement('li');
let p4 = document.createElement('li');
let p5 = document.createElement('li');

function print(data){
////////// 課題3-2 ここからプログラムを書こう
console.log('都市名 : ' + data.name);
console.log('天気 : ' + data.weather[0].description); 
console.log('最低気温 : ' + data.main.temp_min);
console.log('最高気温 : ' + data.main.temp_max);
console.log('湿度 : ' + data.main.humidity);
//第四回目
p1.textContent = "都市名 : " + data.name;
re.insertAdjacentElement('beforeend', p1);

p2.textContent = "天気 : " + data.weather[0].description;
re.insertAdjacentElement('beforeend', p2); 

p3.textContent = "最低気温 : " + data.main.temp_min + "℃";
re.insertAdjacentElement('beforeend', p3); 

p4.textContent = "最高気温 : " + data.main.temp_max + "℃";
re.insertAdjacentElement('beforeend', p4); 

p5.textContent = "湿度 : " + data.main.humidity + "%";
re.insertAdjacentElement('beforeend', p5); 
}

/*
let b1 = document.querySelector('button#city');
b1.addEventListener('click', kensaku);

function kensaku(){
  let x = document.querySelector('select#city').value;
  console.log("検索キー : " + x);
}
*/

let b = document.querySelector('button#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
  
    // URL を設定
    let id = document.querySelector('select#city').value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}