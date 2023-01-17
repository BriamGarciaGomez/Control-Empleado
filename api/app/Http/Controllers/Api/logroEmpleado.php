<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Empleado;
use App\Models\Logro;
use Illuminate\Http\Request;

class logroEmpleado extends Controller
{

    public function index()
    {
        $empleado = Empleado::all();
        $logro = Logro::all();
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
