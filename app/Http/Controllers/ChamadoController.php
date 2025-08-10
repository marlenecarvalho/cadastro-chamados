<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chamado;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ChamadoController extends Controller
{
    public function store(Request $request)
    {
        // Validação dos dados
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
        ]);

        // Criação do chamado
        Chamado::create([
            'user_id' => auth()->id(),
            'titulo' => $validated['titulo'],
            'descricao' => $validated['descricao'],
           
        ]);

        // Redireciona com mensagem de sucesso
        return redirect()->route('meus-chamados')->with('success', 'Chamado criado! Em breve lhe damos um retorno. Até mais!');
    }

    public function edit($id)
{
    $chamado = Chamado::where('user_id', auth()->id())->findOrFail($id);
    return Inertia::render('EditarChamado', ['chamado' => $chamado]);
}

public function update(Request $request, $id)
{
    $validated = $request->validate([
        'titulo' => 'required|string|max:255',
        'descricao' => 'required|string',
    ]);

    $chamado = Chamado::where('user_id', auth()->id())->findOrFail($id);
    $chamado->update($validated);

    return redirect()->route('meus-chamados')->with('success', 'Chamado atualizado!');
}

public function destroy($id)
{
    $chamado = Chamado::where('user_id', auth()->id())->findOrFail($id);
    $chamado->delete();

    return redirect()->route('meus-chamados')->with('success', 'Chamado excluído!');
}

}