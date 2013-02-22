
var stream = require('stream')
  , util = require('util')
  , SerialPort = require('serialport').SerialPort;

// Give our module a stream interface
util.inherits(Relay,stream);

// Export it
module.exports=Relay;

/**
 * Creates a new Device Object
 *
 * @property {Boolean} readable Whether the device emits data
 * @property {Boolean} writable Whether the data can be actuated
 *
 * @property {Number} G - the channel of this device
 * @property {Number} V - the vendor ID of this device
 * @property {Number} D - the device ID of this device
 *
 * @property {Function} write Called when data is received from the cloud
 *
 * @fires data - Emit this when you wish to send data to the cloud
 */
function Relay(num, serial) {

  var self = this;

  // This device will emit data
  this.readable = true;
  // This device can be actuated
  this.writeable = true;

  // Store the relay number and serial port
  this.relayNum = num;
  this.serial = serial;

  this.G = num; // G is a string a represents the channel
  this.V = 0; // 0 is Ninja Blocks' device list
  this.D = 1002; // 1002 is the Ninja Blocks relay definition

  // TODO: Get relay states. Send '[', each bit indicates the state of the given relay.
  // TODO: Wait for port to be opened

  process.nextTick(function() {
    self.emit('data','');
  });
};

/**
 * Called whenever there is data from the cloud
 * This is required if Device.writable = true
 *
 * @param  {String} data The data received
 */
Relay.prototype.write = function(data) {
  var cmd;

  if (data == '1') {
    // Turning on the relay
    cmd = String.fromCharCode('e'.charCodeAt(0) + this.relayNum);
  } else {
    // Turning off the relay
    cmd = String.fromCharCode('o'.charCodeAt(0) + this.relayNum);
  }

  this.serial.write(cmd);
};

Relay.prepareSerial = function(serialDev) {
  return new SerialPort(serialDev, {
    baudrate: 9600
  });
}
