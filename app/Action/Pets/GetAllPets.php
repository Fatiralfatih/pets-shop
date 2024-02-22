<?php

namespace App\Action\Pets;

use App\Models\Cats;

class GetAllPets
{
    function execute($number)
    {
        if ($number)
            return Cats::select('id', 'name', 'genre', 'age', 'price')->take($number)->get();

        return Cats::select('id', 'name', 'genre', 'age', 'price')->get();
    }

}