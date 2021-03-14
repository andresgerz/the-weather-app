<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;


class ProxyController extends Controller {

    const TTL = 5000;
    protected $key;
    protected $cache;

    public function __construct() {
        $this->key = 'data';
        $this->cache = new Cache();
    }

    /**
     * get data to API, if this key don't existe in chache to save it
     * 
    */

    public function store($cityId) {
        
        return json_encode($this->cache::remember($this->key, self::TTL, function() use ($cityId) {
            return json_decode(HTTP::get('https://worldweather.wmo.int/en/json/' . $cityId . '_en.json'));  
        }));
    }
}
