<?php

namespace App\Action\Pets;

use App\Models\Pets;

class GetAllPets
{
    function execute($number)
    {
        if ($number)
            return Pets::select('id', 'name', 'genre', 'age', 'price')->take($number)->get();

        return Pets::select('id', 'name', 'genre', 'age', 'price')->get();
    }

}