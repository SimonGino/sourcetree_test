const REQUEST_HEADERS = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
    'Accept-Language': 'en',
}
  
  ;(async () => {
    let panel_result = {
      title: '流媒体解锁检测',
      content: '',
      icon: 'play.tv.fill',
      'icon-color': '#FF2D55',
    }
    await Promise.all([check_netflix(), check_disney()])
      .then((result) => {
        let content = result.join('\n')
        panel_result['content'] = content
      })
      .finally(() => {
        $done(panel_result)
      })
  })()

  async function check_netflix() {
    let inner_check = (filmId) => {
      return new Promise((resolve, reject) => {
        let option = {
          url: 'https://www.netflix.com/title/' + filmId,
          headers: REQUEST_HEADERS,
        }
        $httpClient.get(option, function (error, response, data) {
          if (error != null) {
            reject('Error')
            return
          }
  
          if (response.status === 403) {
            reject('Not Available')
            return
          }
  
          if (response.status === 404) {
            resolve('Not Found')
            return
          }
  
          if (response.status === 200) {
            let url = response.headers['x-originating-url']
            let region = url.split('/')[3]
            region = region.split('-')[0]
            if (region == 'title') {
              region = 'us'
            }
            resolve(region)
            return
          }
  
          reject('Error')
        })
      })
    }
  
    let netflix_check_result = 'Netflix：'
  
    await inner_check(81215567)
      .then((code) => {
        if (code === 'Not Found') {
          return inner_check(80018499)
        }
        netflix_check_result += '已完整解锁，区域：' + code.toUpperCase()
        return Promise.reject('BreakSignal')
      })
      .then((code) => {
        if (code === 'Not Found') {
          return Promise.reject('Not Available')
        }
  
        netflix_check_result += '仅解锁自制剧，区域：' + code.toUpperCase()
        return Promise.reject('BreakSignal')
      })
      .catch((error) => {
        if (error === 'BreakSignal') {
          return
        }
        if (error === 'Not Available') {
          netflix_check_result += '该节点不支持解锁'
          return
        }
        netflix_check_result += '检测失败，请刷新面板'
      })
  
    return netflix_check_result
  }

  async function check_disney(){
    let inner_check = ()=>{
       return new Promise((resolve, reject) => {
        let option={
        url:'https://www.disneyplus.com/',
        headers:REQUEST_HEADERS,        
    }
    $httpClient.get(opts, function (error, response, data) {
        if (error) {
          reject('Error')
          return
        }
        if (response.status !== 200 || data.indexOf('unavailable') !== -1) {
          reject('Not Available')
          return
        }
  
        let match = data.match(/Region: ([A-Za-z]{2})[\s\S]*?CNBL: ([12])/)
        if (!match) {
          resolve({ region: '', cnbl: '' })
          return
        }
  
        let region = match[1]
        let cnbl = match[2]
        resolve(region)
      })
    })
    }

    let disney_check_result = 'Disney：'

    await inner_check()
      .then((code) => {
        if (code === 'Not Available') {
            disney_check_result += '不支持解锁'
        } else {
            disney_check_result += '已解锁，区域：' + code.toUpperCase()
        }
      })
      .catch((error) => {
        disney_check_result += '检测失败，请刷新面板'
      })
  
    return disney_check_result
    
  }
