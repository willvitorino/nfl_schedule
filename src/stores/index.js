// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useNFLScheduleStore = defineStore('schedule', {
  state: () => ({
    schedules: []
  }),

  getters: {
    getScheduleData: (state) => state.schedules
  },

  actions: {
    getSchedule: () => {
      const options = {
        method: 'GET',
        url: 'https://nfl-schedule.p.rapidapi.com/v1/schedules',
        headers: {
          'X-RapidAPI-Key': 'f2bd7731d9msh1c5708c818c9f2ep174350jsnbb8010b6b1fa',
          'X-RapidAPI-Host': 'nfl-schedule.p.rapidapi.com'
        }
      }
      
      axios.request(options).then(function ({ data: { data } }) {
        this.state.schedules = data
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
})
