<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProxyController;
use App\Http\Controllers\Api\RegisteredUserController;
use App\Http\Controllers\Api\EventController;

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

/* 
Route::post("login", [UserController::class, "login"]);

*/
Route::get("user", [UserController::class, "show"])->middleware(['guest']);
Route::post("user", [UserController::class, "register"]);

Route::get("weather-data/{cityId}", [ProxyController::class, "store"]);

Route::post("event", [EventController::class, "store"]);
Route::get("event", [EventController::class, "show"]);

/* 
Route::middleware('auth:api')->group(function() {

  Route::get("user", [UserController::class, "user"]);

});
 */
/* 
// user controller routes

Route::post("register", [UserController::class, "register"]);

// sanctum auth middleware routes

Route::middleware('auth:api')->group(function() {

    Route::get("user", [UserController::class, "user"]);

    Route::resource('tasks', TaskController::class);

}); */