import { Snack } from './models/snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {



  snacks = [
    new Snack({
      name: "Sample",
      price: 3.5,
      imgUrl:
      "https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25hY2t8ZW58MHx8MHx8fDA%3D"
    }),
    new Snack({
      name: "Sample",
      price: 3.5,
      imgUrl:
      "https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25hY2t8ZW58MHx8MHx8fDA%3D"
    }),
    new Snack({
      name: "Sample",
      price: 3.5,
      imgUrl:
      "https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25hY2t8ZW58MHx8MHx8fDA%3D"
    }),

  ];
  
}

 let money = 0

export const AppState = createObservableProxy(new ObservableAppState())