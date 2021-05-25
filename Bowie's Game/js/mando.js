var mando = {
	objeto: null,
	eventosDisponibles: 'ongamepadconnected' in window,
	conectado: false,
	iniciar: function() {
		if (mando.eventosDisponibles) {
			window.addEventListener("gamepadconnected", mando.conectar);
			window.addEventListener("gamepaddisconnected", mando.desconectar);
		} else {
			mando.actualizar();
		}
	},
	conectar: function(evento) {
		mando.objeto = evento.gamepad;
		mando.identificar();
	},
	desconectar: function(evento) {
		console.log("Mando desconectado del índice %d: %s.", evento.gamepad.index, evento.gamepad.id);
	},
	actualizar: function() {
		if (!mando.eventosDisponibles) {
			mandos = null;

			try {
				mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
				mando.objeto = mandos[0];
				if(!mando.conectado) {
					mando.conectado = true;
					mando.identificar();
				}
			} catch(exception) {
				console.log(exception.message);
			}
		}

		if (!mando.objeto) {
			return;
		}

		if (mando.botonPulsado(mando.objeto.buttons[0])) {
			console.log("Mando: A");
		}
		if (mando.botonPulsado(mando.objeto.buttons[1])) {
			console.log("Mando: B");
		}
		if (mando.botonPulsado(mando.objeto.buttons[2])) {
			console.log("Mando: X");
		}
		if (mando.botonPulsado(mando.objeto.buttons[3])) {
			console.log("Mando: Y");
		}
		if (mando.botonPulsado(mando.objeto.buttons[4])) {
			console.log("Mando: L1");
		}
		if (mando.botonPulsado(mando.objeto.buttons[5])) {
			console.log("Mando: R1");
		}
		if (mando.botonPulsado(mando.objeto.buttons[6])) {
			console.log("Mando: L2");
		}
		if (mando.botonPulsado(mando.objeto.buttons[7])) {
			console.log("Mando: R2");
		}
		if (mando.botonPulsado(mando.objeto.buttons[8])) {
			console.log("Mando: SELECT");
		}
		if (mando.botonPulsado(mando.objeto.buttons[9])) {
			console.log("Mando: START");
		}
		if (mando.botonPulsado(mando.objeto.buttons[10])) {
			console.log("Mando: L3");
		}
		if (mando.botonPulsado(mando.objeto.buttons[11])) {
			console.log("Mando: R3");
		}
		if (mando.botonPulsado(mando.objeto.buttons[12])) {
			console.log("Mando: Arriba");
		}
		if (mando.botonPulsado(mando.objeto.buttons[13])) {
			console.log("Mando: Abajo");
		}
		if (mando.botonPulsado(mando.objeto.buttons[14])) {
			console.log("Mando: Izquierda");
		}
		if (mando.botonPulsado(mando.objeto.buttons[15])) {
			console.log("Mando: Derecha");
		}
	},
	botonPulsado: function(boton) {
		if (typeof(boton) == "object") {
			return boton.pressed;
		}
		return boton == 1.0;
	},
	identificar: function() {
		console.log("Mando conectado en el índice %d: %s. %d botones, %d ejes.",
			mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
	}
};