<template>
    <div class="panel-heading">
        {{ trans('users.archive') }}
    </div>

    <div class="panel-body" v-if="screengroups.length == 0">
        You have no users
    </div>

    <table class="table" v-if=" ! $loadingRouteData && screengroups.length > 0">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th width="120px">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="screengroup in screengroups">
            <td>{{ screengroup.id }}</td>
            <td>{{ screengroup.name }}</td>
            <td>{{ screengroup.age }}</td>
            <td>
                <a class="btn btn-primary btn-xs" v-link="{ path: '/screengroups/'+screengroup.id }">Edit</a>
                <a class="btn btn-primary btn-xs" v-on:click="deleteScreengroup($index)">Delete</a>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script type="text/ecmascript-6">
    import { getUserList } from '../../../vuex/getters'
    export default {
        vuex: {
            getters: {

            },
            actions: {

            }
        }
    }
</script>