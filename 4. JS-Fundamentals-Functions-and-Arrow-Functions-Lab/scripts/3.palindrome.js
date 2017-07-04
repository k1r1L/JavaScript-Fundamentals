function isPalindrome(text) {
    let j = 0;
    for(let i = text.length - 1; i >= 0; i--, j++) {
        if (text.charAt(i) !== text.charAt(j)) {
            return false;
        }
    }

    return true;
}