import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpenDoorService } from './shared/service/open-door.service';

@Component({
  selector: 'app-open-door',
  templateUrl: './open-door.component.html',
  styleUrls: ['./open-door.component.css']
})
export class OpenDoorComponent implements OnInit {

  public openDoorForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder,
              private doorService: OpenDoorService) { }

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
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.openDoorForm.get('profile')?.setValue(file);
      const formData = new FormData();
      formData.append('photo', file);
      formData.append('pin', this.openDoorForm.get('pin')?.value);
      console.log(formData);
      this.doorService.validateUser(formData).subscribe();
    }   
  }

  public closeDoor() {
    this.doorService.closeDoor().subscribe();
  }
}
