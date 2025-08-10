<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  
    public function up(): void
    {
        Schema::create('chamados', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('titulo');
        $table->text('descricao');
        $table->dropColumn('status');
        $table->timestamps();


        });
    }

   
    public function down(): void
    {
        Schema::table('chamados', function (Blueprint $table) {
        $table->string('status')->default('aberto');
    });

    }
};
