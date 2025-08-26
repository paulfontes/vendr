import { AppState } from "../AppState.js"

class SnackService {

    addQuarter(){
        console.log('.25 added')
        AppState.money += .25
    }
    buySnack(snackName){
        const snackToBuy = AppState.snacks.find(snack => snackName = snack.name)
        console.log(snackName)
    }
}

export const snackService = new SnackService