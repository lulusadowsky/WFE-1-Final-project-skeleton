import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  constructor() { 
    var synth = new Tone.MonoSynth({
			"oscillator" : {
				"type" : "square8"
			},
		 	"envelope" : {
		 		"attack" : 0.05,
		 		"decay" : 0.3,
		 		"sustain" : 0.4,
		 		"release" : 0.8,
		 	},
		 	"filterEnvelope" : {
		 		"attack" : 0.001,
		 		"decay" : 0.7,
		 		"sustain" : 0.1,
		 		"release" : 0.8,
		 		"baseFrequency" : 300,
		 		"octaves" : 4
		 	}
		 }).toMaster();
		 // GUI //
	var keyboard = Interface.Keyboard();
		 keyboard.keyDown = function (note) {
		     synth.triggerAttack(note);
		 };
		 keyboard.keyUp = function () {
		     synth.triggerRelease();
		};
  }

  ngOnInit() {
  }

}
