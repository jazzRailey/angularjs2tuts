import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
    
})
export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'Henry';
    lastName: string = 'Andes';
    gender: string = 'Male';
    age: number = 20; 
    showDetails: boolean = false;
    name: string = "Tom";
    onClick(): void {
        console.log('Button Clicked');
    }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }



}
