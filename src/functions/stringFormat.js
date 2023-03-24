export function stringRemoveSpaceFirstLetterLowercase(strings) {
    //remove space
    const withoutSpace = strings.replace(/\s/g, '');
    const output = withoutSpace.replace(withoutSpace.charAt(0), withoutSpace.charAt(0).toLowerCase());
    return output;
}