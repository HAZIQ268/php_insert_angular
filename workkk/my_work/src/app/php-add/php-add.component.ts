import { Component } from '@angular/core';
import { PhpDataService } from '../php-data.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-php-add',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './php-add.component.html',
  styleUrl: './php-add.component.css',
  providers :[PhpDataService]
})
export class PhpAddComponent {

  name:string = "";
  email: string = "";
  password: string = "";

  constructor(private ss : PhpDataService) { }

  form_data() { 
    const userdata = {
      username: this.name,
      useremail: this.email,
      userpass: this.password
     
  
    };
       this.ss.xyz(userdata).subscribe({
        next: (response) =>{
          console.log('success:', response);
        }
      })

  }
}
