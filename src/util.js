// utils.js

class MyUtil {
    static addNumbers(a, b) {
        return a + b;
    }

    static capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static formatDateTime = (dateTimeString) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'America/Edmonton',
        }).format(new Date(dateTimeString));
    };
}

export default MyUtil;
