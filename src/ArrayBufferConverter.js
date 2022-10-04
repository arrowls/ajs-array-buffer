export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let resultStr = '';
    const bufferView = new Uint16Array(this.buffer);
    bufferView.forEach((char) => {
      resultStr += String.fromCharCode(char);
    });
    return resultStr;
  }
}
