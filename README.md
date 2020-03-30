1- Clone repository using git clone command:

    git clone https://github.com/tbz-mikaels/paxful.git

2- Navigate to paxful directory which you recently cloned.

3- Then run following command to create your local instance up and running: <br>

<li><b>Build docker configuration and run the containers:</b></li>

    - docker-compose up -d
    - cp laravel-app/.env.example laravel-app/.env

<li><b>Open bash/terminal to run more commands inside:</b></li>

    docker exec -it paxful_laravel bash

<li><b>Install laravel dependencies, run migration and seed trades.</b></li>

    - composer install
    - php artisan storage:link
    - php artisan migrate --seed
    
<li><b>Install JS dependencies:</b></li>
        
    npm install && npm run development
      
4- After that you can visit following url to see the app in action:

    http://localhost

5- Visit mysql view
    
    http://localhost:8080/?server=paxful_mysql&username=root&db=paxful
    Password: 12345678

6- Stop docker by running:

    docker-compose down