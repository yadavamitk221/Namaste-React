
const calculateAge = () => {
    let selectedBirthDate = "2001-04-22";
    const todaysDate = new Date(), birth = new Date(selectedBirthDate);
    if (birth > todaysDate) return console.error("Birthdate cannot be in the future");

    let year = todaysDate.getFullYear() - birth.getFullYear();
    let months = todaysDate.getMonth() - birth.getMonth();
    let days = todaysDate.getDate() - birth.getDate();

    if (days < 0){
        days += new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 0).getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        year--;
    }

}


calculateAge();




let calcumateAgeRevise = (dob) =>{
    let dateOfBirth = new Date(dob); 

    let today = new Date(); 

    let year = dateOfBirth.getFullYear() - today.getFullYear();
    let month = today.getFullMonth() = dateOfBirth.getFullMonth(); 
    let date = today.getDate() - dateOfBirth.getDate(); 


    
if(data < 0){
    let previousMonth = newDate(today.getFullYear, today.getFullMonth(), 0).getDate();
    date += previousMonth;
    month--;
}

if(Month < 0){
    month += 12; 
    year--;
}

}



return {year, month, date}
