export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valueDeposit: number): void => {
    if(this.validateStatus()){
      this.balance += valueDeposit
    }
  }

  withdraw = (valueWithdraw: number): void => {
    if(this.validateStatus()){
      if(this.balance >= valueWithdraw){
        this.balance -= valueWithdraw
        return
      }
      throw new Error('Saldo insuficiente para retirada!')
    }
    throw new Error('Conta inválida')
  }

  getBalance = (): void => {
    console.log('Saldo: ', this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
