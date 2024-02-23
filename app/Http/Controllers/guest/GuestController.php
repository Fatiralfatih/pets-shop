<?php

namespace App\Http\Controllers\guest;

use App\Action\Pets\GetAllPets;
use App\Http\Controllers\Controller;
use App\Models\Pets;
use Inertia\Inertia;

class GuestController extends Controller
{
    function index()
    {
        $pets = app(GetAllPets::class)->execute(8);

        return Inertia::render('Guest/HomePage', [
            'pets' => $pets
        ]);
    }

    function pets()
    {
        $pets = Pets::all();
        return Inertia::render('Guest/PetsPage', [
            'pets' => $pets,
        ]);
    }
}
