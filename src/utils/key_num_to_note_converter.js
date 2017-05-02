function getVexFlowInfo(keyNum) {
  switch (keyNum) {
    case 28:
      return { note: 'c', octave: 3, accidental: '' };
    case 29:
      return { note: 'c#', octave: 3, accidental: '#' };
    case 30:
      return { note: 'd', octave: 3, accidental: '' };
    case 31:
      return { note: 'd#', octave: 3, accidental: '#' };
    case 32:
      return { note: 'e', octave: 3, accidental: '' };
    case 33:
      return { note: 'f', octave: 3, accidental: '' };
    case 34:
      return { note: 'f#', octave: 3, accidental: '#' };
    case 35:
      return { note: 'g', octave: 3, accidental: '' };
    case 36:
      return { note: 'g#', octave: 3, accidental: '#' };
    case 37:
      return { note: 'a', octave: 3, accidental: '' };
    case 38:
      return { note: 'a#', octave: 3, accidental: '#' };
    case 39:
      return { note: 'b', octave: 3, accidental: '' };
    case 40:
      return { note: 'c', octave: 4, accidental: '' };
    case 41:
      return { note: 'c#', octave: 4, accidental: '#' };
    case 42:
      return { note: 'd', octave: 4, accidental: '' };
    case 43:
      return { note: 'd#', octave: 4, accidental: '#' };
    case 44:
      return { note: 'e', octave: 4, accidental: '' };
    case 45:
      return { note: 'f', octave: 4, accidental: '' };
    case 46:
      return { note: 'f#', octave: 4, accidental: '#' };
    case 47:
      return { note: 'g', octave: 4, accidental: '' };
    case 48:
      return { note: 'g#', octave: 4, accidental: '' };
    case 49:
      return { note: 'a', octave: 4, accidental: '' };
    case 50:
      return { note: 'a#', octave: 4, accidental: '#' };
    case 51:
      return { note: 'b', octave: 4, accidental: '' };
    case 52:
      return { note: 'c', octave: 5, accidental: '' };
    case 53:
      return { note: 'c#', octave: 5, accidental: '#' };
    case 54:
      return { note: 'd', octave: 5, accidental: '' };
    case 55:
      return { note: 'd#', octave: 5, accidental: '#' };
    case 56:
      return { note: 'e', octave: 5, accidental: '' };
    case 57:
      return { note: 'f', octave: 5, accidental: '' };
    case 58:
      return { note: 'f#', octave: 5, accidental: '#' };
    case 59:
      return { note: 'g', octave: 5, accidental: '' };
    case 60:
      return { note: 'g#', octave: 5, accidental: '#' };
    case 61:
      return { note: 'a', octave: 5, accidental: '' };
    case 62:
      return { note: 'a#', octave: 5, accidental: '#' };
    case 63:
      return { note: 'b', octave: 5, accidental: '' };
    default:
      return { note: null, octave: null, accidental: null };
  }
}

export default getVexFlowInfo;
