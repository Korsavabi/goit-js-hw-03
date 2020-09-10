// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = this.transactions.length + 1;

    const transaction = {
      amount: amount,
      type: type,
      id: id
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);

    return this.balance += amount;

  },

  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
   if(this.balance>= amount){
    return this.balance -= amount;
   }else{
    return 'Недостаточно средств!';   
   }   
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(let el of this.transactions){
      if(el.id == id){
        return el;
      }else{
        return 'Такой транзакцыи нет';
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for(let typ of this.transactions){
      if(typ.type == type){
        total += typ.amount;
      }
    }
    return total;
  },
};
console.log(account.createTransaction(1000, Transaction.DEPOSIT));
console.log(account.deposit(1500));
console.log(account.withdraw(2600));
console.log(account.deposit(2500));
console.log(account.deposit(3500));
console.log(account.transactions);
console.log(account.getTransactionDetails());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

