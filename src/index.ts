import moment from 'moment';

export function fromNow(date: Date | string | number): string {
    return moment(date).fromNow();
}

export function toNow(date: Date | string | number): string {
    return moment(date).toNow();
}

// Expose moment for users
export { moment };
