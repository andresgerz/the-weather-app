<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ConsumeApiController extends Controller {


    public function index() {

        //return HTTP::get('https://jsonplaceholder.typicode.com/users');       
        return HTTP::get('https://worldweather.wmo.int/en/json/294_en.json');       
    }
}
