function bankAccount(initialBalance) {
    let balance = initialBalance;

    function deposit(amount) {
        balance += amount;
        console.log("Deposited: " + amount + " | Balance: " + balance);
        return;
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log("Withdrew: " + amount + " | Balance: " + balance);
        } else {
            console.log("Insufficient funds!");
        }
        return
    }
}

const account = bankAccount(100);
account.deposit(50);   // Deposited: 50 | Balance: 150
account.withdraw(70);  // Withdrew: 70 | Balance: 80
account.withdraw(200); // Insufficient funds!