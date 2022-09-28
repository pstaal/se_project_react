function getBackgroundColor(weather) {
 if(!weather.is_day) {
    return 'weathercard-bgDarktBlue';
 } else if (weather.is_day && (weather.condition === "sunny" || weather.condition === "cloudy")){
    return 'weathercard-bgLightBlue';
 } else {
    return 'weathercard-bgGreyBlue';
 }
};

export default getBackgroundColor;