<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProxyApiController;
use App\Http\Controllers\Api\ProxyFlaskApiController;
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
MIDDLEWARES
*/


// Temporary, only testing


/* Route::middleware('auth:sanctum')->group(
  function () {
    
  }
); */

Route::post("/user/login", [UserController::class, "login"]);
Route::get("/user", [UserController::class, "getUsers"]);
Route::post("/user/register", [UserController::class, "register"]);


Route::get("/weather-data/{cityId}", [ProxyApiController::class, "store"]);
//Route::get("/weather-data/{cityId}", [ProxyFlaskApiController::class, "store"]);

Route::get("/event", [EventController::class, "show"]);
Route::post("/event", [EventController::class, "store"]);

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