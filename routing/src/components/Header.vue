<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
        <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link>
        
        <router-link to="/user_props/3" tag="li" active-class="active"><a>User Props 3</a></router-link>
        <router-link to="/user_props/4" tag="li" active-class="active"><a>User Props 4</a></router-link>

        <router-link to="/user_nest" tag="li" active-class="active"><a>User Nest</a></router-link>
    </ul>
</template>
