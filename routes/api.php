<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function(Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/projects', ProjectController::class);
});

Route::post('/login', [AuthController::class, 'login']);

// TODO: organize this shit...
// TESTING SENDING EMAIL
// protected routes
Route::get('/contact-us', [ContactController::class, 'index']);
Route::get('/contact-us/{contact}', [ContactController::class, 'show']);
Route::delete('/contact-us/{contact}', [ContactController::class, 'destroy']);
// unproteced route
Route::post('/contact-us', [ContactController::class, 'store'])->name('contact.us.store');

