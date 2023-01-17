<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaltaEmpleado extends Model
{
    use HasFactory;

    public function empleados()
    {
        return $this->belongsTo(Empleado::class, 'id_Empleado');
    }
    public function faltas()
    {
        return $this->belongsTo(Falta::class, 'id_Falta');
    }

}
