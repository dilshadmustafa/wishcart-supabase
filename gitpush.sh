age -R ~/.ssh/id_ed25519.pub ./frontend/.env > ./frontend/.env.age
git add .
git commit -m "$1"
git push

