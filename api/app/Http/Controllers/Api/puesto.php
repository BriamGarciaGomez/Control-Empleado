<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Puesto as ModelsPuesto;
use Illuminate\Http\Request;

class puesto extends Controller
{

    public function index()
    {

        $puestos = ModelsPuesto::all();
        return $puestos;
    }

    public function store(Request $request)
    {
        $puesto = new ModelsPuesto();
        $puesto->Descripcion = $request->Descripcion;
        $puesto->save();

    }

    public function show($id)
    {
        $puesto = ModelsPuesto::find($id);
        return $puesto;

    }

    public function update(Request $request, $id)
    {
        $puesto = ModelsPuesto::findOrFail($request->id);
        $puesto->Descripcion = $request->Descripcion;
        $puesto->save();
        return $puesto;

    }

    public function destroy($id)
    {
        $puesto = ModelsPuesto::destroy($id);
        return $puesto;

    }
}
