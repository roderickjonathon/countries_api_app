import Vue from 'vue'


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
    data:{
      countries: [],
        selectedCountry: "",
    },



    mounted(){
      this.fetchCountry()
    },



    computed: {
      globalPopulation: function(){
        return this.totalPopulation(this.countries)
      },

      countryNames: function(){
        return this.getNames(this.countries)
      },

      filteredCountries: function(){
        return this.countries.filter
        (country => country.name == this.selectedCountry)
      }

    },

    methods: {
      fetchCountry: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data )
      },

      getNames: function(countries){
        const result = this.countries.map( (country) => { return country.name
        })
        return result
      },





      totalPopulation: function(countries){
        const total =  countries.reduce((runningTotal, country) => {
          return runningTotal += country.population;
        }, 0)
        return total
      }

    }


  })



})
