<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cats>
 */
class CatsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'genre' => fake()->randomElement(['male', 'female']),
            'age' => fake()->numberBetween(1, 40),
            'price' => fake()->randomNumber(7, true)
        ];
    }
}
