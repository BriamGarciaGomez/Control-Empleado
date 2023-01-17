<?php

namespace App\Http\Controllers;

use App\Models\Puesto;
use Illuminate\Http\Request;

class Control_Puestos extends Controller
{
    public function index()
    {

        $puestos = Puesto::all();
        return $puestos;
    }

    public function store(Request $request)
    {
        $puesto = new Puesto();
        $puesto->Nombre = $request->Nombre;
        $puesto->Salario = $request->Salario;

        $puesto->save();

    }

    public function show($id)
    {
        $puesto = Puesto::find($id);
        return $puesto;

    }

    public function update(Request $request, $id)
    {
        $puesto = Puesto::findOrFail($request->id);
        $puesto->Nombre = $request->Nombre;
        $puesto->Salario = $request->Salario;
        $puesto->save();
        return $puesto;

    }

    public function destroy($id)
    {
        $puesto = Puesto::destroy($id);
        return $puesto;

    }
}
