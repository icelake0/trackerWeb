@extends('layouts.login')

@section('content')
<form class="login100-form validate-form flex-sb flex-w" method="POST" action="{{ route('login') }}">
    @csrf
    <span class="login100-form-title p-b-53">
        Sign
    </span>
    
    <div class="p-t-31 p-b-9">
        <span class="txt1">
            {{ __('E-Mail Address') }}
            @error('email')
            <br />
 
                <strong>{{ $message }}</strong>

            @enderror
        </span>
        
    </div>
    <div class="wrap-input100 validate-input">
        <input class="input100" id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
        <span class="focus-input100"></span>
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
    </div>
    
    <div class="p-t-13 p-b-9">
        <span class="txt1">
            {{ __('Password') }}
            @error('password')
            <br />
 
                <strong>{{ $message }}</strong>

            @enderror
        </span>
    </div>
    
    <div class="wrap-input100 validate-input" data-validate = "Password is required">
        <input class="input100"  id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
        <span class="focus-input100"></span>
    </div>

      
    <div class="form-check">
        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

        <span class="txt1">
            {{ __('Remember Me') }}
        </span>
    </div>
        
            
      

    <div class="container-login100-form-btn m-t-17">
        <button class="login100-form-btn">
            Sign In
        </button>
    </div>

    <div class="w-full text-center p-t-55">
        <span class="txt2">
            <br>
            <br>
        </span>

        <a href="#" class="txt2 bo1">
            <br>
            <br>
        </a>
    </div>
</form>
@endsection
