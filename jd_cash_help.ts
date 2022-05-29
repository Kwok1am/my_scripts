/**
 * 领现金1.5
 */

import {User, JDHelloWorld} from "./TS_JDHelloWorld"

interface CODE {
  inviteCode: string,
  shareDate: string
}

class Jd_cash_help extends JDHelloWorld {
  user: User
  shareCodeSelf: CODE[] = []

  constructor() {
    super();
  }

  async init() {
    await this.run(this)
  }

  async doSign() {
    let body = await this.cashDoSign()
    let data: any = await this.post('https://api.m.jd.com/client.action?functionId=cash_sign', body, {
      'Host': 'api.m.jd.com',
      'Cookie': this.user.cookie,
      'user-agent': this.user.UserAgent,
    })
    console.log(data.data.bizMsg)
  }

  async api(fn: string, body: object) {
    await this.wait(1000)
    return await this.post('https://api.m.jd.com/client.action', new URLSearchParams({
      'functionId': fn,
      'body': JSON.stringify(body),
      'appid': 'CashRewardMiniH5Env',
      'loginType': '2',
      'loginWQBiz': 'interact'
    }), {
      'Host': 'api.m.jd.com',
      "Referer": "https://servicewechat.com/wx91d27dbf599dff74/621/page-frame.html",
      'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac",
      'Cookie': this.user.cookie
    })
  }

  async main(user: User) {
    this.user = user
    let res: any
    res = await this.api('cash_mob_home', {"isLTRedPacket": "1"})
    if (res.data.result.signedStatus !== 1) {
      console.log('开始签到')
      await this.doSign()
      console.log('签到成功')
    }
    if (res.data.result.limitTimeRedPacket.receiveStatus === '0') {
      res = await this.api('cash_join_limited_redpacket', {"id": 5, "level": 3})
      if (res.data.bizCode === 0) {
        console.log('开启成功')
      } else {
        console.log(res.data.bizMsg)
      }
    }

    res = await this.api('cash_mob_home', {"isLTRedPacket": "1"})
    if (res.data.result.inviteCode && res.data.result.shareDate) {
      this.shareCodeSelf.push({
        inviteCode: res.data.result.inviteCode,
        shareDate: res.data.result.shareDate
      })
      console.log('助力码', res.data.result.inviteCode)
    }
  }

  async help(users: User[]) {
    let shareCodeHW: any = [], shareCode: CODE[] = []
    this.o2s(this.shareCodeSelf, '内部助力')
    for (let user of users) {
      this.user = user
      let res: any
      if (shareCodeHW.length === 0) {
        shareCodeHW = this.getshareCodeHW('cash')
      }
      if (user.index === 0) {
        shareCode = [...shareCodeHW, ...this.shareCodeSelf]
      } else {
        shareCode = [...this.shareCodeSelf, ...shareCodeHW]
      }

      for (let code of shareCode) {
        console.log(`账号${user.index + 1} ${user.UserName} 去助力 ${code.inviteCode}`)
        res = await this.api('redpack_limited_assist', {"inviteCode": code.inviteCode, "shareDate": code.shareDate})
        console.log(res.data?.result?.limitTimeAssist?.tips)
        if (res.data?.result?.limitTimeAssist?.assistCode === '207') {
          break
        }
      }
    }
  }
}

new Jd_cash_help().init().then()