#!/bin/bash
EMAIL=""
SMTP=""
STATUS=`storcli /c0/eALL/sALL show all  | grep "State :" -A 8`

curl --mail-from "$EMAIL" --mail-rcpt "$EMAIL"  --ssl-reqd --url "$SMTP" -T <(echo -e "From: $EMAIL\nTo: $EMAIL\nSubject: RAID UPDATE\n\n$STATUS");