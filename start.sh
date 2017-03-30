#!/bin/bash
export SSH_AUTH_SOCK=~/.ssh/ssh-agent.$HOSTNAME.sock
ssh-add -l 2>/dev/null >/dev/null
if [ $? -ge 2 ]; then
  rm ~/.ssh/ssh-agent.$HOSTNAME.sock
  ssh-agent -a "$SSH_AUTH_SOCK" >/dev/null
fi
cd /Users/john/yubikey_insert
forever start resetSSH.js
