#!/bin/sh
# deploy.sh
# Easy deployment to multiple servers.
# Deploy code, files, settings and much more to multiple servers via ssh.

TARGET="dev"
FOLDERNAME="dist"
DEST="/var/www/jupiterandthegiraffe"

echo "CIRCLE_BRANCH: $CIRCLE_BRANCH"
echo "DEST: $DEST"
echo "TARGET: $TARGET"

if [ $CIRCLE_BRANCH = "master" ]; then
	TARGET="prod"
	echo "TARGET is now: $TARGET"
fi

#build
npm run build

tar -zcvf $TARGET.tar.gz $FOLDERNAME

# Securly copy zip file to server /var/www/$DOMAIN
echo "Copy file $TARGET.tar.gz to $DEST"
scp -i ~/.ssh/$SSH_LOC $TARGET.tar.gz $USER@$IP_ADDRESS:$DEST >> /dev/null

# SSH into box, cd to /var/www/$DOMAIN, remove previous $FOLDERNAME
# unzip, move and rename into public_html remove zip
ssh -i ~/.ssh/$SSH_LOC $USER@$IP_ADDRESS "cd $DEST
		echo '-- cd to $DEST --'
		echo 'list directory ---'
		ls
		echo '-- remove old $TARGET folder --'
	rm -rf $TARGET
		echo '-- making folder $TARGET --'
	mkdir $TARGET
		echo '-- unzip $TARGET.tar.gz --'
	tar -xvzf $TARGET.tar.gz -d $TARGET
		echo 'list directory ---'
		ls
		echo '-- moving $FOLDERNAME folder to $TARGET/public_html --'
	mv $TARGET/* $TARGET/public_html
		echo 'list directory ---'
		ls
		echo '-- removing $TARGET.tar.gz--'
	rm $TARGET.tar.gz"
