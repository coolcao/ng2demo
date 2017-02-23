import {Component} from '@angular/core';

@Component({
    selector:'contact-list',
    template:`
        <ul>
            <li *ngFor="let contact of contacts">
                <contact [contact]="contact" (onselectedContact)="onselectedContact(contact)"></contact>
            </li>
        </ul>
        <input type="text" [(ngModel)]="selectedContact.name"/>
    `
})

export class ContactListComponent{

    public contacts:Object[];
    public selectedContact = {};
    public changeSelectedContact:Function;
    public onselectedContact:Function;
    constructor(){
        this.contacts = [{
            name:'coolcao',
            age:23,
            email:'me@coolcao.com',
            phone:'18500215563'
        },{
            name:'lili',
            age:22,
            email:'lili@coolcao.com',
            phone:'1559409834'
        }];
        this.changeSelectedContact = function(contact:Object){
            this.selectedContact = contact;
        };
        this.onselectedContact = function(contact:Object){
            this.selectedContact = contact;
        }
    }

}