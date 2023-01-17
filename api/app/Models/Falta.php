<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Falta extends Model
{
    use HasFactory;
    public function empleado1()
    {
        return $this->belongsToMany(Falta::class, 'logro_empleados');
    }
}
