function moviePrices(input) {
    let [title, day] = [input[0].toString().toLowerCase(), input[1].toString().toLowerCase()];
    switch(title) {
        case 'the godfather':
            if(day === 'monday') {
                return 12;
            } else if(day === 'tuesday') {
                return 10;
            } else if( day === 'wednesday') {
                return 15;
            } else if( day === 'thursday') {
                return 12.50
            } else if( day === 'friday') {
                return 15;
            } else if( day === 'saturday') {
                return 25;
            } else if ( day === 'sunday' )  {
                return 30;
            } else {
                return 'error'
            }
        break;
        case 'schindler\'s list':
            if(day === 'monday') {
                return 8.50;
            } else if(day === 'tuesday') {
                return 8.50;
            } else if( day === 'wednesday') {
                return 8.50;
            } else if( day === 'thursday') {
                return 8.50;
            } else if( day === 'friday') {
                return 8.50;
            } else if( day === 'saturday') {
                return 15;
            } else if ( day === 'sunday' )  {
                return 15;
            } else {
                return 'error'
            }
            break;
        case 'casablanca':
            if(day === 'monday') {
                return 8;
            } else if(day === 'tuesday') {
                return 8;
            } else if( day === 'wednesday') {
                return 8;
            } else if( day === 'thursday') {
                return 8;
            } else if( day === 'friday') {
                return 8;
            } else if( day === 'saturday') {
                return 10;
            } else if ( day === 'sunday' )  {
                return 10;
            } else {
                return 'error'
            }
            break;
        case 'the wizard of oz':
            if(day === 'monday') {
                return 10;
            } else if(day === 'tuesday') {
                return 10;
            } else if( day === 'wednesday') {
                return 10;
            } else if( day === 'thursday') {
                return 10;
            } else if( day === 'friday') {
                return 10;
            } else if( day === 'saturday') {
                return 15;
            } else if ( day === 'sunday' )  {
                return 15;
            } else {
                return 'error'
            }
            break;
        default :
            return 'error';
            break;
    }
}