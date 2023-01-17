<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tienda as ModelsTienda;
use Illuminate\Http\Request;


class tienda extends Controller
{
    public function index()
    {
        $tiendas = ModelsTienda::all();
        return $tiendas;

    }

    public function store(Request $request)
    {
        $tienda = new ModelsTienda();
        $tienda->Nombre = $request->Nombre;
        $tienda->Ubicacion = $request->Ubicacion;
        $tienda->save();

    }

    public function show($id)
    {
        $tienda = ModelsTienda::find($id);
        return $tienda;
    }

    public function update(Request $request, $id)
    {
        $tienda = ModelsTienda::findOrFail($request->id);
        $tienda->Nombre = $request->Nombre;
        $tienda->Ubicacion = $request->Ubicacion;
        $tienda->save();
        return $tienda;
    }

    public function destroy($id)
    {
        $tienda = ModelsTienda::destroy($id);
        return $tienda;
    }
}
