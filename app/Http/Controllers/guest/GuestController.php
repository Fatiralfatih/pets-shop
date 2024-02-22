<?php

namespace App\Http\Controllers\guest;

use App\Action\Pets\GetAllPets;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class GuestController extends Controller
{
    function index()
    {
        $cats = app(GetAllPets::class)->execute(8);

        return Inertia::render('Guest/HomePage', [
            'cats' => $cats
        ]);
    }

    function category()
    {
        return Inertia::render('Guest/CategoryPage');
    }
}
