<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFaltasTable extends Migration
{
    
    public function up()
    {
        Schema::create('faltas', function (Blueprint $table) {
            $table->id();
            $table->string('Descripcion');
            $table->timestamps();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('faltas');
    }
}
