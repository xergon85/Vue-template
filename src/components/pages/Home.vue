<template>
    <div class="container app-screen">
    <!-- Tabs -->
    <div class="col-md-3">
        <div class="panel panel-default panel-flush">
            <div class="panel-heading">
                {{ trans('general.home') }}
            </div>
            <div class="panel-body">
                <div class="app-tabs">
                    <ul class="nav app-tabs-stacked">
                        <li >
                            <a v-link="{ name: 'home.welcome' }">
                                <span><i class="fa fa-btn fa-fw fa-list"></i>&nbsp;{{ trans('general.welcome') }}</span>
                            </a>
                        </li>
                        <li >
                            <a v-link="{ name: 'home.about' }">
                                <span><i class="fa fa-btn fa-fw fa-lightbulb-o"></i>&nbsp;{{ trans('general.about') }}</span>
                            </a>
                        </li>
                        <li >
                            <a v-link="{ name: 'home.terms' }">
                                <span><i class="fa fa-btn fa-fw fa-lightbulb-o"></i>&nbsp;{{ trans('general.terms') }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Tab Panes -->
    <div class="col-md-9">
        <div class="tab-content">
            <div class="tab-pane">
                <div class="panel panel-default">
                    <router-view></router-view>
                </div>
            </div><!-- End tab panel -->
        </div><!-- End tab content -->
    </div><!-- End tab panes col-md-9 -->
</div><!-- End container -->
</template>