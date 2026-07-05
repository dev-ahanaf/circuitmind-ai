export const TEMPLATES_CONTENT: Record<string, string> = {
  "line-follower": `## Project Overview
This project guides you through building an autonomous **Line Following Robot** utilizing an Arduino Uno, L298N dual H-bridge motor driver, two infrared (IR) obstacle/line reflection sensors, and two N20 gear motors. The robot follows a black track line on a white surface.

**Difficulty:** Beginner
**Estimated Cost:** ৳2400 BDT
**Time to build:** 4 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| Arduino Uno R3 | 1 | Main Processor | ৳850 |
| L298N H-Bridge Module | 1 | Dual Motor Control | ৳200 |
| TCRT5000 IR Line Sensor | 2 | Left and Right Tracking | ৳160 |
| N20 Gear Motor 6V | 2 | DC Motor Actuators | ৳700 |
| 2S Li-ion Battery Pack | 1 | 7.4V Power Supply | ৳350 |
| Robot Chassis & Wheels | 1 | Mechanical Frame | ৳140 |

## Wiring Connections
| From (MCU/Driver) | To (Component pin) | Notes |
| --- | --- | --- |
| Arduino D5 | L298N:IN1 | Left Motor direction |
| Arduino D6 | L298N:IN2 | Left Motor direction |
| Arduino D9 | L298N:IN3 | Right Motor direction |
| Arduino D10 | L298N:IN4 | Right Motor direction |
| Arduino D2 | IR Left:OUT | Digital signal line |
| Arduino D3 | IR Right:OUT | Digital signal line |
| Arduino 5V | IR Left / Right:VCC | Sensor power |
| Arduino GND | IR Left / Right:GND | Common ground |
| Battery VCC (7.4V)| L298N:12V | Driver power |
| Battery GND | L298N:GND | Common ground |

## Circuit Explanation
The TCRT5000 IR sensors project infrared light onto the surface. Black surfaces absorb IR light, returning a low analog reflection value (HIGH output state), while white surfaces reflect it back (LOW state). The Arduino reads the sensor states and sends driving commands to the L298N H-bridge module, which rotates the motors to correct the robot's course.

## Step-by-Step Assembly
1. Mount the Arduino, L298N motor driver, and IR sensors under the front bumper of the robot chassis.
2. Wire the two N20 DC motors to the left and right output terminals of the L298N driver.
3. Connect control pins D5, D6, D9, and D10 from the Arduino to IN1, IN2, IN3, and IN4 on the L298N module.
4. Route power from the 7.4V battery pack to the L298N VCC input and tie the ground to both L298N and Arduino GND.

## Arduino / MCU Code
\`\`\`cpp
// Line Following Robot Sketch
const int leftSensorPin = 2;
const int rightSensorPin = 3;

const int motorIn1 = 5;
const int motorIn2 = 6;
const int motorIn3 = 9;
const int motorIn4 = 10;

void setup() {
  pinMode(leftSensorPin, INPUT);
  pinMode(rightSensorPin, INPUT);
  
  pinMode(motorIn1, OUTPUT);
  pinMode(motorIn2, OUTPUT);
  pinMode(motorIn3, OUTPUT);
  pinMode(motorIn4, OUTPUT);
}

void loop() {
  int leftState = digitalRead(leftSensorPin);
  int rightState = digitalRead(rightSensorPin);

  if (leftState == LOW && rightState == LOW) {
    // Forward
    digitalWrite(motorIn1, HIGH);
    digitalWrite(motorIn2, LOW);
    digitalWrite(motorIn3, HIGH);
    digitalWrite(motorIn4, LOW);
  } else if (leftState == HIGH && rightState == LOW) {
    // Turn Left
    digitalWrite(motorIn1, LOW);
    digitalWrite(motorIn2, LOW);
    digitalWrite(motorIn3, HIGH);
    digitalWrite(motorIn4, LOW);
  } else if (leftState == LOW && rightState == HIGH) {
    // Turn Right
    digitalWrite(motorIn1, HIGH);
    digitalWrite(motorIn2, LOW);
    digitalWrite(motorIn3, LOW);
    digitalWrite(motorIn4, LOW);
  } else {
    // Stop
    digitalWrite(motorIn1, LOW);
    digitalWrite(motorIn2, LOW);
    digitalWrite(motorIn3, LOW);
    digitalWrite(motorIn4, LOW);
  }
}
\`\`\`

## Testing & Troubleshooting
- **Motors spin backward**: Swap the polarity wires of the corresponding motor connected to the L298N terminals.
- **Robot spins in place on the line**: Swap the left and right IR sensor input pins (D2 and D3) in the sketch.

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "Line Following Robot",
    "description": "Two IR sensors driving DC motors via an L298N module."
  },
  "components": [
    { "id": "U1", "type": "Arduino Uno", "label": "Arduino Uno", "x": 300, "y": 250 },
    { "id": "M1", "type": "L298N", "label": "L298N Driver", "x": 600, "y": 250 },
    { "id": "IR1", "type": "IR Sensor", "label": "IR Left", "x": 100, "y": 100 },
    { "id": "IR2", "type": "IR Sensor", "label": "IR Right", "x": 100, "y": 400 },
    { "id": "MOT1", "type": "DC Motor", "label": "Left Motor", "x": 800, "y": 150 },
    { "id": "MOT2", "type": "DC Motor", "label": "Right Motor", "x": 800, "y": 350 }
  ],
  "connections": [
    { "from": "U1:D5", "to": "M1:IN1" },
    { "from": "U1:D6", "to": "M1:IN2" },
    { "from": "U1:D9", "to": "M1:IN3" },
    { "from": "U1:D10", "to": "M1:IN4" },
    { "from": "U1:D2", "to": "IR1:out" },
    { "from": "U1:D3", "to": "IR2:out" },
    { "from": "M1:OUT1", "to": "MOT1:vcc" },
    { "from": "M1:OUT2", "to": "MOT1:gnd" },
    { "from": "M1:OUT3", "to": "MOT2:vcc" },
    { "from": "M1:OUT4", "to": "MOT2:gnd" }
  ]
}
\`\`\``,
  "obstacle-bot": `## Project Overview
This project details an autonomous **Obstacle Avoiding Robot** utilizing an Arduino Uno, an HC-SR04 ultrasonic distance sensor, an SG90 micro servo motor, and an L298N motor driver module. The robot sweeps the area and automatically avoids blocks.

**Difficulty:** Beginner
**Estimated Cost:** ৳1800 BDT
**Time to build:** 3.5 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| Arduino Uno R3 | 1 | Microcontroller | ৳850 |
| HC-SR04 Sensor | 1 | Ultrasonic Detection | ৳150 |
| SG90 Micro Servo | 1 | Sensor Sweep Platform | ৳150 |
| L298N Motor Driver | 1 | Driving Motors | ৳200 |
| DC Gear Motors | 2 | DC Motor Actuators | ৳300 |

## Wiring Connections
| From (MCU/Driver) | To (Component pin) | Notes |
| --- | --- | --- |
| Arduino D7 | HC-SR04:Trig | Trigger pin |
| Arduino D8 | HC-SR04:Echo | Echo input pin |
| Arduino D11 | SG90:Signal | Servo PWM signal |
| Arduino D5 | L298N:IN1 | Left Motor direction |
| Arduino D6 | L298N:IN2 | Left Motor direction |
| Arduino D9 | L298N:IN3 | Right Motor direction |
| Arduino D10 | L298N:IN4 | Right Motor direction |

## Circuit Explanation
The HC-SR04 sensor transmits high-frequency sound waves and measures the echo time to compute obstacle distance. The Arduino commands the SG90 servo to rotate 180 degrees to search for clear paths if an obstacle is closer than 20cm, then commands the L298N driver to steer the robot accordingly.

## Arduino / MCU Code
\`\`\`cpp
#include <Servo.h>
Servo scanServo;

const int trigPin = 7;
const int echoPin = 8;
const int servoPin = 11;

void setup() {
  scanServo.attach(servoPin);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  scanServo.write(90); // Center position
}

long getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  long duration = pulseIn(echoPin, HIGH);
  return duration * 0.034 / 2;
}

void loop() {
  long distance = getDistance();
  if (distance < 20 && distance > 0) {
    // Stop & look around
    scanServo.write(30);
    delay(500);
    long rightDist = getDistance();
    scanServo.write(150);
    delay(500);
    long leftDist = getDistance();
    scanServo.write(90);
    
    // steer away
  }
  delay(100);
}
\`\`\`

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "Obstacle Avoiding Robot",
    "description": "Servo sweeps ultrasonic sensor to map and navigate around blockages."
  },
  "components": [
    { "id": "U1", "type": "Arduino Uno", "label": "Arduino Uno", "x": 300, "y": 250 },
    { "id": "S1", "type": "Ultrasonic Sensor", "label": "HC-SR04", "x": 100, "y": 100 },
    { "id": "SV1", "type": "Servo", "label": "SG90 Servo", "x": 100, "y": 400 },
    { "id": "M1", "type": "L298N", "label": "L298N Driver", "x": 600, "y": 250 }
  ],
  "connections": [
    { "from": "U1:D7", "to": "S1:trig" },
    { "from": "U1:D8", "to": "S1:echo" },
    { "from": "U1:D11", "to": "SV1:signal" },
    { "from": "U1:D5", "to": "M1:IN1" },
    { "from": "U1:D6", "to": "M1:IN2" }
  ]
}
\`\`\``,
  "bt-car": `## Project Overview
This project details a **Bluetooth Controlled Robot Car** using an Arduino Uno, an HC-05 serial Bluetooth module, and an L298N H-bridge motor driver to steer DC gear motors wirelessly from a mobile app.

**Difficulty:** Intermediate
**Estimated Cost:** ৳2600 BDT
**Time to build:** 4.5 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| Arduino Uno R3 | 1 | Processor | ৳850 |
| HC-05 Module | 1 | Bluetooth Serial Comm | ৳350 |
| L298N Motor Driver | 1 | Driving Motors | ৳200 |
| DC Gear Motors | 2 | DC Motor Actuators | ৳700 |
| Battery Pack 2S | 1 | System Power | ৳500 |

## Wiring Connections
| From (MCU/Driver) | To (Component pin) | Notes |
| --- | --- | --- |
| Arduino RX (D0) | HC-05:TX | Receive serial data |
| Arduino TX (D1) | HC-05:RX | Transmit serial data |
| Arduino D5 | L298N:IN1 | Direction control |
| Arduino D6 | L298N:IN2 | Direction control |

## Arduino / MCU Code
\`\`\`cpp
char command;

void setup() {
  Serial.begin(9600);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    command = Serial.read();
    if (command == 'F') {
      digitalWrite(5, HIGH);
      digitalWrite(6, LOW);
    } else if (command == 'S') {
      digitalWrite(5, LOW);
      digitalWrite(6, LOW);
    }
  }
}
\`\`\`

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "Bluetooth Controlled Car",
    "description": "Receives serial commands over Bluetooth to drive L298N H-bridge motors."
  },
  "components": [
    { "id": "U1", "type": "Arduino Uno", "label": "Arduino Uno", "x": 300, "y": 250 },
    { "id": "BT1", "type": "Bluetooth HC05", "label": "HC-05 BT", "x": 100, "y": 150 },
    { "id": "M1", "type": "L298N", "label": "L298N Driver", "x": 600, "y": 250 }
  ],
  "connections": [
    { "from": "U1:RX", "to": "BT1:TX" },
    { "from": "U1:TX", "to": "BT1:RX" },
    { "from": "U1:D5", "to": "M1:IN1" },
    { "from": "U1:D6", "to": "M1:IN2" }
  ]
}
\`\`\``,
  "esp32-home": `## Project Overview
This project details a high-efficiency **ESP32 Home Automation** system. Using the dual-core ESP32 chip's built-in Wi-Fi, it creates a local web server to trigger a 4-channel relay board, controlling up to four AC appliances.

**Difficulty:** Intermediate
**Estimated Cost:** ৳1400 BDT
**Time to build:** 5 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| ESP32 DevKit V1 | 1 | Microcontroller + Wi-Fi | ৳500 |
| 4-Channel Relay Board | 1 | AC Appliance Switches | ৳350 |
| HLK-PM01 AC-DC module | 1 | 5V Power Supply module | ৳200 |
| Jumper wires & box | 1 | Assembly housing | ৳350 |

## Wiring Connections
| From (MCU/Power) | To (Component pin) | Notes |
| --- | --- | --- |
| ESP32 D12 | Relay IN1 | Switch 1 input |
| ESP32 D14 | Relay IN2 | Switch 2 input |
| ESP32 D27 | Relay IN3 | Switch 3 input |
| ESP32 D26 | Relay IN4 | Switch 4 input |
| HLK-PM01 5V | Relay VCC | Driver module power |
| ESP32 GND | Relay GND | Common ground connection |

## Arduino / MCU Code
\`\`\`cpp
#include <WiFi.h>

const char* ssid = "YourWiFi";
const char* password = "Password";
WiFiServer server(80);

const int relayPin1 = 12;

void setup() {
  pinMode(relayPin1, OUTPUT);
  digitalWrite(relayPin1, HIGH); // Off for active-low relay
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (client) {
    // Process HTTP server requests
  }
}
\`\`\`

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "ESP32 Home Automation",
    "description": "ESP32 web server triggering high-power relays."
  },
  "components": [
    { "id": "U1", "type": "ESP32", "label": "ESP32 NodeMCU", "x": 300, "y": 250 },
    { "id": "R1", "type": "Relay", "label": "4-Ch Relay", "x": 600, "y": 250 },
    { "id": "P1", "type": "Power Supply", "label": "5V HLK-PM01", "x": 100, "y": 250 }
  ],
  "connections": [
    { "from": "U1:D12", "to": "R1:IN1" },
    { "from": "U1:D14", "to": "R1:IN2" },
    { "from": "P1:5V", "to": "R1:VCC" },
    { "from": "U1:GND", "to": "R1:GND" }
  ]
}
\`\`\``,
  "irrigation": `## Project Overview
This project details a **Smart Irrigation System** utilizing an ESP32 microcontroller, an analog soil moisture sensor probe, a 5V relay module, and a 5V water pump to automate plant watering.

**Difficulty:** Intermediate
**Estimated Cost:** ৳1200 BDT
**Time to build:** 4 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| ESP32 MCU | 1 | Main Processor | ৳500 |
| Soil Moisture Sensor | 1 | Soil dryness detector | ৳120 |
| 5V Relay Module | 1 | High-current switch | ৳150 |
| Mini Water Pump | 1 | Watering plants | ৳250 |
| Power supply Adapter | 1 | Power source | ৳180 |

## Wiring Connections
| From (MCU/Driver) | To (Component pin) | Notes |
| --- | --- | --- |
| ESP32 GPIO 34 (ADC) | Soil Sensor:AO | Analog moisture read |
| ESP32 GPIO 25 | Relay:IN | Signal to trigger pump |
| ESP32 3.3V | Soil Sensor:VCC | Sensor power source |
| ESP32 GND | Soil Sensor:GND | Common ground |

## Arduino / MCU Code
\`\`\`cpp
const int soilPin = 34;
const int relayPin = 25;
const int dryThreshold = 2500; // Calibrated dryness value

void setup() {
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW);
  pinMode(soilPin, INPUT);
}

void loop() {
  int val = analogRead(soilPin);
  if (val > dryThreshold) {
    digitalWrite(relayPin, HIGH); // Turn on pump
    delay(5000);                  // Water for 5 seconds
    digitalWrite(relayPin, LOW);  // Turn off pump
  }
  delay(60000); // Check once per minute
}
\`\`\`

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "Smart Irrigation System",
    "description": "ESP32 reading soil moisture to activate a water pump."
  },
  "components": [
    { "id": "U1", "type": "ESP32", "label": "ESP32 MCU", "x": 300, "y": 250 },
    { "id": "S1", "type": "IR Sensor", "label": "Soil Probe", "x": 100, "y": 150 },
    { "id": "R1", "type": "Relay", "label": "Pump Relay", "x": 600, "y": 250 },
    { "id": "M1", "type": "DC Motor", "label": "Water Pump", "x": 800, "y": 250 }
  ],
  "connections": [
    { "from": "U1:D34", "to": "S1:out" },
    { "from": "U1:D25", "to": "R1:IN" },
    { "from": "R1:OUT", "to": "M1:vcc" },
    { "from": "U1:GND", "to": "S1:gnd" }
  ]
}
\`\`\``,
  "weather": `## Project Overview
This project details a portable **IoT Weather Station** using an ESP32 microcontroller, a high-accuracy BME280 pressure/humidity/temperature sensor, and a 0.96" I2C OLED display screen to monitor environment parameters locally and cloud publish.

**Difficulty:** Beginner
**Estimated Cost:** ৳1400 BDT
**Time to build:** 3 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| ESP32 DevKit | 1 | Microcontroller + Wi-Fi | ৳500 |
| BME280 Sensor Module | 1 | Temp/Humidity/Pressure | ৳450 |
| 0.96" OLED I2C Screen | 1 | Local display | ৳350 |
| Jumper wires | 1 | Connections | ৳100 |

## Wiring Connections
| From (MCU/Driver) | To (Component pin) | Notes |
| --- | --- | --- |
| ESP32 GPIO 21 (SDA) | BME280 & OLED:SDA | I2C data bus line |
| ESP32 GPIO 22 (SCL) | BME280 & OLED:SCL | I2C clock bus line |
| ESP32 3.3V | BME280 & OLED:VCC | 3.3V Power line |
| ESP32 GND | BME280 & OLED:GND | Common Ground |

## Arduino / MCU Code
\`\`\`cpp
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <Adafruit_SSD1306.h>

Adafruit_BME280 bme;
Adafruit_SSD1306 display(128, 64, &Wire);

void setup() {
  Wire.begin(21, 22);
  bme.begin(0x76);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
}

void loop() {
  float temp = bme.readTemperature();
  float hum = bme.readHumidity();
  
  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("Temp: "); display.print(temp); display.println(" C");
  display.print("Hum: "); display.print(hum); display.println(" %");
  display.display();
  delay(2000);
}
\`\`\`

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "IoT Weather Station",
    "description": "ESP32 reading environment parameters displayed on local I2C OLED screen."
  },
  "components": [
    { "id": "U1", "type": "ESP32", "label": "ESP32 MCU", "x": 350, "y": 250 },
    { "id": "B1", "type": "OLED", "label": "OLED Display", "x": 600, "y": 150 },
    { "id": "BME", "type": "OLED", "label": "BME280 Sensor", "x": 600, "y": 350 }
  ],
  "connections": [
    { "from": "U1:D21", "to": "B1:SDA" },
    { "from": "U1:D22", "to": "B1:SCL" },
    { "from": "U1:D21", "to": "BME:SDA" },
    { "from": "U1:D22", "to": "BME:SCL" }
  ]
}
\`\`\``,
  "smart-door": `## Project Overview
This project details a high-security **Arduino Smart Door Lock** utilizing an Arduino Uno, a 4x4 matrix membrane keypad, a 0.96" OLED I2C display, and an SG90 micro servo motor to unlock a latch on password entry.

**Difficulty:** Intermediate
**Estimated Cost:** ৳1500 BDT
**Time to build:** 5 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| Arduino Uno R3 | 1 | System Controller | ৳850 |
| 4x4 Membrane Keypad | 1 | Passcode entry matrix | ৳150 |
| SG90 Micro Servo | 1 | Lock actuator latch | ৳150 |
| 0.96" OLED I2C | 1 | User interface feedback | ৳350 |

## Wiring Connections
| From (MCU/Driver) | To (Component pin) | Notes |
| --- | --- | --- |
| Arduino D9 | SG90:Signal | Lock Servo signal |
| Arduino A4 (SDA) | OLED:SDA | I2C Data line |
| Arduino A5 (SCL) | OLED:SCL | I2C Clock line |
| Arduino D2-D8 | Keypad Pin 1-7 | Row/Column matrix |

## Arduino / MCU Code
\`\`\`cpp
#include <Keypad.h>
#include <Servo.h>

Servo lockServo;
const byte ROWS = 4;
const byte COLS = 4;
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
byte rowPins[ROWS] = {8, 7, 6, 5};
byte colPins[COLS] = {4, 3, 2};
Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

void setup() {
  lockServo.attach(9);
  lockServo.write(0); // Locked position
}

void loop() {
  char key = keypad.getKey();
  if (key) {
    // Process input credentials
  }
}
\`\`\`

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "Smart Door Lock",
    "description": "Keypad validation matching code inputs to open micro servo lock."
  },
  "components": [
    { "id": "U1", "type": "Arduino Uno", "label": "Arduino Uno", "x": 300, "y": 250 },
    { "id": "K1", "type": "Push Button", "label": "Matrix Keypad", "x": 100, "y": 250 },
    { "id": "M1", "type": "Servo", "label": "Lock Servo", "x": 600, "y": 150 },
    { "id": "D1", "type": "OLED", "label": "OLED Status", "x": 600, "y": 350 }
  ],
  "connections": [
    { "from": "U1:D9", "to": "M1:signal" },
    { "from": "U1:A4", "to": "D1:SDA" },
    { "from": "U1:A5", "to": "D1:SCL" },
    { "from": "U1:D2", "to": "K1:out" }
  ]
}
\`\`\``,
  "555-blink": `## Project Overview
This project details a classic analog **555 Timer LED Blinker** using a NE555 Timer IC configured in Astable Multivibrator mode. It switches an output LED on/off without using any microcontrollers.

**Difficulty:** Beginner
**Estimated Cost:** ৳150 BDT
**Time to build:** 1.5 hours

## Required Components
| Component | Qty | Purpose | Approx. Price (BDT) |
| --- | --- | --- | --- |
| NE555 Timer IC | 1 | Clock Generator IC | ৳30 |
| Red LED 5mm | 1 | Output indicator | ৳10 |
| Resistor 10k, 1k | 2 | Timing resistors | ৳10 |
| Capacitor 10uF | 1 | Timing capacitor | ৳20 |
| 9V Battery & Clip | 1 | Power source | ৳80 |

## Wiring Connections
| From (Component pin) | To (Component pin) | Notes |
| --- | --- | --- |
| NE555 Pin 1 | GND | Common ground |
| NE555 Pin 8 | 9V VCC | VCC Power |
| NE555 Pin 3 | LED Anode (via 1k) | PWM Output pin |
| NE555 Pin 4 | 9V VCC | Reset (Active high) |

## Circuit Explanation
The NE555 timer operates by charging and discharging the 10uF capacitor through the 10k and 1k timing resistors. The voltages on the capacitor trigger comparison thresholds inside the NE555 IC, making Pin 3 flip between 9V and GND continuously, blinking the connected LED.

## Circuit JSON
\`\`\`json
{
  "project": {
    "title": "555 Timer LED Blinker",
    "description": "NE555 astable multivibrator driving an LED flashing output."
  },
  "components": [
    { "id": "U1", "type": "Switch", "label": "NE555 IC", "x": 300, "y": 250 },
    { "id": "LED1", "type": "LED", "color": "Red", "x": 550, "y": 250 },
    { "id": "R1", "type": "Resistor", "value": "1k", "x": 420, "y": 250 },
    { "id": "B1", "type": "9V Battery", "label": "9V Power", "x": 100, "y": 250 }
  ],
  "connections": [
    { "from": "B1:VCC", "to": "U1:VCC" },
    { "from": "U1:OUT", "to": "R1:left" },
    { "from": "R1:right", "to": "LED1:anode" },
    { "from": "LED1:cathode", "to": "B1:GND" }
  ]
}
\`\`\``
};
