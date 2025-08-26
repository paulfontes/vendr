import { AppState } from "../AppState.js";
import { Snack } from "../models/snacks.js";
import { snackService } from "../services/SnackServices.js";


export class SnacksController {
    constructor() {
        console.log('🍕🍟')
        this.drawSnacks()

    }

    drawSnacks(){
        const snacks = AppState.snacks
        let snacksContent = ''
        snacks.forEach(snack => snacksContent += snack.snackCard)
        const cardListElm = document.getElementById('cards-list')
        cardListElm.innerHTML = snacksContent
    }

    addQuarter(){
        snackService.addQuarter()
        console.log(AppState)
        const addQuarterElm = document.getElementById('add-quarter')
        addQuarterElm.innerHTML = `Money: $${AppState.money}`
    }

    buySnack(snackName) {
        snackService.buySnack(snackName)
    }
}
