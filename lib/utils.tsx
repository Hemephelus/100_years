export function generateData(){
    let data = []
    let daysInA100Years = 100*50//365.25//52

    for(let i = 0 ; i < daysInA100Years; i++){
        data[i] = `${i}`
    }
    
    return data
}

export function calculateDaysForYear(arr = []){
    let data = []
    let daysInA100Years = 1//365.25//52

    for(let i = 0 ; i < daysInA100Years; i++){
        data[i] = `${i*100}`
    }
    return data
}


// export function calculateDaysLived(date){
//     let currentDate = new Date()
//     let dateInA100Years = 

//     for(let i = 0 ; i < daysInA100Years; i++){
//         data[i] = `${i*100}`
//     }
//     return data
// }

export function calculateHundredthBirthday(dateOfBirth = '1999-10-24', day = '0') {
    const hundredYearsInMs = +day * 24 * 60 * 60 * 1000; // 100 years in milliseconds
    const dateOfBirthMs = new Date(dateOfBirth).getTime(); // convert date of birth to milliseconds
    const hundredthBirthdayMs = dateOfBirthMs + hundredYearsInMs; // add 100 years in milliseconds to date of birth
    return new Date(hundredthBirthdayMs).toDateString(); // convert the result to a string in the format "Day Month Year"
  }


export function calculateYearToDay(dateOfBirth = '1999-10-24',  years = 0) {
    // const hundredYearsInMs = +day * 24 * 60 * 60 * 1000; // 100 years in milliseconds
    let totalDays = 0
    for(let i = 0; i < +years; i++){
        let year = +dateOfBirth.split('-')[0]+i
        
        totalDays += getDaysInYear(year)
    }
    
    return totalDays
    // const dateOfBirthMs = new Date(dateOfBirth).getTime(); // convert date of birth to milliseconds
    // const hundredthBirthdayMs = dateOfBirthMs + hundredYearsInMs; // add 100 years in milliseconds to date of birth
    // return new Date(hundredthBirthdayMs).toDateString(); // convert the result to a string in the format "Day Month Year"
  }

  function getDaysInYear(year = 1999) {
    // Check if the year is a leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
    // Return the number of days based on whether it's a leap year or not
    return isLeapYear ? 366 : 365;
  }
  

