function solve(inputStrings) {
    let blades = inputStrings
        .map(Number)
        .map(num => Math.floor(num))
        .filter(num => num > 10);
    let output = "<table border=\"1\">\n" +
    "<thead>\n" +
    "<tr><th colspan=\"3\">Blades</th></tr>\n" +
        "<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n" +
        "</thead>\n" +
        "<tbody>\n";
    for(let bladeLength of blades) {
        let bladeType = bladeLength > 40 ? 'sword' : 'dagger';
        let bladeApplication = getBladeApplication(bladeLength.toString());
        output += `<tr><td>${bladeLength}</td><td>${bladeType}</td><td>${bladeApplication}</td></tr>\n`
    }

    output += '</tbody>\n';
    output += '</table>\n';
    return output;

    function getBladeApplication(bladeLen) {
        let index = bladeLen.charAt(bladeLen.length - 1);
        switch (index) {
            case '1':
            case '6':
                return 'blade';
            case '2':
            case '7':
                return 'quite a blade';
            case '3':
            case '8':
                return 'pants-scraper';
            case '4':
            case '9':
                return 'frog-butcher';
            default :
                return '*rap-poker';
        }
    }
}