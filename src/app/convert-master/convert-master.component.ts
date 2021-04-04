import {Component,OnInit,OnDestroy} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {ConvertService} from './convert.service';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-convert-master',
  templateUrl: './convert-master.component.html',
  styleUrls: ['./convert-master.component.scss'],
  providers: [TreeDragDropService,MessageService]
})
export class ConvertMasterComponent implements OnInit,OnDestroy {

    public sourceFile: TreeNode[]= [];

    public destinationFile: TreeNode[] = [];

    public subscriptionCollection: Subscription = new Subscription();
    
    constructor(private convertService: ConvertService) { }

    ngOnInit() {

        this.getSourcefile();
        this.destinationfile();
       
  
    }

    //Method to get source file
    getSourcefile(){
      const providerSubscription = this.convertService
      .getSourceFile({})
      .subscribe(
        (res) => {
          console.log(res);

          if (res) {
           this.sourceFile = res.data;
          } else {
            this.sourceFile = []
          }
        },
        (error) => {
          this.sourceFile = []
        },
        () => {}
      );
    this.subscriptionCollection.add(providerSubscription);
  }

  //Method to get destination file
  destinationfile(){

    const providerSubscription = this.convertService
      .getDestinationFile({})
      .subscribe(
        (res) => {
          console.log(res);

          if (res) {
           this.destinationFile = res.data;
          } else {
            this.destinationFile = []
          }
        },
        (error) => {
          this.destinationFile = []
        },
        () => {}
      );
    this.subscriptionCollection.add(providerSubscription);

  }


    ngOnDestroy() {
      this.subscriptionCollection.unsubscribe();
    }

}
