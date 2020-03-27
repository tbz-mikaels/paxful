1- Clone repo using git@github.com:tbz-mikaels/paxful.git
2- Navigate to paxful directory
3- Run docker compose build
4 Run docker-compose up -d
5- Run docker exec -it paxful_laravel bash
6- Run php artisan db:seed --class=TradeSeeder

Navigate to browser http://localhost/trades
