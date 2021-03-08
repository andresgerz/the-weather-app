<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use app\Models\User;
use App\Http\Resources\UserResource;

class UserController extends Controller {
    public function me() {
        return new UserResource(auth()->user());
    }
}