<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    //
    protected $table='users';
    protected $primary_key = 'user_id';
    protected $fillable=['name','username','email','password','designation','location'];

    public function loadContents(){
    	$data = Users::select('name','username','email','designation','location')->limit(10)->get();
    	return $data;
    }
}
