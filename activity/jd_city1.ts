/**
 * 城城.ts
 * cron 0 0-23/1 * * *
 * 优先内部助力
 */

import axios from 'axios'
import USER_AGENT, {requireConfig, wait, o2s, getshareCodeHW, getShareCodePool} from './TS_USER_AGENTS'

let cookie: string = '', res: any = '', shareCodes: string[] = [], UserName: string = '', shareCodesSelf: string[] = [], shareCodesHW: string[] = []

!(async () => {
  let cookiesArr: any = await requireConfig()
  for (let [index, value] of cookiesArr.entries()) {
    cookie = value
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    console.log(`\n开始【京东账号${index + 1}】${UserName}\n`)

    res = await api('city_getHomeDatav1', {"lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": ""})

    // o2s(res)
    console.log('助力码：', res.data.result.userActBaseInfo.inviteId)
    shareCodesSelf.push(res.data.result.userActBaseInfo.inviteId)

    // break
    await wait(1000)
  }

  // 助力
  /*
  shareCodes = Array.from(new Set([...shareCodesSelf, ...shareCodesHW]))
  for (let [index, value] of cookiesArr.entries()) {
    if (shareCodesHW.length === 0) {
      shareCodesHW = await getshareCodeHW("city")
    }
    let temp = await getShareCodePool("city", 30)
    shareCodes = Array.from(new Set([...shareCodesSelf, ...shareCodesHW, ...temp]))

    for (let code of shareCodes) {
      cookie = value
      UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
      console.log(`账号${index + 1} 去助力 ${code} ${shareCodesSelf.includes(code) ? '(内部)' : ''}`)

      res = await api('city_getHomeDatav1', {"lbsCity": "", "realLbsCity": "", "inviteId": code, "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": ""})
      let toasts = res.data.result?.toasts
      if (toasts) {
        if (toasts[0].status === '3') {
          console.log('上限')
          break
        } else {
          console.log('status:', toasts[0].status, toasts[0].msg)
        }
      } else {
        console.log('不助力自己？')
      }
      await wait(2000)
    }
  }
  */

  for (let [index, value] of cookiesArr.entries()) {
    cookie = value
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    console.log(`\n开始【京东账号${index + 1}】${UserName}\n`)

    // 打开红包
    res = await api('city_getHomeDatav1', {"lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": ""})
    console.log('可打开：', res.data.result.mainInfos.length, '个红包')

    for (let [index, t] of res.data.result.mainInfos.entries()) {
      if (t.remaingAssistNum === 0 && t.status === '1') {
        res = await api("city_receiveCash", {"cashType": 1, "roundNum": t.roundNum})
        console.log(`打开红包(${index + 1}-${t.roundNum + ''}) 获得：`, res.data.result.currentTimeCash * 1, '累计：', res.data.result.totalCash * 1)
        await wait(2000)
      }
    }

    // 抽奖
    // res = await api("city_getLotteryInfo", {})
    // let lotteryNum = res.data.result.lotteryNum
    // console.log(`可以抽奖${lotteryNum}次`)
    // for (let i = 0; i < lotteryNum; i++) {
    //   res = await api("city_lotteryAward", {})
    //   if (res.code === 0 && res.data.bizCode === 0) {
    //     console.log('抽奖成功：', res.data.result.prizeId)
    //     await wait(5000)
    //   } else {
    //     console.log('抽奖出错', JSON.stringify(res))
    //     break
    //   }
    // }

    await wait(2000)
  }
})()

async function api(fn: string, params: object) {
  let body: string = `functionId=${fn}&body=${JSON.stringify(params)}&client=wh5&clientVersion=1.0.0&uuid=`
  let {data} = await axios.post('https://api.m.jd.com/client.action', body, {
    headers: {
      'Host': 'api.m.jd.com',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'zh-cn',
      'Origin': 'https://bunearth.m.jd.com',
      'User-Agent': USER_AGENT,
      'Connection': 'keep-alive',
      'Referer': 'https://bunearth.m.jd.com/',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookie
    }
  })
  return data
}