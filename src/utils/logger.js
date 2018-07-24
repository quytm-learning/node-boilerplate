require('colors');

class Logger {
    constructor(on = false) {
        Logger._on = on;
        this._force = false;
    }

    _getForce() {
        this._force = true;

        return this;
    }

    _getTimeNow() {
        return (new Date()).toLocaleString();
    }

    force() {
        const logger = new Logger();

        return logger._getForce();
    }

    on() {
        Logger._on = true;

        return this;
    }

    off() {
        Logger._on = false;

        return this;
    }

    log(tag, content) {
        if (!Logger._on && !this._force) {
            return;
        }

        const time = this._getTimeNow();
        console.log(`[${time}]`.gray + `[${tag}]:`.magenta, content);
    }

    error(tag, content) {
        if (!Logger._on && !this._force) {
            return;
        }

        const time = this._getTimeNow();
        console.error(`[${time}]`.gray + `[${tag}]:`.red, content);
    }
}

const on = process.env.NODE_ENV !== 'production';

module.exports = new Logger(on);