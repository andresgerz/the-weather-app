<?php

namespace app\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Controllers\Controller;

class UserController extends Controller {

    /**
     * write comment
     * 
    */

  /*   public function register(Request $request) {
        $user = $request->all();
        
        User::create($user);

        return response()->json(['mesage'=> 'File upload successfully']);
    } */
    
    public function getUsers() {

        return response()->json(['users' => User::all()]);
    }

    public function register(Request $request) {

        $validator  =   Validator::make($request->all(), [
            "name"  =>  "required",
            "email"  =>  "required|email",
            "password"  =>  "required",
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_errors" => $validator->errors()]);
        }

        $inputs = $request->all();
        $inputs["password"] = Hash::make($request->password);

        $user = User::create($inputs);

        if(!is_null($user)) {
            return response()->json(["status" => "success", "message" => "Success! registration completed", "data" => $user]);
        }
        else {
            return response()->json(["status" => "failed", "message" => "Registration failed!"]);
        }
    }


    // User login
    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            "email" =>  "required|email",
            "password" =>  "required",
        ]);

        if($validator->fails()) {
            return response()->json(["validation_errors" => $validator->errors()]);
        }

        $user = User::where("email", $request->email)->first();

        if(is_null($user)) {
            return response()->json(["status" => "failed", "message" => "Failed! email not found"]);
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $token = $request->user()->createToken('token');

            return response()->json(["status" => "success", "login" => true, "token" => $token->plainTextToken, "data" => $user]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! invalid password"]);
        }
    }


    public function user() {
        $user       =       Auth::user();
        if(!is_null($user)) { 
            return response()->json(["status" => "success", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "message" => "Whoops! no user found"]);
        }        
    }
}