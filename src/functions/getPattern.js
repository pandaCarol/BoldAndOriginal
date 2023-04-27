export function getPattern(fieldName) {
    switch (fieldName) {
        case "First Name": 
            return(/^[A-Z][a-zA-Z]{1,20}$/);
        case "Last Name": 
            return(/^([A-Z][-,a-z. ']{0,20}[ ]*)+$/);
        case "Email Address":
            return(/^[a-zA-Z\d]+(\.[a-zA-Z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/);
        case "Phone Number": 
            return( /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
        default: 
            return null;
    }
}
