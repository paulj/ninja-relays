Ninja Relays
============

Ninja Block interface module for a USB relay board, such as http://www.ebay.com.au/itm/Relay-Module-8-Channel-USB-Wireless-Xbee-Bluetooth-WIFI-mobile-phone-control-/320981982501?_trksid=p3284.m263&_trkparms=algo%3DSI%26its%3DI%26itu%3DUCI%252BRTU%26otn%3D21%26pmod%3D300771851110%26ps%3D54#ht_4685wt_1220. Communicates with the device with USB-over-Serial.

Setup
-----
Edit index.js and change the device referenced in the Relay.prepareSerial call. You might also need to change the number of relays registered if your board has less.
