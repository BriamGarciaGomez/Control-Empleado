<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Logro as ModelsLogro;
use Illuminate\Http\Request;
class logro extends Controller
{
   
    public function index()
    {

        $logros= ModelsLogro::all();
        return $logros;
    }

    public function store(Request $request)
    {
        $logro = new ModelsLogro();
        $logro->Descripcion = $request->Descripcion;
        $logro->save();

    }

    public function show($id)
    {
        $logro = ModelsLogro::find($id);
        return $logro;

    }

    public function update(Request $request, $id)
    {
        $logro = ModelsLogro::findOrFail($request->id);
        $logro->Descripcion = $request->Descripcion;
        $logro->save();
        return $logro;

    }

    public function destroy($id)
    {
        $logro = ModelsLogro::destroy($id);
        return $logro;

    }
}
