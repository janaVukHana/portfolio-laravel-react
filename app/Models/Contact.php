<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mail;
use App\Mail\ContactMail;

class Contact extends Model
{
    use HasFactory;

    public $fillable = ['email', 'fName', 'lName', 'message'];
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    // MUST GO INTO COMMENT BECAUSE I GOT SERVER ERROR
    // TODO: finish implementing sending email...
    // public static function boot() {
  
    //     parent::boot();
  
    //     static::created(function ($item) {
                
    //         $adminEmail = "your_admin_email@gmail.com";
    //         Mail::to($adminEmail)->send(new ContactMail($item));
    //     });
    // }
}
