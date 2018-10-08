import distance from '@/services/distance'

const getDistance = (hotel, currentLocation) => {
  return distance(
    hotel.address.location.lat,
    hotel.address.location.long,
    currentLocation.lat,
    currentLocation.long,
    false
  )
}

const hotels = require('./fakeHotels.json')

export default {
  getHotels: (filters, sortBy, currentLocation) => {
    return new Promise(resolve => {
      let res = []
      for (let k in hotels) {
        if (
          !filters ||
          ((!filters['price'] ||
            !filters['price'].min ||
            !filters['price'].max ||
            (hotels[k].betterOption.price >= filters['price'].min &&
              hotels[k].betterOption.price <= filters['price'].max)) &&
            (!filters['starRating'] ||
              !filters['starRating'].length ||
              filters['starRating'].indexOf(hotels[k].starRating) >= 0) &&
            (!filters['guestRating'] ||
              !filters['guestRating'].min ||
              !filters['guestRating'].max ||
              (hotels[k].guestRating >= filters['guestRating'].min &&
                hotels[k].guestRating <= filters['guestRating'].max)) &&
            (!filters['distance'] ||
              !filters['distance'].min ||
              !filters['distance'].max ||
              (hotels[k].distanceCityCenter >= filters['distance'].min &&
                hotels[k].distanceCityCenter <= filters['distance'].max)))
          /* TODO - Filter the distance between the user location and the hotel
          !currentLocation ||
          (getDistance(hotels[k], currentLocation) >=
            filters['distance'].min &&
            getDistance(hotels[k], currentLocation) <=
              filters['distance'].max)))
          */
        ) {
          res.push(hotels[k])
        }
      }
      resolve(
        res.sort((a, b) => {
          switch (sortBy) {
            case 'stars':
              return a.starRating < b.starRating
              break
            case 'price':
              return a.price < b.price
              break
            default:
              return a.guestRating < b.guestRating
              break
          }
        })
      )
    })
  }
}
