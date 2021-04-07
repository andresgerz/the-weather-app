<?php

namespace App\Http\Controllers\Api;

use App\Actions\Fortify\CreateNewUser;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\Contracts\RegisterViewResponse;

class RegisteredUserController extends Controller {

    public function __construct(StatefulGuard $guard) {
        $this->guard = $guard;
    }

    /**
     * show the registration view. 
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Laravel\Fortify\Contracts\RegisterViewResponse 
    */

    public function create(Request $request): RegisterViewResponse {
        return app(RegisterViewResponse::class);
        
    }

    /** 
     * Create a new registered user.
     * 
     * @param \Illuminate\Http\Request $request
     * @param \Laravel\Fortify\Contracts\CreatesNewUsers $creator
     * @return \Laravel\Fortify\Contracts\RegisterResponse
    */

    public function store(Request $request, CreateNewUser $creator): RegisterResponse {

        event(new Registered($user = $creator->create($request->all())));

        $this->guard->login($user);

        return app(RegisterResponse::class);

    }
}
