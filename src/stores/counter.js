import { defineStore } from 'pinia';

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

export const useCounterStore = defineStore({
  id: 'sudheer',
  state: () => ({
    members:0,
    amount:0,
    splitAmount:0,
    myName: '',
    isClicked: false,
    usersData: [],
    day4userData: [
      {
        id: generateRandomNumber(),
        name: 'sudheer',
        age: 22,
      },
      {
        id: generateRandomNumber(),
        name: 'lokesh',
        age: 24,
      },
    ],
    userName: '',
    userAge: '',
  }),
  actions: {
    calculateExpense() {
      if (this.members <= 0) {
        console.error('Number of members must be greater than 0.');
        return;
      }
      this.splitAmount = this.amount / this.members;
    },
    async allUsersData() {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const jsonData = await response.json();
        this.usersData = jsonData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    onFormUserSubmit() {
      console.log('Hello Man');
      console.log(this.userName);
      console.log(this.userAge);
      const userValue = {
        id: generateRandomNumber(),
        name: this.userName,
        age: this.userAge,
      };
      this.day4userData.push(userValue);
      this.userName = '';
      this.userAge = '';
    },
    deleteDay4User(id) {
      this.day4userData = this.day4userData.filter((user) => user.id !== +id);
    },
  },
  getters: {
    displayOrNot(state) {
      if (state.isClicked) {
        return 'You Clicked the Image ';
      } else {
        return 'Please Click the button';
      }
    },
  },
});
