<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProjectResource::collection(Project::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {   
        $projectInfo = $request->validated();

        // TODO: because image is required you don't need if statement...
        if(request()->file('image')) {

            $image = request()->file('image');
            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move('images/',$image_name);
    
            $projectInfo['image'] = $image_name;
        }
                
        $project = Project::create($projectInfo);

        return response(new ProjectResource($project), 201);
        // 201 == the request has succeeded and has led to the creation of a resource.
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $projectInfoUpdated = $request->validated();

        if(request()->file('image')) {
            // TODO: delete prev image
            $image = request()->file('image');
            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move('images/',$image_name);
    
            $projectInfoUpdated['image'] = $image_name;
        }

        $project->update($projectInfoUpdated);

        return new ProjectResource($project);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return response('', 204);
        // 204 === NO CONTENT, indicates that a request has succeeded, 
        // but that the client doesn't need to navigate away from its current page
    }
}
