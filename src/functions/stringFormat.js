export function stringRemoveSpaceFirstLetterLowercase(strings) {
    //remove space
    const withoutSpace = strings.replace(/\s/g, '');
    const output = withoutSpace.replace(withoutSpace.charAt(0), withoutSpace.charAt(0).toLowerCase());
    return output;
    /*
    let withoutSpace;
    let output;
    try {
        withoutSpace = strings.replace(/\s/g, '');
    } catch (err) {
        withoutSpace = strings;
        try {
            output = withoutSpace.replace(withoutSpace.charAt(0), withoutSpace.charAt(0).toLowerCase());
        } catch (err) {
            output = withoutSpace.concat();
        }
    } finally {
        return output;
    }
    */
}