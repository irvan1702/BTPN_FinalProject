import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'btn-svg',
  template: ''
})

export class BtnSvgComponent {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/add.svg'));
      iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/delete.svg'));
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/menu.svg'));
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/settings.svg'));
    iconRegistry.addSvgIcon(
      'power_settings_new',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/power_settings_new.svg'));
    iconRegistry.addSvgIcon(
      'sort_by_alpha',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/sort_by_alpha.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/search.svg'));
    iconRegistry.addSvgIcon(
      'filter_list',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/filter_list.svg'));
    iconRegistry.addSvgIcon(
      'restore',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/restore.svg'));
    iconRegistry.addSvgIcon(
      'person',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/person.svg'));
    iconRegistry.addSvgIcon(
      'people',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/people.svg'));
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/location.svg'));
    iconRegistry.addSvgIcon(
      'layers',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/layers.svg'));
    iconRegistry.addSvgIcon(
      'home',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/home.svg'));
    iconRegistry.addSvgIcon(
      'radio_button_checked',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/radio_button_checked.svg'));
    iconRegistry.addSvgIcon(
      'chevron_right',
      sanitizer.bypassSecurityTrustResourceUrl('src/btn-svg/chevron_right.svg'));
  }
}