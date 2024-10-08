<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pets extends Model
{
    use HasFactory;
    protected $table = 'pets';

    protected $fillable = [
        'name',
        'genre',
        'age',
        'price',
    ];
}
