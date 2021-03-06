import {Component, Input} from 'angular2/core'

@Component({
    selector:'switch',
    template:`
    <ul class="nav nav-pills">
    <li [class.active]="viewMode == 'map'"><a (click)="viewMode='map'">Map View</a></li>
    <li [class.active]="viewMode == 'list'"><a (click)="viewMode='list'">List View</a></li>
    <ul>
    <div [ngSwitch]="viewMode">
    <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
    <template [ngSwitchWhen]="'list'">List View Content</template>
    </div>
    `
})
export class SwitchComponent{
 @Input() viewMode ='map';
}