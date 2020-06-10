import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutModel } from './models/layout.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public actionPointForm = new FormGroup({
    name: new FormControl('', [Validators.pattern(/^\S+$/g), Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.pattern(/^\S+$/g), Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.pattern(/^-?[0-9]+(\[0-9]*){0,1}$/)]),
  });

  constructor(private layoutModel: LayoutModel) { }

  ngOnInit(): void {
    this.layoutModel.initStore();
  }
}
