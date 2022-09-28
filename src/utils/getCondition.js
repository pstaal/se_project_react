function getCondition(string) {
 const testString = string.toLowerCase();
 if (testString.includes("sunny") || testString.includes("clear")) {
    return 'sunny';
 }
 else if (testString.includes("cloudy") || testString.includes("overcast")) {
    return "cloudy";
 }
 else if (testString.includes("fog") || testString.includes("mist")) {
    return "fog";
 }
 else if (testString.includes("rain") || testString.includes("drizzle")) {
    return "rain";
 }
 else if (testString.includes("snow") || testString.includes("sleet") || testString.includes("ice")) {
    return "snow";
 } else {
    return "storm";
 }

};

export default getCondition;