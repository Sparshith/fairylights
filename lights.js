const dotstar=require('dotstar');
const SPI = require('pi-spi');

spi = SPI.initialize('/dev/spidev0.0');
const ledStripLength = 144;

const ledStrip = new dotstar.Dotstar(spi, {
	  length: ledStripLength
});

ledStrip.all(255, 200, 175, 0.8);
ledStrip.sync();
