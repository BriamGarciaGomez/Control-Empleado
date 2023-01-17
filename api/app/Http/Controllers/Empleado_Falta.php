<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use App\Models\Falta;
use App\Models\FaltaEmpleado;
use Illuminate\Http\Request;
class Empleado_Falta extends Controller
{
    public function index()
    {
        $emfaltas = FaltaEmpleado::with(['empleados', 'faltas'])->get();
        return $emfaltas;
    }

    public function store(Request $request)
    {
        $emfalta = new FaltaEmpleado();
        $emfalta->id_Falta = $request->id_Falta;
        $emfalta->id_Empleado = $request->id_Empleado;
        $emfalta->save();

    }

    public function show($id)
    {
        $emfalta = FaltaEmpleado::find($id);
        return $emfalta;

    }

    public function update(Request $request, $id)
    {
        $emfalta = FaltaEmpleado::findOrFail($request->id);
        $emfalta->id_Falta = $request->id_Falta;
        $emfalta->id_Empleado = $request->id_Empleado;
        $emfalta->save();
        return $emfalta;

    }

    public function destroy($id)
    {
        $emfalta = FaltaEmpleado::destroy($id);
        return $emfalta;

    }
}
