<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller {

    public function store(Request $request) {
        
        $event = $request->all();
        
        if ($request->hasFile('image')) {

            $file = $request->file('image');

            $filename = $file->getClientOriginalName();
    
            $event['image']=$filename;
            $filename = pathinfo($filename, PATHINFO_FILENAME);
            $name_File = str_replace(" ", "_", $filename);
            
            $extension = $file->getClientOriginalExtension();
            
            $picture = date('His') . '-' . $name_File . '-' . $extension;
            $file->move(public_path('images/'), $picture);
            
            
          /*   
            $book['image'] = time() . '_' . $request->file('image')->getClientOriginalName();
            $request->file('image')->storeAs('images/' . auth()->id(), $book['image']); */

            Event::create($event);
            
            return response()->json(['mesage'=> 'File upload successfully']);

        } else {
            return response()->json(['mesage'=> 'Error upload']);
        }

    }

    public function show() {
        return response()->json(['img'=> Storage::url('images/201810-smn-visible-jpg')]);
        ;
    }
}
