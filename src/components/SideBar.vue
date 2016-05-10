/**
* Created by Christoffer Isenberg on 10-May-16.
*/

<template>
    <div class="col-md-3">
        <div class="panel panel-default panel-flush">
            <div class="panel-heading">
                {{ title }}
            </div>
            <div class="panel-body">
                <div class="app-tabs">
                    <ul class="nav app-tabs-stacked">
                        <li v-for="link in links">
                            <a v-link="link.url_object">
                                <span><i v-show="link.icon" :class="link.icon_class"></i>&nbsp;{{ link.text }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    /**
     * Title: {{ trans_choice('user.model', 2) }}
     * Links: [ { url_object, icon?, icon_class, text, auth? } ]
     * Directive: TODO: need to make a directive for authorization of links.
     */
    export default {
        props: ['title', 'links'],
        vuex: {
            getters: {
                auth: state => state.auth
            }
        },
    }
</script>

<style>

</style>