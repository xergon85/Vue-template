<template>
    <div class="panel-heading">
        Your profile
    </div>
    <div class="panel-body">
        <!-- <button class="btn btn-primary" v-on="click: fetch">Fetch</button> -->
        <table class="table table-bordered" v-if="user">
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </table>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        vuex: {
            getters: {
                user: state => state.auth.user
            }
        }
    }
</script>