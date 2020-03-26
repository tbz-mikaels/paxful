<?php

use Illuminate\Database\Seeder;
use \App\Trade;

class TradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Trade::class, 10)->create();
    }
}
