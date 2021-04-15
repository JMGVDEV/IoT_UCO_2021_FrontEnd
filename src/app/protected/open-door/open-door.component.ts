import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-open-door',
  templateUrl: './open-door.component.html',
  styleUrls: ['./open-door.component.css']
})
export class OpenDoorComponent implements OnInit {

  public openDoorForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.openDoorForm = this.FormBuilder.group({
      image: ['', Validators.required],
      pin: ['', Validators.required]
    })

  }

  public nowOpenDoor():void {
    if(this.openDoorForm.valid){
      console.log('genial')
    }
  }




  public onFileSelected(event: any): void {
      const file = event.target.files[0];
      console.log(file)
    
  }
}
