<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePuestosTable extends Migration
{
    
    public function up()
    {
        Schema::create('puestos', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->float('Salario');
            $table->timestamps();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('puestos');
    }
}
