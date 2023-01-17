<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Control_Empleado extends Controller
{

    public function index()
    {
        // return Product::select('id','title','description','image')->get();
        // $empleados = Empleado::with('puesto')->findOrFail(1);

        $empleados = Empleado::with(['puesto', 'tienda'])->get();
        return $empleados;
    }

    public function store(Request $request)
    {

        $request->validate([
            'Primer_Nombre' => 'required',
            'Segundo_Nombre' => 'required',
            'Primer_Apellido' => 'required',
            'Segundo_Apellido' => 'required',
            'Fecha_Nacimiento' => 'required',
            'Foto' => 'required|image',
            'Estado' => 'required',
            'id_puesto' => 'required',
            'id_tienda' => 'required'
        ]);

        try {

           $imagen = $request->Foto;
           $rutaGuardarImg = 'empleados/imagenes';

            $imageName = Str::random() . '.' . $request->Foto->getClientOriginalExtension();
               
            Empleado::create($request->post() + ['Foto' => $imageName]);
            $imagen->move($rutaGuardarImg, $imageName);
            return response()->json([
                'message' => 'Empleado ingresado Correctamente',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => '¡Error de Datos del Empleado Al Servidor!',
            ], 500);
        }
   

    }

    public function show($id)
    {
        $empleado = Empleado::find($id);
        return $empleado;

    }

    public function update(Request $request, $id)
    {
        $empleado = Empleado::findOrFail($request->id);
        $empleado->Primer_Nombre = $request->Primer_Nombre;
        $empleado->Segundo_Nombre = $request->Segundo_Nombre;
        $empleado->Primer_Apellido = $request->Primer_Apellido;
        $empleado->Segundo_Apellido = $request->Segundo_Apellido;
        $empleado->Fecha_Nacimiento = $request->Fecha_Nacimiento;
        $empleado->Foto = $request->Foto;
        $empleado->Estado = $request->Estado;
        $empleado->id_puesto = $request->id_puesto;
        $empleado->id_tienda = $request->id_tienda;


        try {

            $imagen = $request->imagen;
            $rutaGuardarImg = 'empleados/imagenes';
 
             $imageName = Str::random() . '.' . $request->imagen->getClientOriginalExtension();
                
             $empleado->save();
             $imagen->move($rutaGuardarImg, $imageName);
             return response()->json([
                 'message' => 'Empleado ingresado Correctamente',
             ]);
         } catch (\Exception $e) {
             return response()->json([
                 'message' => '¡Error de Datos del Empleado Al Servidor!',
             ], 500);
         }
    
       
       
        return $empleado;

    }

    public function destroy($id)
    {
        $empleado = Empleado::destroy($id);
        return $empleado;

    }
}
