export const ARDUINO_TEMPLATE = `// Arduino sketch header
void setup() {
  Serial.begin(115200);
}

void loop() {
  delay(10);
}`;

export const ESP32_TEMPLATE = `// ESP32 project header
void setup() {
  Serial.begin(115200);
}

void loop() {
  delay(10);
}`;
