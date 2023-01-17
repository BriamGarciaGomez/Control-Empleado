<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;
    protected $fillable = [
        'Primer_Nombre', 
        'Segundo_Nombre', 
        'Primer_Apellido',
        'Segundo_Apellido', 
        'Fecha_Nacimiento',
        'Foto',
        'Estado', 
        'id_puesto',
        'id_tienda'];
    public function logro()
    {
        return $this->belongsToany(Logro::class, 'logro_empleados');
    }

    public function falta()
    {
        return $this->belongsToMany(Falta::class, 'falta_empleados');
    }

    public function puesto()
    {
        return $this->belongsTo(Puesto::class, 'id_puesto');
    }
    public function tienda()
    {
        return $this->belongsTo(Tienda::class, 'id_tienda');
    }
}
