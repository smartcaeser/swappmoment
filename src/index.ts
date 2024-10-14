import moment from 'moment';
import * as momenttimezone from 'moment-timezone';
import "moment/locale/ar";

export function fromNow(date: Date | string | number): string {
    momenttimezone.tz.setDefault('Africa/Cairo');
    return moment(date).fromNow();
}

export function toNow(date: Date | string | number): string {
    return moment(date).locale('ar').toNow();
}

// Expose moment for users
export { moment, momenttimezone };

