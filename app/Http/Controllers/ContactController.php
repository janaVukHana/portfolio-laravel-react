<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;

class ContactController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index() {
        return ContactResource::collection(Contact::all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return new ContactResource($contact);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request) {
        $messageInfo = $request->validated();
                
        $message = Contact::create($messageInfo);

        return response(new ContactResource($message), 201);
        // 201 == the request has succeeded and has led to the creation of a resource.
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response('', 204);
        // 204 === NO CONTENT, indicates that a request has succeeded, 
        // but that the client doesn't need to navigate away from its current page
    }
}
