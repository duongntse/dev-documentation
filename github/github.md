# clone into current directory
git init
git remote add origin <remote_url>
git fetch --all --prune
git checkout master
git add -A .
git commit -m "Adding my files..."

# Remove remote origin
git remote -v
git remote rm origin

# commit gh-pages to github remote
git add .
git commit -m 'updated items.js
git push

# pull request from github repo, merge branch then push
mkdir comics
cd comics
git init
git remote add origin git@github.com:duongntse/react-comics.git
git pull
git checkout master
git checkout react-comics-ver1
git fetch --all --prune
git merge react-comics-ver1  --allow-unrelated-histories
## fix conflict merging
git status
git commit -am 'merged conflict'
git push

