#!/usr/local/bin/node
var usbDetect = require('usb-detection');
var osascript = require('node-osascript');
var exec = require('child_process').exec;

// Detect add/insert
usbDetect.on('add', function(device) { 
	//console.log('add', device); 
	if (device.manufacturer == "Yubico") {
		osascript.execute('display dialog "Enter Your Pin" default answer "" with hidden answer with icon caution with Title "Yubikey Password"', function(err, result, raw){
  		if (err) { 
  		} else {
			var txt = result['text returned'];
			var cmd="ssh-add -e /usr/local/lib/opensc-pkcs11.so";
			try {
			  require('child_process').execSync(cmd);
			} catch (err) {}
			cmd = '/Users/john/yubikey_insert/ssh-add-pass /usr/local/lib/opensc-pkcs11.so '+txt;
			exec(cmd, function(error, stdout, stderr) {
  				// command output is in stdout
				console.log(stdout);
			});
  		}
		});
	}
});
//usbDetect.on('add:vid', function(device) { console.log('add', device); });
//usbDetect.on('add:vid:pid', function(device) { console.log('add', device); });


// Detect remove
usbDetect.on('remove', function(device) {
	if (device.manufacturer == "Yubico") {
		//var cmd = execSync('ssh-add -e /usr/local/lib/opensc-pkcs11.so');
		var cmd="ssh-add -e /usr/local/lib/opensc-pkcs11.so";
		try {
		  require('child_process').execSync(cmd);
		} catch (err) {}
	}
});
//usbDetect.on('remove:vid', function(device) { console.log('remove', device); });
//usbDetect.on('remove:vid:pid', function(device) { console.log('remove', device); });
