<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;


class ProxyController extends Controller {

    const TTL = 604800;
    protected $key;
    protected $cache;

    public function __construct() {
        $this->key = '';
        $this->cache = new Cache();
    }

    /**
     * get data from other API, if this key don't exist save data in chache    * and return data, otherwise don't save data in cache and only return it * from cache. 
     * 
    */

    public function store($cityId) {
        $this->key = $cityId;
        
        return json_encode($this->cache::remember($this->key, self::TTL, function() use ($cityId) {
            return json_decode(HTTP::get('https://worldweather.wmo.int/en/json/' . $cityId . '_en.json'));  
        }));
    }
}
