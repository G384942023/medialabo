// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
/*
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso=4;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu+=1;
  console.log(kaisu + '回目の予想: ' + yoso);
  if(kaisu<3){
    if(yoso===kotae){
        console.log('正解です．おめでとう!'); 
        kaisu +=4
    }else if(yoso<kotae){
        console.log('まちがい．答えはもっと大きいですよ'); 
    }else{
        console.log('まちがい．答えはもっと小さいですよ'); 
    }
}else if(kaisu===3){
    console.log('まちがい．残念でした答えは ' + kotae + ' です．'); 
}else{
    console.log('答えは ' + kotae + ' でした．すでにゲームは終わっています'); 
}

let p1=document.querySelector('span#kaisu'); 
p1.textContent=kaisu;
let p2=document.querySelector('span#answer'); 
p2.textContent=yoso; 
let p3=document.querySelector('p#result'); 
if(kaisu<3){
    if(yoso===kotae){
        p3.textContent='正解です．おめでとう!'; 

    }else if(yoso<kotae){
        p3.textContent='まちがい．答えはもっと大きいですよ'; 
    }else{
        p3.textContent='まちがい．答えはもっと小さいですよ'; 
    }
}else if(kaisu===3){
    p3.textContent='まちがい．残念でした答えは ' + kotae + ' です．'; 
}else{
    p3.textContent='答えは ' + kotae + ' でした．すでにゲームは終わっています'; 
} 
}
*/

let b1 = document.querySelector('button#kaito');
b1.addEventListener('click', hantei);

function hantei() {
    let x = document.querySelector('input[name="yoso"]');
    let yoso = x.value;
    kaisu +=1;

    let p1=document.querySelector('span#kaisu'); 
    p1.textContent=kaisu;

    let p2=document.querySelector('span#answer'); 
    p2.textContent=yoso; 

    console.log(kaisu + '回目の予想:' + yoso);

    let p3=document.querySelector('p#result'); 
    if(kaisu===3 && yoso != kotae){
        p3.textContent='まちがい．残念でした答えは ' + kotae + ' です．'; 
        console.log('まちがい．残念でした答えは ' + kotae + ' です．'); 
    }
    else if(kaisu<4){
        if(yoso==kotae){
            p3.textContent='正解です．おめでとう!'; 
            console.log('正解です．おめでとう!'); 
            kaisu =3;
        }else if(yoso<kotae){
            p3.textContent='まちがい．答えはもっと大きいですよ'; 
            console.log('まちがい．答えはもっと大きいですよ'); 
        }else{
            p3.textContent='まちがい．答えはもっと小さいですよ'; 
            console.log('まちがい．答えはもっと小さいですよ'); 
        }
    }else{
        p3.textContent='答えは ' + kotae + ' でした．すでにゲームは終わっています'; 
        console.log('答えは ' + kotae + ' でした．すでにゲームは終わっています'); 
    } 
}
