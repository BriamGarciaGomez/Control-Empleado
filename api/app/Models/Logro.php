<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logro extends Model
{
    use HasFactory;
    public function empleado()
    {
        return $this->belongsToMany(Empleado::class, 'logro_empleados');
    }
}
