<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Chamado;
use App\Http\Controllers\ChamadoController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/abrir-chamado', function () {
    return Inertia::render('AbrirChamado');
})->name('abrir-chamado');

Route::get('/meus-chamados', function () {
    $chamados = Chamado::where('user_id', auth()->id())->get();

    return Inertia::render('MeusChamados', [
        'chamados' => $chamados,
    ]);
})->middleware(['auth', 'verified'])->name('meus-chamados');

Route::post('/chamados', [ChamadoController::class, 'store'])
    ->middleware(['auth'])
    ->name('chamados.store');

Route::get('/chamados/{id}/editar', [ChamadoController::class, 'edit'])->name('chamados.edit');
Route::put('/chamados/{id}', [ChamadoController::class, 'update'])->name('chamados.update');
Route::delete('/chamados/{id}', [ChamadoController::class, 'destroy'])->name('chamados.destroy');





require __DIR__.'/auth.php';
