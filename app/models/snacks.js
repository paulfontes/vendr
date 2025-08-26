
export class Snack {
    constructor(data) {
        this.name = data.name;
        this.price = data.price;
        this.imUrl = data.imUrl;
    }

    snackCard() {
        return `
        <div class="col-4 card">
        <div class="card-body text-center">
          <img class="img-fluid" src="${this.imUrl}" alt="">
          <span class="fw-bold">${this.name}</span>
          <span>$${this.price}</span>
          <button class="btn btn-success">Buy</button>
        </div>
      </div>`
    }
}