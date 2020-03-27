<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Trade;
use Faker\Generator as Faker;

$factory->define(Trade::class, function (Faker $faker) {
    $methods = Trade::ALLOWED_METHODS;
    $statuses = Trade::ALLOWED_STATUS;

    return [
        'buyer_username' => $faker->userName,
        'payment_method' => $methods[array_rand($methods)],
        'amount' => $faker->biasedNumberBetween(10, 100),
        'status' => $statuses[array_rand($statuses)],
    ];
});
