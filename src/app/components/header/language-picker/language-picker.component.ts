import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CookieService} from "ngx-cookie-service";

export interface Language{
  name:string;
  identifier:string;
  flagPath:string;
}

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isLanguagePickerActive = false;
    }
  }

  @Input()
  isOverlay = false;

  languages : Language[] = [
    {
      name:'English',
      identifier:'en',
      flagPath:'assets/images/en-flag.svg'
    },
    {
      name:'Français',
      identifier:'fr',
      flagPath:'assets/images/fr-flag.svg'
    }
  ]

  isLanguagePickerActive = false;
  selectedLanguage: Language = this.languages[0];

  constructor(private eRef: ElementRef,
              private translateService: TranslateService,
              private cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('language')){
      const savedLanguageIdentifier : string = this.cookieService.get('language');
      this.languages.forEach((language)=> {
        if(language.identifier === savedLanguageIdentifier){
          this.selectLanguage(language);
        }
      })
    }
  }

  toggleLanguagePicker(){
    this.isLanguagePickerActive = ! this.isLanguagePickerActive;
  }

  selectLanguage(language: Language){
    this.selectedLanguage = language;
    this.translateService.use(language.identifier)
    this.isLanguagePickerActive = false;
    this.cookieService.set('language',language.identifier);
  }
}
