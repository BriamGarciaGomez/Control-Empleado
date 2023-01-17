<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpleadosTable extends Migration
{

    public function up()
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_puesto')
                ->nullable()
                ->constrained('puestos')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreignId('id_tienda')
                ->nullable()
                ->constrained('tiendas')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->string('Primer_Nombre');
            $table->string('Segundo_Nombre');
            $table->string('Primer_Apellido');
            $table->string('Segundo_Apellido');
            $table->string('Fecha_Nacimiento');
            $table->string('Foto');
            $table->string('Estado');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('empleados');
    }
}
