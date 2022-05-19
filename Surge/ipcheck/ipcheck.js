/*
原作者：https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js

* [Panel]
* 网络信息 = script-name=网络信息, title="网络信息", content="请刷新", style=info, update-interval=-1
* ...
* let url = "http://ip-api.com/json/?lang=zh-CN"
* [Script]
* 网络信息 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/SimonGino/sourcetree_test/master/Surge/ipcheck/ipcheck.js
*/

let url = "http://ip-api.com/json/?lang=zh-CN"


$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)["data"]
    console.log(jsonData)
    let ip = jsonData['addr']
    let country = jsonData.country
    let city = jsonData.city
    let isp = jsonData.isp

    
  body = {
    title: "𝗡𝗢𝗗𝗘 𝗜𝗡𝗙𝗢",
    content: `IP: ${ip}\nISP: ${isp}\n位置: ${country} ➟ ${city}`,
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
