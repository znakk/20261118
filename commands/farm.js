import axios from 'axios'
// node.js 內建的檔案處理模組，不用安裝
import fs from 'node:fs'
import templateFarm from '../templates/farm.js'

export default async (event) => {
  try {
    const { data } = await axios.get(
      'https://data.moa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx?IsTransData=1&UnitId=192',
    )

    const bubbles = data
      .filter((value) => {
        return value.Name.includes(event.message.text.replace('查農場', '').trim())
      })
      .slice(0, 3)
      .map((value) => {
        return templateFarm(value)
      })

    if (bubbles.length === 0) {
      await event.reply('查無資料')
      return
    }

    const result = await event.reply({
      type: 'flex',
      altText: '農場查詢結果',
      contents: {
        type: 'carousel',
        contents: bubbles,
      },
    })
    // 當傳送的訊息格式錯誤時，result 會有 message 欄位表示錯誤
    // 且當 env 有設定 debug 時
    // 才將 flex 訊息寫成 json 檔
    if (result.message && process.env.DEBUG) {
      console.log(result)
      // fs.writeFile(檔案, 文字內容, 完成時的function)
      fs.writeFile('./dump/flex.json', JSON.stringify(bubbles, null, 2), () => {})
    }
  } catch (error) {
    console.error(error)
  }
}
