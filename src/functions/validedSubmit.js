export function validedSubmit(clickSubmit, errorsInfo, fieldName) {
    let errors = 0;
    let valid = 0;
    /* 
        valid: {
            unSubmit: 0,
            submitWithoutError: 1,
            submitWithError: -1
        }
    */
    //check errors
    if (errorsInfo.length !== 0) {
        for(const item of fieldName) {
            const firstError = errorsInfo.find(error => error === item);
            if (firstError !== undefined) {
                errors += 1;
                break;
            }
        }
    }
    //status valid
    if (clickSubmit) {
        valid = errors === 0 ? 1 : -1;
    }
    
    return valid;
}