/**
 * Created by E214595 on 01.03.2017.
 */
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
// moduleId: module.id,
  selector: 'my-documents',
  templateUrl: './documents.component.html',
  styleUrls: [ './documents.component.css' ]
})

export class DocumentsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
