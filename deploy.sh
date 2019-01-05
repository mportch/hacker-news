#!/usr/bin/env sh

# abort on errors
set -e

# remove old build
rm -rf docs

# run build
npm run build

# rename build dir
mv dist docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

cp favicon.ico index-build.html docs
mv docs/index-build.html docs/index.html

git add .
git commit -m "Updated build"

git push -f
