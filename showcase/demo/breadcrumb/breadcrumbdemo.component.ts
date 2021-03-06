import {Component} from 'angular2/core';
import {Breadcrumb} from '../../../components/breadcrumb/breadcrumb';
import {Button} from '../../../components/button/button';
import {TabView} from '../../../components/tabview/tabview';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'showcase/demo/breadcrumb/breadcrumbdemo.component.html',
    directives: [Breadcrumb,Button,TabPanel,TabView,ROUTER_DIRECTIVES]
})
export class BreadcrumbDemoComponent {

}