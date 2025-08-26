import { Snack } from './models/snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0


  snacks = [
    new Snack({
      name: "Chips",
      price: 3.20,
      imgUrl:
      "https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25hY2t8ZW58MHx8MHx8fDA%3D"
    }),
    new Snack({
      name: "Mancupa",
      price: 4.50,
      imgUrl:
      "https://images.unsplash.com/photo-1673436977889-334fcab20436?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }),
    new Snack({
      name: "Pizza",
      price: 1.25,
      imgUrl:
      "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D"
    }),

  ];

}


export const AppState = createObservableProxy(new ObservableAppState())

console.log('AppState', AppState);
