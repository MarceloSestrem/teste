
enum MotorDirection {
    //% block="Left"
    left,
    //% block="Right"
    right
}

enum Doissensores {
    //% block="□□"
    white_white = 1,
    //% block="□■"
    white_black = 2,
    //% block="■□"
    black_white = 3,
    //% block="■■"
    black_black = 4
}

enum Tressensores {
    //% block="□□□"
    white_white_white = 1,
    //% block="□■□"
    white_black_white = 2,
    //% block="■□□"
    black_white_white = 3,
    //% block="■■□"
    black_black_white = 4,
    //% block="□■■"
    white_black_black = 5,
    //% block="■■■"
    black_black_black = 6
}

enum PingUnit {
    //% block="cm"
    Centimeters,
    //% block="μs"
    MicroSeconds
}

//% weight=99 icon="\uf0e7" color=#1B80C4
namespace Teste {
    //% weight=79
    //% blockId="tresssensores" block="Detectando a linha %Tressensores"
    export function readtres(tres: Tressensores): boolean {

        // let p1 = pins.digitalReadPin(DigitalPin.P0);
        // let p2 = pins.digitalReadPin(DigitalPin.P1);
        // let p3 = pins.digitalReadPin(DigitalPin.P2);
        if (tres ==  Tressensores.white_white_white) {
            if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) && pins.digitalReadPin(DigitalPin.P2) == 0) {
                return true;
            } else {
                return false;
            }
        } else if (tres ==  Tressensores.white_black_white) {
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) && pins.digitalReadPin(DigitalPin.P2) == 0) {
                return true;
            } else {
                return false;
            }
        } else if (tres == Tressensores.black_white_white) {
            if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) && pins.digitalReadPin(DigitalPin.P2) == 1) {
                return true;
            } else {
                return false;
            }
        } else if (tres ==  Tressensores.black_black_white) {
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) && pins.digitalReadPin(DigitalPin.P2) == 1) {
                return true;
            } else {
                return false;
            }
            } else {
               return true;
            }
     } else if (tres == Tressensores.white_black_black) {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) && pins.digitalReadPin(DigitalPin.P2) == 0) {
            return true;
        } else {
            return false;
        }
     } else if (tres == Tressensores.black_black_black) {
         if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) && pins.digitalReadPin(DigitalPin.P2) == 0) {
             return true;
         } else {
             return false;
         }
     }
    

   

        //% weight=79
    //% blockId="doissensores" block="Detectando a linha %Doissensores"
    export function readDois(dois: Doissensores): boolean {

        // let p1 = pins.digitalReadPin(DigitalPin.P0);
        // let p2 = pins.digitalReadPin(DigitalPin.P1);

        if (dois == Doissensores.white_white) {
            if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0) {
                return true;
            } else {
                return false;
            }
        } else if (dois == Doissensores.white_black) {
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0) {
                return true;
            } else {
                return false;
            }
        } else if (dois == Doissensores.black_white) {
            if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1) {
                return true;
            } else {
                return false;
            }
        } else if (dois == Doissensores.black_black) {
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    //% blockId=coocoo_sensor block="Ultrasonic Distance %unit"
    //% weight=69
    export function sensorDistance(unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        //pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        //pins.digitalWritePin(DigitalPin.P2, 0);
        //control.waitMicros(2);
        //pins.digitalWritePin(DigitalPin.P2, 1);
        //control.waitMicros(10);
        //pins.digitalWritePin(DigitalPin.P2, 0);

        // read pulse
        //const d = pins.pulseIn(DigitalPin.P2, PulseValue.High, maxCmDistance * 42);
        //console.log("Distance: " + d/42);

        //basic.pause(50)

        //switch (unit) {
        //case PingUnit.Centimeters: return Math.idiv(d, 42);
        //default: return d ;
        //}


        // send pulse
        pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P2, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P2, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P2, 0);

        // read pulse
        const d = pins.pulseIn(DigitalPin.P2, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            default: return d;
        }

    }

}


