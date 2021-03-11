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
   
    public function register(Request $request) {
        $user = $request->all();
        
        User::create($user);

        return response()->json(['mesage'=> 'File upload successfully']);
    }
}