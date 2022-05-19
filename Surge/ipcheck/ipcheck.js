/*
原作者：https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js

* [Panel]
* 网络信息 = script-name=网络信息, title="网络信息", content="请刷新", style=info, update-interval=-1
* ...
* let url = "http://ip-api.com/json/?lang=zh-CN"
* [Script]
* 网络信息 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/SimonGino/sourcetree_test/master/Surge/ipcheck/ipcheck.js
*/

let url = "http://api.live.bilibili.com/ip_service/v1/ip_service/get_ip_addr?"

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)["data"]
    console.log(jsonData)
    let ip = jsonData['addr']
    let country = jsonData.country
    let city = jsonData.city
    let isp = jsonData.isp
    var title =  emoji +'『'+ City_ValidCheck(jsonData['province'])+'』';//+Area_check(obj['country']);
    var subtitle =  "💋 "+ ISP_ValidCheck(jsonData['isp']) + " ➠ "+ jsonData['country'];
    var description = '服务商:'+jsonData['isp'] + '\n'+'定位: [' +jsonData["latitude"]+","+jsonData["longitude"]+"]"+ '\n' + 'IP:'+ jsonData['addr'] + '\n' +'时区:'+ jsonData['timezone'];
    
  body = {
    title: "𝗡𝗢𝗗𝗘 𝗜𝗡𝗙𝗢",
    content: `${title}\n${subtitle}\n${description}`,
    icon: "bolt.circle",
    'icon-color': "#4169E1"
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
    if (countryCode.toUpperCase() == 'TW') {
        countryCode = 'CN'
    }
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

function City_ValidCheck(para) {
  if(para) {
    if (para.length<6) {
      return para
    } else {
      return para.slice(0,5)
    }
  
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}
