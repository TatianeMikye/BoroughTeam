import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    public cpf = [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    public data = [/[0-3]/,/[0-9]/, '/', /[0-1]/,/[0-9]/, '/',/\d/,/\d/,/\d/,/\d/]
    public horario =[/[0-2]/, /[0-9]/,':', /[0-5]/,/[0-9]/]
    ngOnInit() {
    }
}
