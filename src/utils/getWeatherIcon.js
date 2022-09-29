function getWeatherIcon(weather) {
    let iconArray = [];
    if (weather.condition === 'cloudy') {
        iconArray.push("sunny");
        iconArray.push("cloudy");
    } else {
        iconArray.push(weather.condition);
    }

    let newArray = iconArray.map((string) => {
        if (weather.is_day) {
            return string + '_day';
        } else {
            return string + '_night';
        }
    })
    
    return newArray;

};

export default getWeatherIcon;