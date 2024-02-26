Welcome to WishCart
=================
Introduction
-------------

**WishCart** is an eCommerce Web App built using React, Redux, Node.js, Supabase stack. It implements Security, Authentication, Authorization, Payment Gateway, Inventory Management, Order Management, and User Management. It is hosted in Vercel and Supabase Cloud.

> **Security Features:**

sops/age tool is used to secure secrets, passwords, API keys, database connection string, etc. by encrypting those values.

Usually .env file contains these secrets. You cannot find .env file anywhere in this repository as it's created by sops/age tool only inside the secure server instance after decrypting .env.age file. This is done by init.sh script. Ofcourse this will work only with your SSH private key.

**init.sh script**
                    
                age -d -i ~/.ssh/id_ed25519 .env.age > .env
                
Also when pushing code to git repo, .env file will not be pushed to repo. Sops/age tool is used to encrypt .env file to .env.age file and only encrypted file is stored. This is done by gitpush.sh script.

**gitpush.sh script**
                    
                age -R ~/.ssh/id_ed25519.pub .env > .env.age
                git add .
                git commit -m "$1"
                git push

Also in .gitignore file there is an entry to ignore .env files. So git push will not push those files to git repo. Also for additional security, the git repo can be made into private repository only accessible by your organization.

**.gitignore file**

                .env

> **Authentication Features:**

Implements Authentication using Supabase Auth and supports various OAuth providers like Google Authentication, Facebook, GitHub, Discord, etc.

> **Scalable Back-end Database Option:**

It is hosted in Supabase Cloud and can be scaled seamlessly.

**Self-Hosting Option:**

Supabase supports Self-Hosting. So it can be hosted On-Prem or in other cloud providers like AWS, Azure, Google, Digital Ocean, etc.

License
-------------

Copyright (c) Dilshad Mustafa 2024.

Mozilla Public License Version 2.0

https://www.mozilla.org/en-US/MPL/2.0/

Please Support This Project
---------------------------
[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H4V87SN5M2GG2)
