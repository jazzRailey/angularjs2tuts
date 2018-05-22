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


}

/*
    Angular Interpolation

    Data-binding        Description
    One Way             From Component to View Template
    One Way             From View Template to Component
    Two Way             From Component to View Template & From View template to Component

    Examples :
    <h1>{{firstName}}</h1>
    <h1>{{'Name = '  + firstName}}</h1>
    <h1>{{10 + 20 + 30}}</h1>
    <h1>{{ristname ? firstName : 'No name specified'}}</h1>
    <img src = {{imagePath}} // imagePath is the variable you declared in the class section
    <h1>{{'Full Name = ' + getFullName()}}</h1>

    // inside the class
    firstName : string = 'Tom';
    lastName : string = 'Hopkins';

    getFullName() : string {
        return this.firstName + ' ' + this.lastName;
    }

    Property Binding in Angular2

    interpolation                               Property Binding
    <img src='{{imagePath}}' />                 <img [src]='imagePath' />

    Interpolation v/s Property binding
    - Interpolation is a special syntax that Angular coverts into property binding
    - To concatenate strings we must use interpolation instead of property binding
        Ex : <img src='http://www.pragimtech.com/{{imagePath}}'>

    - To set an element property to a non-string data value, you must use property binding
        <button [disabled] = 'isDisabled'>Click Me </button>

    Property Binding
    - Remember to enclose the property name iwth a pair of square brackets
    - Canonical form <button bind-disabled='isDisabled'> Click Me</button>
    - Angular data binding sanitizes malicious content before displaying it.



    HTML Attribute vs DOM Property
    -Attributes are defined by HTML, where as properties are defined by the DOM
    - Attributes initialize DOM properties. Once the initialization complete, the attributes job is done
    - Property values can change, where as attribute value can't

    - Important points
        HTML atrributes and the DOM properties are different thisgs
        Angular binding works with properties and events, and not attributes


    Lesson 11
    What is Attribute Binding?
    - Interpolation and Property binding deal with binding Component class properties to HTML element properties and NOT ATTRIBUTES
    - But not all HTML element attributes have corresponding properties. For example, colspan attribute does not have a corresponding property.
    - In situations like this we want to be able to bind to HTML element attributes
    - Hence, Angular provided Attribute binding

    Attribute Binding Examples
        <th [attr.colspan] = "columnSpan">
        <th attr.colspan = "{{columnSpan}}">


        
*/