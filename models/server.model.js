const os = require('os'),
    rp = require('request-promise'),
    R = require('ramda');

class Server {
    constructor() {
        this.hostname = os.hostname();
        this.type = os.type();
        this.platform = os.platform();
        this.arch = os.arch();
        this.release = os.release();
        this.uptime = os.uptime();
        this.loadavg = os.loadavg();
        this.totalmem = os.totalmem();
        this.freemem = os.freemem();
        this.cpus = os.cpus();
        this.networkInterfaces = os.networkInterfaces();
        this.networkInterfacesKeys = R.keys(this.networkInterfaces);
        console.log(this.networkInterfaces);
    }

    static getpublicip() {
        return rp('https://node.thomas-schulte.de/ip')
            .then(result => {
                return result;
            })
            .catch(err => {
                console.error(err);
            });
    }

    get hostname() {
        return this._hostname;
    }
    set hostname(name) {
        this._hostname = name;
    }

    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }

    get platform() {
        return this._platform;
    }
    set platform(platform) {
        this._platform= platform;
    }

    get arch() {
        return this._arch
    }
    set arch(arch) {
        this._arch = arch;
    }

    get release() {
        return this._release;
    }
    set release(release) {
        this._release = release;
    }

    get uptime() {
        return this._uptime;
    }
    set uptime(uptime) {
        this._uptime = uptime;
    }

    get loadavg() {
        return this._loadavg;
    }
    set loadavg(loadavg) {
        this._loadavg = loadavg;
    }

    get totalmem() {
        return this._totalmem;
    }
    set totalmem(totalmem) {
        this._totalmem = totalmem;
    }

    get freemem() {
        return this._freemem;
    }
    set freemem(freemem) {
        this._freemem = freemem;
    }

    get cpus() {
        return this._cpus;
    }
    set cpus(cpus) {
        this._cpus = cpus;
    }

    get networkInterfaces() {
        return this._networkInterfaces;
    }
    set networkInterfaces(networkInterfaces) {
        this._networkInterfaces = networkInterfaces;
    }

    get networkInterfacesKeys() {
        return this._networkInterfacesKeys;
    }
    set networkInterfacesKeys(networkInterfacesKeys) {
        this._networkInterfacesKeys = networkInterfacesKeys;
    }
}

module.exports = Server;
