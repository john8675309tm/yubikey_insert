# yubikey_insert

This App is for PIV authentication using Yubikey... I included a link at the bottom of this README.md with an EXCELLENT tutorial on setting up your key for this

This is a node.js app that runs in the background on your Mac, that pops up asking for your pin to unlock your yubikey to load the ssh-agent with your public key.
It also has a sample .bash_profile for the creating of the ssh-agent, it's still a work in progress.

Required Node.js Modules

npm install forever
npm install usb-detection
npm install node-osascript

edit start.sh to reflect your home directory.

You can then execute ./start.sh and it will fire up, you can close the command window and insert/remove your yubi key at will.


Check out this tutorial: 
https://itarch.stanford.edu/archives/2016/general/yubikey-piv-for-ssh-on-macs


