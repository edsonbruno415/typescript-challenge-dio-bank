import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { HackerAccount } from './class/HackerAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(100)
peopleAccount.getBalance()
peopleAccount.getName()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.withdraw(10)
companyAccount.getBalance()
companyAccount.getName()
const hackerAccount: HackerAccount = new HackerAccount()
hackerAccount.deposit(100)
hackerAccount.getBalance()
hackerAccount.withdraw(20)
hackerAccount.getBalance()
hackerAccount.getName()
