
// "Class" for calculating CRC8 checksums...
module.exports =  class crc8 {
  constructor(polynomial){ // constructor takes an optional polynomial type from CRC8.POLY
    if (polynomial == null) polynomial = 0x07
    this.table = this.generateTable(polynomial);
  }

  // Returns the 8-bit checksum given an array of byte-sized numbers crc8.prototype
  checksum(byte_array) {
    var c = 0

    for (var i = 0; i < byte_array.length; i++ )
      c = this.table[(c ^ byte_array[i]) % 256]

    return c;
  }

  // returns a lookup table byte array given one of the values from CRC8.POLY
  generateTable(polynomial)
    {
      var csTable = [] // 256 max len byte array

      for ( var i = 0; i < 256; ++i ) {
        var curr = i
        for ( var j = 0; j < 8; ++j ) {
          if ((curr & 0x80) !== 0) {
            curr = ((curr << 1) ^ polynomial) % 256
          } else {
            curr = (curr << 1) % 256
          }
        }
        csTable[i] = curr
      }

      return csTable
    }


}
