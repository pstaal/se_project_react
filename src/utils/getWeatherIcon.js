function getWeatherIcon(weather) {
    let iconString = '';
    iconString = iconString + weather.condition;
    if (weather.is_day) {
        iconString = iconString + '_day';
    } else {
        iconString = iconString + '_day';
    }
    return iconString;

};

export default getWeatherIcon;