<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProxyController extends Controller {


    public function index($cityId) {

        //return HTTP::get('https://jsonplaceholder.typicode.com/users');       
        
        return HTTP::get('https://worldweather.wmo.int/en/json/' . $cityId . '_en.json');       
    }
}
