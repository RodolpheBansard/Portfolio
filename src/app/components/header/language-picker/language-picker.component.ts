import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

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
              private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  toggleLanguagePicker(){
    this.isLanguagePickerActive = ! this.isLanguagePickerActive;
  }

  selectLanguage(language: Language){
    this.selectedLanguage = language;
    this.translateService.use(language.identifier)
    this.isLanguagePickerActive = false;
  }
}
