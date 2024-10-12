echo "start updating repository"
git checkout main
git pull

echo "start installing packages"
yarn install

echo "start building packages"
yarn build

echo "start updating docker containers"
sudo docker-compose up -d --build
