export type ComponentCategory =
  | "MCU"
  | "Sensor"
  | "Actuator"
  | "Display"
  | "Communication"
  | "Power"
  | "Passive"
  | "Discrete"
  | "IC"
  | "Interface"
  | "Other";

export type SignalType =
  | "Digital"
  | "Analog"
  | "PWM"
  | "I2C"
  | "SPI"
  | "UART"
  | "OneWire"
  | "Power"
  | "Ground";

export type PinCapability =
  | "GPIO"
  | "ADC"
  | "DAC"
  | "PWM"
  | "I2C_SDA"
  | "I2C_SCL"
  | "SPI_MOSI"
  | "SPI_MISO"
  | "SPI_SCK"
  | "SPI_CS"
  | "UART_RX"
  | "UART_TX"
  | "POWER"
  | "GND";

export type BoardPlatform = "arduino" | "esp-idf" | "stm32cube" | "platformio";
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
