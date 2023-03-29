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
