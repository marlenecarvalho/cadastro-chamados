## Sequencia realizada

Criar projeto Laravel

´´´

composer create-project laravel/laravel .

´´´

Intalar o breeze para login

´´´

composer require laravel/breeze --dev

´´´

php artisan breeze:install

´´´

Criar o db, ajustar o dotenv e rodar o migrate

´´´

php artisan migrate

´´´

Instalar as dependecias do Node.js

´´´

npm install

´´´

Executar as bibliotecas Node.js

´´´

npm run dev

´´´

Executar o projeto Laravel

´´´
php artisan serve

´´´

Parar o servidor

´´´

Ctrl + C

Criar seeder para testes

´´´

php artisan make:seeder UserSeeder


Criar as demais paginas do projeto e integrar as rotas

Fazer a migration do banco para os chamados
´´´
## Migration/Script do create_chamados_table:
        Schema::create('chamados', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('titulo');
        $table->text('descricao');
        $table->dropColumn('status'); // Remover a coluna 'status'
        $table->timestamps();


        });

## Migration/Script do create_users_table:

            schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
            });






## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
