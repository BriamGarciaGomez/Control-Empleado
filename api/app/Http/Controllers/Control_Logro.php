<?php

namespace App\Http\Controllers;

use App\Models\Logro;
use Illuminate\Http\Request;

class Control_Logro extends Controller
{
    
    public function index()
    {

        $logros= Logro::all();
        return $logros;
    }

    public function store(Request $request)
    {
        $logro = new Logro();
        $logro->Descripcion = $request->Descripcion;
        $logro->save();

    }

    public function show($id)
    {
        $logro = Logro::find($id);
        return $logro;

    }

    public function update(Request $request, $id)
    {
        $logro = Logro::findOrFail($request->id);
        $logro->Descripcion = $request->Descripcion;
        $logro->save();
        return $logro;

    }

    public function destroy($id)
    {
        $logro = Logro::destroy($id);
        return $logro;

    }
}
