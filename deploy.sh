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
npm run build -- --prod

mv -t dist src/share-image.jpg src/.htaccess src/google7cfd879982ead749.html src/sitemap.xml

tar -zcvf $TARGET.tar.gz dist

# Securly copy zip file to server /var/www/$DOMAIN
echo "Copy file $TARGET.tar.gz to $DEST"
echo "$USER, $IP_ADDRESS, $SSH_LOC"
scp -i ~/.ssh/id_178.62.126.206 $TARGET.tar.gz $USER@$IP_ADDRESS:$DEST >> /dev/null
echo "has copied"

# SSH into box, cd to /var/www/$DOMAIN, remove previous $FOLDERNAME
# unzip, move and rename into public_html remove zip
  ssh -i ~/.ssh/$SSH_LOC $USER@$IP_ADDRESS "cd $DEST
		echo '-- cd to $DEST --'
		echo 'list directory ---'
		ls
		echo '-- remove old $TARGET folder --'
	rm -rf $TARGET
		echo '-- making folder $TARGET --'
	mkdir -p $TARGET
		echo '-- unzip $TARGET/public_html/$TARGET.tar.gz --'
	tar -xvzf $TARGET.tar.gz --directory $TARGET
	mv $TARGET/dist $TARGET/public_html
		echo 'list directory ---'
		ls $TARGET
		rm $TARGET.tar.gz"
