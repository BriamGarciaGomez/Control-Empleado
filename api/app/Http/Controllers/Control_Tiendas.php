<?php

namespace App\Http\Controllers;

use App\Models\Tienda;
use Illuminate\Http\Request;


class Control_Tiendas extends Controller
{
    public function index()
    {
        $tiendas = Tienda::all();
        return $tiendas;

        
    }


    public function store(Request $request)
    {
        $tienda = new Tienda();
        $tienda->Nombre = $request->Nombre;
        $tienda->Ubicacion = $request->Ubicacion;
        $tienda->save();

    }

    public function show($id)
    {
        $tienda = Tienda::find($id);
        return $tienda;
    }

    public function update(Request $request, $id)
    {
        $tienda = Tienda::findOrFail($request->id);
        $tienda->Nombre = $request->Nombre;
        $tienda->Ubicacion = $request->Ubicacion;
        $tienda->save();
        return $tienda;
    }

    public function destroy($id)
    {
        $tienda = Tienda::destroy($id);
        return $tienda;
    }
}
