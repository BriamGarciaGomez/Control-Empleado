<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFaltaEmpleadosTable extends Migration
{

    public function up()
    {
        Schema::create('falta_empleados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_Falta')
                ->nullable()
                ->constrained('faltas')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreignId('id_Empleado')
                ->nullable()
                ->constrained('empleados')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('falta-_empleados');
    }
}
