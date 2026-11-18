export default async (event) => {
  try {
    await event.reply({
      type: 'text',
      text: '查詢項目',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              // 打開網站
              type: 'uri',
              uri: 'https://wdaweb.github.io',
              // 按鈕文字
              label: '課程介紹',
            },
          },
          {
            type: 'action',
            action: {
              // 使用者點了之後會傳訊息
              type: 'message',
              text: '查農場 溪',
              // 按鈕文字
              label: '名字有溪的農場',
            },
          },
          {
            type: 'action',
            action: {
              // 使用者點了之後會傳訊息
              type: 'location',
              // 按鈕文字
              label: '新北ubike',
            },
          },
        ],
      },
    })
  } catch (error) {
    console.error(error)
  }
}
