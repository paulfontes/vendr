import { AppState } from "../AppState.js";

export class Snack {
    constructor(data) {
        this.name = data.name;
        this.price = data.price;
        this.imgUrl = data.imgUrl;
    }

   get snackCard() {
        return `
        <div class="col-3 card">
        <div class="card-body text-center">
          <img class="img-fluid" src="${this.imgUrl}" alt="">
          <p class="fw-bold">${this.name}</p>
          <p>$${this.price.toFixed(2)}</p>
          <button ${this.buyButtonDisable} onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-success">BUY ${this.name}</button>
        </div>
      </div>`
    }
    get buyButtonDisable() {
        if(this.price > AppState.money){
        return 'disabled'
        }
        return ''
    }
}