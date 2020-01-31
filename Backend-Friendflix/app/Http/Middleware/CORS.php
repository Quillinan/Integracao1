<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response -> headers -> set("Acess-Control-Allow-Origin", "*");
        $response -> headers -> set("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        $response -> headers -> set("Acess-Control-Allow-Headers", "Content-Type, Accept, Authorization");
        return $response;
    }
}
