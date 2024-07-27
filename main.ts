
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
        } else {
            return true;
        }}
    

   

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
    }}