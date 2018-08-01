import { Component } from "@angular/core";

interface Passenger {
    id: number,
    fullName: string,
    checkedIn: boolean
}

@Component({
    selector: "passenger-dashboard",
    styleUrls: ["passenger-dashboard.component.scss"],
    template: `
        <div>
         <h3>Airline Passengers</h3>
         <ul>
            <li *ngFor="let passenger of passengers; let i = index;">
               {{i}}: {{ passenger.fullName }}
                <span class="status"
                    [class.checked-in]="passenger.checkedIn">
                </span>
            </li>
         </ul>
         <h3>Airline Passengers</h3>
         <ul>
            <li *ngFor="let passenger of passengers; let i = index;">
               {{i}}: {{ passenger.fullName }}
                <span
                    [ngClass]="{'checked-in': passenger.checkedIn}">
                </span>
            </li>
         </ul>
        </div>
    `
})
export class PassengerDashboardComponent {
    passengers: Passenger[] = [{
        id: 1,
        fullName: "Stephen",
        checkedIn: true
    }, {
        id: 2,
        fullName: "Rose",
        checkedIn: false
    }, {
        id: 3,
        fullName: "James",
        checkedIn: true
    }, {
        id: 4,
        fullName: "Louise",
        checkedIn: true
    }, {
        id: 5,
        fullName: "Tina",
        checkedIn: false
    }]
}