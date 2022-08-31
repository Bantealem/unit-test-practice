function stringCount(string) {
    const stringLength = string.length;
    if (stringLength <= 1 || stringLength < 10) {
        return stringLength;
    } else {
        throw new Error("String length must be less than 10");
    }
}

module.exports = stringCount;