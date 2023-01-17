<?php

namespace App\Http\Controllers;

use App\Models\Falta;
use Illuminate\Http\Request;

class Control_Falta extends Controller
{
    public function index()
    {

        $faltas= Falta::all();
        return $faltas;
    }

    public function store(Request $request)
    {
        $falta = new Falta();
        $falta->Descripcion = $request->Descripcion;
        $falta->save();

    }

    public function show($id)
    {
        $falta = Falta::find($id);
        return $falta;

    }

    public function update(Request $request, $id)
    {
        $falta = Falta::findOrFail($request->id);
        $falta->Descripcion = $request->Descripcion;
        $falta->save();
        return $falta;

    }

    public function destroy($id)
    {
        $falta = Falta::destroy($id);
        return $falta;

    }
}
