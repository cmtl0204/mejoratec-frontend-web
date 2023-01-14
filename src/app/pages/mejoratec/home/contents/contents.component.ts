import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MejoratecService} from "../../../../services/mejoratec.service";

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  areas: any = [];
  indicators: any = [];
  display: boolean = false;
  selectedArea: any = null;
  backgroundImage = 'background-image: url(\'assets/images/mejoratec/home/gestion_academica.jpg\')';

  constructor(public mejoratecService: MejoratecService) {

  }

  ngOnInit() {
    this.areas = [
      {
        label: 'GESTIÓN ACADÉMICA',
        icon: "assets/images/mejoratec/home/gestion_administrativa.jpg",
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/gestion_academica.jpg\')',
        isVisible: true,
        indicators: [
          {
            label: 'MATRÍCULA',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/matricula.jpg\')',
          },
          {
            label: 'OFERTA',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/oferta.jpg\')',
          },
          {
            label: 'ESTUDIANTES',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/estudiantes.jpg\')',
          },
          {
            label: 'GRADUADOS',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/graduados.jpg\')',
          },
          {
            label: 'CURRÍCULA',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/curricula.jpg\')',
          }
        ],
      },
      {
        label: 'DOCENTES',
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/docentes.jpg\')',
        isVisible: true,
        indicators: [
          {
            label: 'DOCENTES',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/docentes_indicador.jpg\')',
          },
        ],

      },
      {
        label: 'NECESIDADES',
        icon: "assets/images/mejoratec/home/necesidades.jpg",
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/necesidades.jpg\')',
        isVisible: true,
        indicators: [
          {
            label: 'NECESIDADES',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/necesidades.jpg\')',
          },
        ]
      },
      {
        label: 'INFRAESTRUCTURA',
        icon: "assets/images/mejoratec/home/infraestructura.jpg",
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/infraestructura.jpg\')',
        isVisible: false,
        indicators: [
          {
            label: 'FÍSICA',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/intraestructura_fisica.jpg\')',
          },
          {
            label: 'TECNOLÓGICA',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/intraestructura_tecnologica.jpg\')',
          },
        ]
      },
      {
        label: 'INVESTIGACIÓN',
        icon: "assets/images/mejoratec/home/investigacion.jpg",
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/investigacion.jpg\')',
        isVisible: false,
        indicators: [
          {
            label: 'INVESTIGACIÓN',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/investigacion.jpg\')',
          },
        ]
      },
      {
        label: 'VINCULACIÓN',
        icon: "assets/images/mejoratec/home/vinculacion.jpg",
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/vinculacion.jpg\')',
        isVisible: false,
        indicators: [
          {
            label: 'VINCULACIÓN',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/vinculacion.jpg\')',
          },
        ]
      },
      {
        label: 'GESTIÓN ADMINISTRATIVA',
        icon: "assets/images/mejoratec/home/gestion_administrativa.jpg",
        backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/gestion_administrativa.jpg\')',
        isVisible: false,
        indicators: [
          {
            label: 'GESTIÓN ADMINISTRATIVA',
            backgroundImage: 'background-image: url(\'assets/images/mejoratec/home/gestion_administrativa.jpg\')',
          },
        ]
      },
    ];
  }

  showMessage() {
    alert('hola');
  }

  showIndicators(area: any) {
    this.indicators = area.indicators;
    this.display = true;
    this.mejoratecService.setArea = area.label;
  }

  showResults(indicator: any) {

  }
}
