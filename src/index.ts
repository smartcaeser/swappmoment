import moment from 'moment';
import * as momenttimezone from 'moment-timezone';


export function fromNow(date: Date | string | number): string {
    momenttimezone.tz.setDefault('Africa/Cairo');
    return moment(date).fromNow();
}

export function toNow(date: Date | string | number): string {
    return moment(date).toNow();
}

// Expose moment for users
export { moment, momenttimezone };
