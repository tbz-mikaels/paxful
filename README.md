1- Clone repo using git clone https://github.com/tbz-mikaels/paxful.git <br>
2- Navigate to paxful directory<br>
3 Run docker-compose up -d<br>
4- Run docker exec -it paxful_laravel bash<br>
5- Run php artisan migrate<br>
6- Run php artisan db:seed --class=TradeSeeder<br>
<br>
Navigate to browser http://localhost/trades
