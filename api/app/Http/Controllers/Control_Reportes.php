<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class Control_Reportes extends Controller
{

    public function reportePuesto()
    {

        $reportes = DB::table('puestos')->get();
        $pdf = PDF::loadView('Puesto', ['reportes' => $reportes]);

        return $pdf->stream();
    }

    public function reporteLogro()
    {

        $reportes = DB::table('logros')->get();
        $pdf = PDF::loadView('Logro', ['reportes' => $reportes]);
        return $pdf->stream();
    }

    public function reporteFalta()
    {

        $reportes = DB::table('faltas')->get();
        $pdf = PDF::loadView('Falta', ['reportes' => $reportes]);
        return $pdf->stream();
    }

    public function tiendasReporte()
    {

        $procedimiento = DB::select('select t.id ,t.Nombre, e.Primer_Nombre, p.Nombre as puesto, p.Salario
    from tiendas t
    inner JOIN empleados e  on e.id_tienda = t.id
    inner join puestos p on p.id = e.id_puesto
    order by p.Salario DESC ;');
        $pdf = PDF::loadView('Tiendas', ['reportes' => $procedimiento]);
        return $pdf->stream();

    }

    public function reporteTienda()
    {

        $reportes = Empleado::with(['tienda', 'puesto'])->get();
        $pdf = PDF::loadView('Tienda', ['reportes' => $reportes]);
        return $pdf->stream();

    }

}
