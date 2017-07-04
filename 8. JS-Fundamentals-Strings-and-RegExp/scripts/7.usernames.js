function parseEmails(emails) {
    let listOfUsernames = [];
    for(let email of emails) {
        let emailTokens = email.split('@');
        let username = emailTokens[0] + '.';
        emailTokens[1]
            .split('.')
            .forEach((el) => username += el[0]);
        listOfUsernames.push(username);
    }

    return listOfUsernames.join(', ');
}