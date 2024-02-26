age -R ~/.ssh/id_ed25519.pub .env > .env.age
export GIT_SSH_COMMAND="ssh -i ~/.ssh/new"
git add .
git commit -m "$1"
git push

