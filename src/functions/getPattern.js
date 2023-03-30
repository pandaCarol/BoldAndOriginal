export function getPattern(fieldName) {
    switch (fieldName) {
        case "First Name": 
            return(/^[A-Za-z]{2,20}$/i);
        case "Last Name": 
            return(/^[A-Za-z]{2,20}$/i);
        case "Email Address": 
            return(/^[a-zA-Z\d]+(\.[a-zA-Z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/);
        case "Phone Number": 
            return( /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
        default: 
            return null;
    }
}
