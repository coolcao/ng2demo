import {Component} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
@Component({
    selector:'contact',
    template:`
                <h3 (click)="changeSelectedContact(contact)">姓名：{{contact.name}}</h3>
                <h4>年齡：{{contact.age}}</h4>
                <h4>電話：{{contact.phone}}</h4>
                <h4>郵箱：{{contact.email}}</h4>
    `,
    inputs:['contact'],
    outputs:['onselectedContact']  //outputs这里是要向外传递的属性，事件类型，在组件中必须先实例化一个EventEmitter对象
})

export class ContactDetailComponent{
    public onselectedContact = new EventEmitter();
    public contact = {};
    public selectedContact = {};
    public changeSelectedContact:Function;
    constructor(){
        this.changeSelectedContact = function(contact:Object){
            //当监听到事件时，向父组件发射事件
            this.onselectedContact.emit(contact);
        }
    }

}