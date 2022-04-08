import { Component, OnInit } from '@angular/core';
import { ConversionApiServiceService } from 'src/app/services/conversion-api-service.service';

@Component({
  selector: 'app-volume-conversion',
  templateUrl: './volume-conversion.component.html',
  styleUrls: ['./volume-conversion.component.css']
})
export class VolumeConversionComponent implements OnInit {

  conversionResult : string='';
  conversionValue : string='';
  constructor(private apiService : ConversionApiServiceService) { }

  ngOnInit(): void {
  }

  validateStudentResponse(data: any) {
    this.conversionResult ='';
    this.conversionValue='';
    console.log("Entered inputValue : " + data.inputValue);
    console.log("Entered inputUnit : " + data.inputUnit);
    console.log("Entered targetUnit : " + data.targetUnit);
    console.log("Entered studentResponse : " + data.studentResponse);
    let conversionData = {
      'inputValue': data.inputValue,
      "inputUnit":data.inputUnit,
      "targetUnit":data.targetUnit
    };
    this.apiService.convertVolume(conversionData).subscribe(
      (res: any) => {
       console.log('conversion result = ', res);
       if(!res['status']){
          console.log('error in conversion');
          this.conversionResult='error';
       }else  if(res['status']){
          console.log('process response data');
          let targetValue:number = res.data.targetValue;
          let studentResponse:number = data.studentResponse;
          this.conversionValue=''+res.data.targetValue;;
          if(targetValue.toFixed(1) == studentResponse.toFixed(1)){
            this.conversionResult='correct';
          }else{
            this.conversionResult='incorrect';
          }
       }
      }
      );
 }
}
