<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => ['required', 'email', 'unique:users,email'],
            'is_admin' => 'boolean',
        ]);

        // $rawPassword = Str::random(8);
        $rawPassword = 'thiev_123';

        $data['password'] = bcrypt($rawPassword);
        $data['email_verified_at'] = now();

        User::create($data);

        return redirect()->back();
    }

    public function changeRole(User $user)
    {
        $user->update(['is_admin' => !(bool) $user->is_admin]);

        $message = "User role was changed into " . ($user->is_admin ? '"Admin"' : '"Regular User"');

        return response()->json(['message' => $message]);
    }

    public function blockUnblock(User $user)
    {
        if ($user->blocked_at) {
            $user->blocked_at = null;
            $message = 'User "' . $user->name . '" has been activated.';
        } else {
            $user->blocked_at = now();
            $message = 'User "' . $user->name . '" has been blocked.';
        }

        $user->save();

        return response()->json(['message' => $message]);
    }

}
