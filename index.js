import 'dotenv/config'
import linebot from 'linebot'
import commandFarm from './commands/farm.js'
import commandUbike from './commands/ubike.js'
import commandWda from './commands/wda.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
})

bot.on('message', (event) => {
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('查農場')) {
      commandFarm(event)
    } else if (event.message.text === 'wda') {
      commandWda(event)
    }
  } else if (event.message.type === 'location') {
    commandUbike(event)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
