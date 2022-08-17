class Forecast{
    constructor(){
        this.key='EuTC4Lc8XC6nUCkJaiGkdLud6fIyOUFR';
        this.weatherURI='http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI='http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDets= await this.getCity(city);
        const weather=await this.getWeather(cityDets.Key);
    
        //Object shortHand Notation
        return {cityDets,weather};
    }

    // Get City information
    async getCity(city){
        const query=`?apikey=${this.key}&q=${city}`;            
        const response=await fetch(this.cityURI+query);
        const data=await response.json();

        return data[0];
    }

    //Get weather information
    async getWeather(id){
        const query=`${id}?apikey=${this.key}`;
        const response=await fetch(this.weatherURI+query);
        const data=await response.json();
        
        return data[0];
    }

}

