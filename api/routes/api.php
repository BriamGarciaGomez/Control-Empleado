<?php

use App\Http\Controllers\Control_Empleado;
use App\Http\Controllers\Control_Falta;
use App\Http\Controllers\Control_Logro;
use App\Http\Controllers\Control_Puestos;
use App\Http\Controllers\Control_Reportes;
use App\Http\Controllers\Control_Tiendas;
use App\Http\Controllers\Empleado_Falta;
use App\Http\Controllers\Empleado_Logro;
use App\Models\FaltaEmpleado;
use App\Models\LogroEmpleado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//ruta para la gestion en la tabla Logros
Route::controller(Control_Logro::class)->group(function () {
    Route::get('/logros', 'index');
    Route::post('/logro', 'store');
    Route::get('/logro/{id}', 'show');
    Route::put('/logro/{id}', 'update');
    Route::delete('/logro/{id}', 'destroy');
});

 //ruta para la gestion en la tabla Faltas
Route::controller(Control_Falta::class)->group(function () {
    Route::get('/faltas', 'index');
    Route::post('/falta', 'store');
    Route::get('/falta/{id}', 'show');
    Route::put('/falta/{id}', 'update');
    Route::delete('/falta/{id}', 'destroy');
});

//ruta para la gestion en la tabla tiendas  //
Route::controller(Control_Tiendas::class)->group(function () {
    Route::get('/tiendas', 'index');
    Route::post('/tienda', 'store');
    Route::get('/tienda/{id}', 'show');
    Route::put('/tienda/{id}', 'update');
    Route::delete('/tienda/{id}', 'destroy');
});

// //ruta para la gestion en la tabla Puestos  //
Route::controller(Control_Puestos::class)->group(function () {
    Route::get('/puestos', 'index');
    Route::post('/puesto', 'store');
    Route::get('/puesto/{id}', 'show');
    Route::put('/puesto/{id}', 'update');
    Route::delete('/puesto/{id}', 'destroy');
});


Route::controller(Control_Empleado::class)->group(function () {
    Route::get('/empleados', 'index');
    Route::post('/empleado', 'store');
    Route::get('/empleado/{id}', 'show');
    Route::put('/empleado/{id}', 'update');
    Route::delete('/empleado/{id}', 'destroy');
});

// // Genaracion de reportes. 
Route::controller(Control_Reportes::class)->group(function () {
    Route::get('reportes/puestos', 'reportePuesto');
    Route::get('reportes/tiendas', 'reporteTienda');
    Route::get('reportes/logros', 'reporteLogro');
    Route::get('reportes/faltas', 'reporteFalta');
    Route::get('reportes/tiendaEmpleado', 'tiendasReporte');

   
});


Route::controller(Empleado_Falta::class)->group(function () {
    Route::get('/emfaltas', 'index');
    Route::post('/emfalta', 'store');
    Route::get('/emfalta/{id}', 'show');
    Route::put('/emfalta/{id}', 'update');
    Route::delete('/emfalta/{id}', 'destroy');
});

Route::controller(Empleado_Logro::class)->group(function () {
    Route::get('/emlogros', 'index');
    Route::post('/emlogro', 'store');
    Route::get('/emlogro/{id}', 'show');
    Route::put('/emlogro/{id}', 'update');
    Route::delete('/emlogro/{id}', 'destroy');
});

// Route::get("puesto-pdf",[Reportepuesto::class, "indexpdf"]);


