//#region node_modules/.nitro/vite/services/ssr/assets/components-data-BBD0b4nE.js
var COMPONENTS = [
	{
		id: "arduino-uno",
		name: "Arduino Uno R3",
		category: "Microcontroller",
		description: "ATmega328P dev board, 14 GPIO, 6 PWM, 6 analog inputs.",
		voltage: "5V",
		current: "40 mA/pin",
		price: 12,
		pros: ["Huge ecosystem", "Beginner-friendly"],
		cons: ["Limited memory (32 KB)"],
		alternatives: ["Arduino Nano", "ESP32"],
		datasheet: "https://docs.arduino.cc/hardware/uno-rev3",
		applications: [
			"Robotics",
			"Sensor logging",
			"Prototyping"
		]
	},
	{
		id: "esp32",
		name: "ESP32 DevKit V1",
		category: "Microcontroller",
		description: "Wi-Fi + BLE dual-core MCU, 34 GPIO, 240 MHz.",
		voltage: "3.3V",
		current: "500 mA peak",
		price: 8,
		pros: [
			"Wi-Fi & Bluetooth",
			"Cheap",
			"Fast"
		],
		cons: ["3.3V logic only"],
		alternatives: ["ESP8266", "Raspberry Pi Pico W"],
		datasheet: "https://www.espressif.com/en/products/socs/esp32",
		applications: [
			"IoT",
			"Home automation",
			"Data logging"
		]
	},
	{
		id: "esp8266",
		name: "ESP8266 NodeMCU",
		category: "Microcontroller",
		description: "Cheap Wi-Fi MCU with Lua/Arduino support.",
		voltage: "3.3V",
		current: "170 mA",
		price: 4,
		pros: ["Ultra cheap Wi-Fi"],
		cons: ["Fewer GPIO than ESP32"],
		alternatives: ["ESP32"],
		datasheet: "https://www.espressif.com/en/products/socs/esp8266",
		applications: ["IoT", "Weather station"]
	},
	{
		id: "rpi-pico",
		name: "Raspberry Pi Pico W",
		category: "Microcontroller",
		description: "RP2040 dual-core with Wi-Fi.",
		voltage: "3.3V",
		current: "300 mA",
		price: 6,
		pros: ["Dual-core", "Cheap"],
		cons: ["Newer ecosystem"],
		alternatives: ["ESP32", "Arduino Nano"],
		datasheet: "https://www.raspberrypi.com/products/raspberry-pi-pico/",
		applications: ["Embedded", "PIO tricks"]
	},
	{
		id: "stm32-bp",
		name: "STM32 Blue Pill",
		category: "Microcontroller",
		description: "STM32F103C8T6, 72 MHz ARM Cortex-M3.",
		voltage: "3.3V",
		current: "50 mA",
		price: 5,
		pros: ["Very fast", "Cheap"],
		cons: ["Steeper learning curve"],
		alternatives: ["ESP32"],
		datasheet: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html",
		applications: ["Motor control", "DSP"]
	},
	{
		id: "l298n",
		name: "L298N Motor Driver",
		category: "Driver",
		description: "Dual H-bridge motor driver up to 2A/channel.",
		voltage: "5-35V",
		current: "2A",
		price: 3,
		pros: ["Cheap", "Robust"],
		cons: ["Big voltage drop", "Runs hot"],
		alternatives: ["TB6612FNG", "DRV8833"],
		datasheet: "https://www.st.com/resource/en/datasheet/l298.pdf",
		applications: ["Robot cars", "DC motors"]
	},
	{
		id: "tb6612fng",
		name: "TB6612FNG",
		category: "Driver",
		description: "Efficient dual H-bridge, 1.2A continuous.",
		voltage: "2.5-13.5V",
		current: "1.2A",
		price: 5,
		pros: ["Efficient", "Cool running"],
		cons: ["Lower current than L298N"],
		alternatives: ["L298N", "DRV8833"],
		datasheet: "https://toshiba.semicon-storage.com/",
		applications: ["Small robots", "Battery-powered"]
	},
	{
		id: "drv8833",
		name: "DRV8833",
		category: "Driver",
		description: "Compact dual H-bridge motor driver.",
		voltage: "2.7-10.8V",
		current: "1.5A",
		price: 4,
		pros: ["Small", "Efficient"],
		cons: ["Lower voltage range"],
		alternatives: ["TB6612FNG"],
		datasheet: "https://www.ti.com/product/DRV8833",
		applications: ["Micro robots"]
	},
	{
		id: "hcsr04",
		name: "HC-SR04 Ultrasonic",
		category: "Sensor",
		description: "Distance sensor 2-400 cm.",
		voltage: "5V",
		current: "15 mA",
		price: 2,
		pros: ["Cheap", "Reliable"],
		cons: ["Not great on soft surfaces"],
		alternatives: ["VL53L0X"],
		datasheet: "https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf",
		applications: ["Obstacle avoidance", "Level sensing"]
	},
	{
		id: "ir-sensor",
		name: "TCRT5000 IR Sensor",
		category: "Sensor",
		description: "Reflective IR sensor for line detection.",
		voltage: "3.3-5V",
		current: "20 mA",
		price: 1,
		pros: ["Cheap", "Simple"],
		cons: ["Ambient light sensitive"],
		alternatives: ["QRE1113"],
		datasheet: "https://www.vishay.com/docs/83760/tcrt5000.pdf",
		applications: ["Line following", "Encoders"]
	},
	{
		id: "dht22",
		name: "DHT22 Temp/Humidity",
		category: "Sensor",
		description: "Digital temperature & humidity sensor.",
		voltage: "3.3-5V",
		current: "1.5 mA",
		price: 4,
		pros: ["Accurate", "Digital"],
		cons: ["Slow (2 s)"],
		alternatives: ["BME280", "DHT11"],
		datasheet: "https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf",
		applications: ["Weather station", "Greenhouse"]
	},
	{
		id: "bme280",
		name: "BME280",
		category: "Sensor",
		description: "Temp, humidity & pressure sensor over I2C.",
		voltage: "1.8-3.6V",
		current: "3.6 µA",
		price: 5,
		pros: ["Very low power", "3-in-1"],
		cons: ["I2C level shift for 5V MCUs"],
		alternatives: ["DHT22", "BMP280"],
		datasheet: "https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/",
		applications: ["Weather station", "Altimeter"]
	},
	{
		id: "mpu6050",
		name: "MPU6050 IMU",
		category: "Sensor",
		description: "6-axis gyro + accelerometer over I2C.",
		voltage: "3.3-5V",
		current: "3.9 mA",
		price: 3,
		pros: ["Cheap IMU"],
		cons: ["Needs calibration"],
		alternatives: ["MPU9250", "BNO055"],
		datasheet: "https://invensense.tdk.com/products/motion-tracking/6-axis/mpu-6050/",
		applications: ["Balancing robot", "Drone"]
	},
	{
		id: "servo-sg90",
		name: "SG90 Micro Servo",
		category: "Actuator",
		description: "9 g micro servo, 180° rotation.",
		voltage: "4.8-6V",
		current: "600 mA stall",
		price: 2,
		pros: ["Tiny", "Cheap"],
		cons: ["Plastic gears"],
		alternatives: ["MG90S"],
		datasheet: "http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf",
		applications: ["Robot arm", "Radar"]
	},
	{
		id: "n20-motor",
		name: "N20 Gear Motor 6V",
		category: "Actuator",
		description: "Micro metal gear motor, 200 RPM.",
		voltage: "6V",
		current: "180 mA",
		price: 6,
		pros: ["Compact", "Torque"],
		cons: ["Fragile shaft"],
		alternatives: ["TT motor"],
		datasheet: "#",
		applications: ["Line follower", "Small robots"]
	},
	{
		id: "555",
		name: "NE555 Timer",
		category: "IC",
		description: "Classic timer IC for astable/monostable circuits.",
		voltage: "4.5-16V",
		current: "10 mA",
		price: .5,
		pros: ["Iconic", "Cheap"],
		cons: ["Bulky vs 555 CMOS"],
		alternatives: ["LMC555"],
		datasheet: "https://www.ti.com/lit/ds/symlink/ne555.pdf",
		applications: ["Blinker", "PWM"]
	},
	{
		id: "lm7805",
		name: "LM7805 Regulator",
		category: "Power",
		description: "5V linear voltage regulator.",
		voltage: "7-25V in",
		current: "1A",
		price: .5,
		pros: ["Simple"],
		cons: ["Wastes power as heat"],
		alternatives: ["LM2596 buck"],
		datasheet: "https://www.ti.com/lit/ds/symlink/lm7805.pdf",
		applications: ["Power supply"]
	},
	{
		id: "lm2596",
		name: "LM2596 Buck Converter",
		category: "Power",
		description: "Adjustable step-down buck module.",
		voltage: "3-40V in",
		current: "3A",
		price: 2,
		pros: ["Efficient", "Adjustable"],
		cons: ["Bigger than linear"],
		alternatives: ["MP1584"],
		datasheet: "https://www.ti.com/lit/ds/symlink/lm2596.pdf",
		applications: ["Battery to 5V"]
	},
	{
		id: "relay-5v",
		name: "5V Relay Module",
		category: "Power",
		description: "Isolated relay module, 10A contacts.",
		voltage: "5V coil",
		current: "70 mA",
		price: 2,
		pros: ["Isolated"],
		cons: ["Mechanical wear"],
		alternatives: ["SSR"],
		datasheet: "#",
		applications: ["Home automation"]
	},
	{
		id: "oled-096",
		name: "0.96\" OLED I2C",
		category: "Display",
		description: "128x64 monochrome OLED via I2C.",
		voltage: "3.3-5V",
		current: "20 mA",
		price: 4,
		pros: ["Crisp", "Low power"],
		cons: ["Small"],
		alternatives: ["1.3\" OLED", "16x2 LCD"],
		datasheet: "#",
		applications: ["UI", "Debug display"]
	}
];
var TEMPLATES = [
	{
		id: "line-follower",
		title: "Line Following Robot",
		category: "Robotics",
		difficulty: "Beginner",
		cost: 28,
		description: "Two IR sensors, motor driver and Arduino Uno follow a black line.",
		tags: ["Arduino", "Robotics"],
		components: [
			"Arduino Uno",
			"L298N",
			"IR ×2",
			"N20 motors ×2"
		]
	},
	{
		id: "obstacle-bot",
		title: "Obstacle Avoiding Robot",
		category: "Robotics",
		difficulty: "Beginner",
		cost: 32,
		description: "Ultrasonic sensor mounted on a servo scans and avoids obstacles.",
		tags: ["Arduino", "Robotics"],
		components: [
			"Arduino Uno",
			"HC-SR04",
			"SG90",
			"L298N"
		]
	},
	{
		id: "bt-car",
		title: "Bluetooth Controlled Car",
		category: "Robotics",
		difficulty: "Intermediate",
		cost: 35,
		description: "Control a robot car from your phone via Bluetooth.",
		tags: ["Arduino", "HC-05"],
		components: [
			"Arduino Uno",
			"HC-05",
			"L298N",
			"N20 motors"
		]
	},
	{
		id: "esp32-home",
		title: "ESP32 Home Automation",
		category: "IoT",
		difficulty: "Intermediate",
		cost: 25,
		description: "Control home appliances over Wi-Fi with an ESP32 and relay board.",
		tags: ["ESP32", "IoT"],
		components: [
			"ESP32",
			"4-ch Relay",
			"AC-DC 5V"
		]
	},
	{
		id: "irrigation",
		title: "Smart Irrigation System",
		category: "IoT",
		difficulty: "Intermediate",
		cost: 20,
		description: "Soil moisture-triggered water pump with ESP32 & MQTT.",
		tags: ["ESP32", "Agriculture"],
		components: [
			"ESP32",
			"Soil sensor",
			"Relay",
			"Pump"
		]
	},
	{
		id: "weather",
		title: "IoT Weather Station",
		category: "IoT",
		difficulty: "Beginner",
		cost: 18,
		description: "Publish temperature, humidity and pressure to a dashboard.",
		tags: ["ESP32", "BME280"],
		components: [
			"ESP32",
			"BME280",
			"OLED"
		]
	},
	{
		id: "smart-door",
		title: "Arduino Smart Door Lock",
		category: "Embedded",
		difficulty: "Intermediate",
		cost: 22,
		description: "Keypad + servo based smart lock with password.",
		tags: ["Arduino", "Security"],
		components: [
			"Arduino Uno",
			"Keypad 4×4",
			"SG90",
			"OLED"
		]
	},
	{
		id: "drone",
		title: "Mini Quadcopter",
		category: "Robotics",
		difficulty: "Advanced",
		cost: 90,
		description: "Flight controller basics with MPU6050 and brushless motors.",
		tags: ["Drone"],
		components: [
			"STM32",
			"MPU6050",
			"ESC ×4",
			"Brushless motor ×4"
		]
	},
	{
		id: "555-blink",
		title: "555 Timer LED Blinker",
		category: "Analog",
		difficulty: "Beginner",
		cost: 3,
		description: "Astable 555 circuit blinking an LED.",
		tags: ["Analog", "555"],
		components: [
			"NE555",
			"LED",
			"Resistors",
			"Cap"
		]
	},
	{
		id: "power-supply",
		title: "Regulated 5V Power Supply",
		category: "Power",
		difficulty: "Beginner",
		cost: 8,
		description: "Wall adapter to clean 5V rail with LM7805.",
		tags: ["Power"],
		components: [
			"LM7805",
			"Caps",
			"Bridge rectifier"
		]
	},
	{
		id: "amp",
		title: "Class-A Audio Amplifier",
		category: "Analog",
		difficulty: "Advanced",
		cost: 15,
		description: "Simple discrete transistor amplifier for headphones.",
		tags: ["Analog", "Audio"],
		components: [
			"2N3904",
			"Resistors",
			"Caps"
		]
	},
	{
		id: "digital-clock",
		title: "Arduino Digital Clock",
		category: "Embedded",
		difficulty: "Beginner",
		cost: 12,
		description: "DS3231 real-time clock with OLED display.",
		tags: ["Arduino"],
		components: [
			"Arduino Nano",
			"DS3231",
			"OLED"
		]
	},
	{
		id: "gesture",
		title: "Gesture Controlled Robot",
		category: "Robotics",
		difficulty: "Advanced",
		cost: 45,
		description: "MPU6050 on wrist controls a robot car wirelessly.",
		tags: ["Robotics", "MPU6050"],
		components: [
			"Arduino Nano ×2",
			"MPU6050",
			"nRF24L01",
			"L298N"
		]
	},
	{
		id: "voice",
		title: "Voice Controlled Lights",
		category: "IoT",
		difficulty: "Intermediate",
		cost: 20,
		description: "ESP32 + Google Home controls smart lights.",
		tags: ["ESP32", "Voice"],
		components: [
			"ESP32",
			"Relay",
			"LED strip"
		]
	},
	{
		id: "gsm-alarm",
		title: "GSM Home Alarm",
		category: "Embedded",
		difficulty: "Advanced",
		cost: 40,
		description: "PIR triggers SMS via SIM800L.",
		tags: ["Security"],
		components: [
			"Arduino Uno",
			"PIR",
			"SIM800L"
		]
	},
	{
		id: "solar",
		title: "Solar Charge Controller",
		category: "Power",
		difficulty: "Intermediate",
		cost: 18,
		description: "PWM solar charge controller for 12V batteries.",
		tags: ["Power"],
		components: [
			"Arduino Nano",
			"MOSFET",
			"Buck"
		]
	},
	{
		id: "rfid",
		title: "RFID Attendance System",
		category: "Embedded",
		difficulty: "Intermediate",
		cost: 15,
		description: "RC522 RFID with logging to SD card.",
		tags: ["Arduino"],
		components: [
			"Arduino Uno",
			"RC522",
			"SD Card"
		]
	},
	{
		id: "encoder",
		title: "Rotary Encoder Menu",
		category: "Embedded",
		difficulty: "Beginner",
		cost: 8,
		description: "Menu system driven by rotary encoder & OLED.",
		tags: ["UI"],
		components: [
			"Arduino Uno",
			"Encoder",
			"OLED"
		]
	},
	{
		id: "boost",
		title: "5V→12V Boost Converter",
		category: "Power",
		difficulty: "Intermediate",
		cost: 4,
		description: "MT3608 boost module powering LEDs.",
		tags: ["Power"],
		components: ["MT3608"]
	},
	{
		id: "logic",
		title: "Digital Logic Trainer",
		category: "Digital",
		difficulty: "Beginner",
		cost: 10,
		description: "7400-series gates on a training breadboard.",
		tags: ["Digital"],
		components: [
			"74HC00",
			"74HC08",
			"LEDs"
		]
	}
];
var QUICK_PROMPTS = [
	"Build a Line Following Robot",
	"Design an ESP32 Home Automation system",
	"Arduino Smart Door Lock with keypad and servo",
	"555 Timer LED blinker circuit",
	"Class-A audio amplifier for headphones",
	"Regulated 5V power supply from 12V adapter",
	"IoT Weather Station with ESP32 and BME280",
	"Obstacle avoiding robot with HC-SR04"
];
//#endregion
export { QUICK_PROMPTS as n, TEMPLATES as r, COMPONENTS as t };
