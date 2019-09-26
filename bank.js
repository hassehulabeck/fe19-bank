function Konto(credit) {
    this.credit = credit;
    this.deposit = function (amount) {
        if (amount > 0) {
            this.credit = this.credit + amount;
        }
    }
    this.withdraw = function (amount) {
        if ((this.credit >= amount) && (amount > 0)) {
            this.credit = this.credit - amount;
        }
    }
    this.status = function () {
        return this.credit;
    }

    this.transfer = function (konto, amount) {
        this.withdraw(amount);
        konto.deposit.call(konto, amount);
    }
}

// Skapa två konton
var ali = new Konto(1000);
var bea = new Konto(2000);

// Sätt in 500 på alis konto
ali.deposit(500);

// Ta ut 200 från beas konto
bea.withdraw(200);

// Kolla hur mycket ali har på kontot
console.log(ali.status());

//För över 175 från ali till bea.
ali.transfer(bea, 175);