import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/shared/exchange.service';

interface Values {
  [key: string]: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //Por defecto number va a ser 1
  number: number = 1;
  datas: Values = {};

  isSelected: boolean = false;
  selectedRate: string = "EUR";
  
  constructor ( private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.exchangeService.getData().subscribe((res: any)=>
      {
        this.datas = res.rates;
      })
  }



  updateRates(currencyCode: string) {
    
    if(currencyCode === "EUR")
    {
      return;
    }
  
    this.exchangeService.getDataRate(currencyCode).subscribe((res: any)=> 
    {
      this.datas = res.rates;
      this.selectedRate = currencyCode;
      this.isSelected = true;

      console.log(currencyCode);
    })
  
  }
  
}


