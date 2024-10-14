import moment from 'moment';
import * as momenttimezone from 'moment-timezone';


export function fromNow(value: Date | string | number, locale: string): string {
    return moment.utc(value!).tz('Africa/Cairo').locale(locale).fromNow();

}

// Expose moment for users
export { moment, momenttimezone };

