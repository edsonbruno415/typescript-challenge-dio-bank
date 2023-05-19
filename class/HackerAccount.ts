import { DioAccount } from './DioAccount'

export class HackerAccount extends DioAccount {

  constructor(){
    super('Hacker', 256)
  }

  deposit = (valueDeposit: number) : void => {
    if(this.validateStatus()){
      valueDeposit += 10
      this.balance += valueDeposit
    }
  }
}