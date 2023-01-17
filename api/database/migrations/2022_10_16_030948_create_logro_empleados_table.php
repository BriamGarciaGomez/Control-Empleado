<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogroEmpleadosTable extends Migration
{

    public function up()
    {
        Schema::create('logro_empleados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_Logro')
                ->nullable()
                ->constrained('logros')
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
        Schema::dropIfExists('logro-_empleados');
    }
}
