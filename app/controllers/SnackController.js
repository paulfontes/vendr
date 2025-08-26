import { AppState } from "../AppState.js";
import { Snack } from "../models/snacks.js";
import { snackService } from "../services/SnackServices.js";


export class SnacksController {
    constructor() {
        console.log('🍕🍟')
        this.drawSnacks()
 

        AppState.on('money', this.drawSnacks)
        AppState.on('money', this.drawMoney)
        
    }

    drawSnacks(){
        const snacks = AppState.snacks
        let snacksContent = ''
        snacks.forEach(snack => snacksContent += snack.snackCard)
        const cardListElm = document.getElementById('cards-list')
        cardListElm.innerHTML = snacksContent
    }
    
    drawMoney(){
    const addQuarterElm = document.getElementById('add-quarter')
    addQuarterElm.innerHTML = `Money: $${AppState.money.toFixed(2)}`
    }
    
    addQuarter(){
        snackService.addQuarter()
        console.log(AppState)
        // this.drawSnacks()
        // this.drawMoney()
    }
    
    buySnack(snackName) {
        snackService.buySnack(snackName)
        console.log(AppState.money)
        // this.drawSnacks()
        // this.drawMoney()
        
    }
}
