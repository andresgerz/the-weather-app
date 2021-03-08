<?php

use App\Http\Controllers\Api\RegisteredUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post("login", [UserController::class, "login"]);

Route::post("register", [RegisteredUserController::class, "store"])->middleware(['guest']);



Route::middleware('auth:api')->group(function() {

  Route::get("user", [UserController::class, "user"]);

});

/* 
// user controller routes

Route::post("register", [UserController::class, "register"]);

// sanctum auth middleware routes

Route::middleware('auth:api')->group(function() {

    Route::get("user", [UserController::class, "user"]);

    Route::resource('tasks', TaskController::class);

}); */