function StopWatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function () { return duration },
        set: function (value) { duration = value }
    });

    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime }
    });

    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime }
    });

    Object.defineProperty(this, 'running', {
        get: function () { return running }
    });

}
//-------------------------------

StopWatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stopwatch has already started.');
    this.running = true;
    this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch has already started.');
    this.running = false;
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

StopWatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}