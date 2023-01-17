<?php

namespace App\Http\Controllers;

use App\Models\LogroEmpleado;
use Illuminate\Http\Request;

class Empleado_Logro extends Controller
{
   
    public function index()
    {
        $emlogros = LogroEmpleado::with(['empleados', 'logros'])->get();
        return $emlogros;
    }

    public function store(Request $request)
    {
        $emlogro = new LogroEmpleado();
        $emlogro->id_Logro = $request->id_Logro;
        $emlogro->id_Empleado = $request->id_Empleado;
        $emlogro->save();

    }

    public function show($id)
    {
        $emlogro = LogroEmpleado::find($id);
        return $emlogro;

    }

    public function update(Request $request, $id)
    {
        $emlogro = LogroEmpleado::findOrFail($request->id);
        $emlogro->id_Logro = $request->id_Logro;
        $emlogro->id_Empleado = $request->id_Empleado;
        $emlogro->save();
        return $emlogro;

    }

    public function destroy($id)
    {
        $emlogro = LogroEmpleado::destroy($id);
        return $emlogro;

    }
}
