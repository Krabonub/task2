var textInput = document.getElementById('textInput');

var listElement1 = document.getElementById('listElement1');
var listElement2 = document.getElementById('listElement2');
var listElement3 = document.getElementById('listElement3');
var listElement4 = document.getElementById('listElement4');
var listElement5 = document.getElementById('listElement5');
var listElement6 = document.getElementById('listElement6');
var listElement7 = document.getElementById('listElement7');
var listElement8 = document.getElementById('listElement8');
var listElement9 = document.getElementById('listElement9');
var listElement10 = document.getElementById('listElement10');
//key3:101;key2:102;key1:1;

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
function matchObj(str){
    return str.match(/([A-Za-z0-9-]+)\:([A-Za-z0-9-]+)\;([A-Za-z0-9-]+)\:([A-Za-z0-9-]+)\;([A-Za-z0-9-]+)\:([A-Za-z0-9-]+)\;/);
}
function toObject(str){
    var match = matchObj(str);
    //console.log(match);
    var obj = {
        [match[1]]:match[2],
        [match[3]]:match[4],
        [match[5]]:match[6]
    }
    return obj;
    //console.log(obj);
}

//1
function checkForMistakes(str){
    return matchObj(str) ? true : false;
}
//2
function consoleLogObject(str){
    if(checkForMistakes(str)){
        console.log(toObject(textInput.value));
    }
}
//3
function toPrettyHtml(str){
    var match = matchObj(str);
    return `{
--${match[1]}:${match[2]},
--${match[3]}:${match[4]},
--${match[5]}:${match[6]}
}`;
}
//4
function objectKeysToString(str){
    var obj = toObject(str);
    //console.log(obj);
    var res = '';
    for(var key in obj){
        if(!res){
            res += key;
        }
        else{
            res += '-' + key;
        }
    }
    return res;
}
//5
function isEmpty(str){
    var obj = toObject(str);
    return Object.keys(obj).length ? false : true;
}
//6
function keysIfValueIs(str){
    var obj = toObject(str);
    var res = '';
    for(var key in obj){
        if(+obj[key] > 100){
            if(!res){
                res += key.length;
            }
            else{
                res += ',' + key.length;
            }
        }
    }
    return res;
}
//7
function doubledValuesObject(str){
    var obj = toObject(str);
    for(var key in obj){
        obj[key] = +obj[key]*2;
    }
    return obj;
}
//8
function sortedObj(str){
    var obj = toObject(str);
    var objKeys = Object.keys(obj).sort();
    var res = {};
    var i = 0;
    for(var key in objKeys){
        res[objKeys[i]] = obj[objKeys[i]];
        i++;
    }
    return res;
}
//9
function randomValue(str){
    var obj = toObject(str);
    return randomInteger(0, Object.keys(obj).length);
}
//10
function dateNow(){
    var now = new Date();
    return `${now.getFullYear()}-${now.getMonth()>9?now.getMonth()+1:'0'+(now.getMonth() + 1)}-${now.getDate()<10?'0'+now.getDate():now.getDate()}`;
}


textInput.oninput = function(){
    //1
    listElement1.innerText = checkForMistakes(textInput.value)?'':'Format mistake!';
    //2
    if(checkForMistakes(textInput.value)){
        listElement2.innerText = 'Go watch console';
        consoleLogObject(textInput.value);
        //3
        listElement3.innerHTML=`<pre>${toPrettyHtml(textInput.value)}</pre>`;
        //4
        listElement4.innerText = objectKeysToString(textInput.value);
        //5
        listElement5.innerText = isEmpty(textInput.value);
        //6
        listElement6.innerText = keysIfValueIs(textInput.value);
        //7
        listElement7.innerText = 'Go watch console';
        console.log(doubledValuesObject(textInput.value));
        //8
        listElement8.innerText = 'Go watch console';
        console.log(sortedObj(textInput.value));
        //9
        listElement9.innerText = randomValue(textInput.value);
        //10
        listElement10.innerText = dateNow();
    }
}