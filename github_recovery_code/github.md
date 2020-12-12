# clone into current directory
git init
git remote add origin <remote_url>
git fetch --all --prune
git checkout master
git add -A .
git commit -m "Adding my files..."

# Remote remote origin
git remote -v
git remote rm origin

# commit gh-pages to github remote
git add .
git commit -m 'updated items.js
git push