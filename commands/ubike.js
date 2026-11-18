import axios from 'axios'
import { distance } from '../utils/distance.js'

export default async (event) => {
  try {
    const { data } = await axios.get(
      'https://data.ntpc.gov.tw/api/datasets/010e5b15-3823-4b20-b401-b1cf000550c5/json?page=0&size=5000',
    )

    const ubike = data
      .map((value) => {
        value.distance = distance(
          value.lat,
          value.lng,
          event.message.latitude,
          event.message.longitude,
          'K',
        )
        return value
      })
      .sort((a, b) => {
        return a.distance - b.distance
      })[0]

    await event.reply({
      type: 'location',
      title: `${ubike.sna.replace('YouBike2.0_', '')} | ${Math.round(ubike.distance * 100) / 100}Km`,
      address: ubike.ar,
      latitude: ubike.lat,
      longitude: ubike.lng,
    })
  } catch (error) {
    console.error(error)
  }
}
