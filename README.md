Ninja Relays
============

Ninja Block interface module for a USB relay board, such as http://www.ebay.com.au/itm/Relay-Module-8-Channel-USB-Wireless-Xbee-Bluetooth-WIFI-mobile-phone-control-/320981982501. Communicates with the device with USB-over-Serial.

Setup
-----
Edit index.js and change the device referenced in the Relay.prepareSerial call. You might also need to change the number of relays registered if your board has less.
