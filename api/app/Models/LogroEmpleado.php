<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogroEmpleado extends Model
{
    use HasFactory;
    public function empleados()
    {
        return $this->belongsTo(Empleado::class, 'id_Empleado');
    }
    public function logros()
    {
        return $this->belongsTo(Logro::class, 'id_Logro');
    }
}
