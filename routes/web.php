<?php

use App\Http\Controllers\guest\GuestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [GuestController::class, 'index'])->name('guest.index');
Route::get('/pets', [GuestController::class, 'pets'])->name('guest.pets');

require __DIR__ . '/auth.php';
