import { defineStore } from 'pinia'

export const store = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    plus() {
      this.count++
    },
    minus() {
      this.count--
    },
    double() { 
      this.count += 2
    }
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count === 0) {
        return 'zero'
      } else if (state.count % 2 === 0) {
        return 'even'
      } else {
        return 'odd'
      }
    }
  }
})