<template>
    <div class="panel-heading">
        {{ trans('users.archive') }}
    </div>
    <div class="panel-body">
        <!-- <button class="btn btn-primary" v-on="click: fetch">Fetch</button> -->
        <table class="table table-bordered" v-if="user">
            <tr>
                <th>{{ trans('general.id') }}</th>
                <th>{{ trans('general.name') }}</th>
                <th>{{ trans('general.email') }}</th>
                <th>{{ trans('auth.role') }}</th>
                <th>{{ trans('general.action') }}</th>
            </tr>
            <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <span v-for="role in user.role">{{ role }}</span>
                </td>
                <td>
                    actions
                </td>
            </tr>
        </table>
    </div>
</template>

<script type="text/ecmascript-6">
    import { getUsers } from '../../../vuex/actions'
    export default {
        vuex: {
            getters: {
                users: getUsers
            }
        }
    }
</script>