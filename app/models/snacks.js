
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
          <span class="fw-bold">${this.name}</span>
          <span>$${this.price}</span>
          <button onclick="app.SnacksController.buySnack('${this.name}')" class="btn btn-success">BUY ${this.name}</button>
        </div>
      </div>`
    }
}