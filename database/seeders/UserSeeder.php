<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate (
            ['email'=> 'marcarvalho3@gmail.com'],
            ['name' => 'Mari', 'email' => 'marcarvalho3@gmail.com', 'password' => '123456']

        );
        User::firstOrCreate (
            ['email'=> 'formiga@gmail.com'],
            ['name' => 'Kah', 'email' => 'formiga@gmail.com', 'password' => '123456a']

        );
        User::firstOrCreate (
            ['email'=> 'formi@gmail.com'],
            ['name' => 'Kaha', 'email' => 'formi@gmail.com', 'password' => '123456b']

        );

    }
}
