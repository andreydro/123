var _ = require('lodash')

let dragons = [
  { name: "fluffykins" , element: "lightning" },
  { name: "noomi" , element: "lightning" },
  { name: "karo" , element: "fire" },
  { name: "doomer" , element: "timewarp" }
]

let hasElement = _.curry((element, obj) => obj.element === element)

let lightingDragons = dragons.filter(hasElement("lightning"))

console.log(lightingDragons)