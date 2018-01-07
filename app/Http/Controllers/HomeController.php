<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

    public function loadContents(){
    	$userModels = new \App\Users();
    	$users = $userModels->loadContents();
    	return \Response::json($users);
    }
}
