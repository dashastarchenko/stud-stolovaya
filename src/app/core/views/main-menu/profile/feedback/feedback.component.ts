import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.html',
  styleUrls: ['feedback.css'],
})
export class FeedbackComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(FeedbackDialogComponent);
  }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: 'feedback-dialog.html',
  styleUrls: ['feedback-dialog.scss'],
})
export class FeedbackDialogComponent {
  constructor(   public dialogRef: MatDialogRef<FeedbackDialogComponent>) {}

  Title: string;
  Article: string;

  sendMessage() {  }

}
