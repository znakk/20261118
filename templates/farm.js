export default (value) => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: value.Photolink,
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: value.Name,
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '電話',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: value.Tel,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '地址',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: `${value.County}${value.Town}${value.Address}`,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '地圖',
            uri: encodeURI(`https://www.google.com/maps/search/?api=1&query=${value.Name}`),
          },
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          margin: 'sm',
        },
      ],
      flex: 0,
    },
  }
}
