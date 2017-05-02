function translateKeyNumIntoNoteInformation(keyNum) {
  switch (keyNum) {
    case 28:
      return { display_name: 'C/3', vfnote: 'c', octave: 3, accidental: '' };
    case 29:
      return { display_name: 'C#/3', vfnote: 'c', octave: 3, accidental: '#' };
    case 30:
      return { display_name: 'D/3', vfnote: 'd', octave: 3, accidental: '' };
    case 31:
      return { display_name: 'D#/3', vfnote: 'd#', octave: 3, accidental: '#' };
    case 32:
      return { display_name: 'E/3', vfnote: 'e', octave: 3, accidental: '' };
    case 33:
      return { display_name: 'F/3', vfnote: 'f', octave: 3, accidental: '' };
    case 34:
      return { display_name: 'F#/3', vfnote: 'f#', octave: 3, accidental: '#' };
    case 35:
      return { display_name: 'G/3', vfnote: 'g', octave: 3, accidental: '' };
    case 36:
      return { display_name: 'G#/3', vfnote: 'g#', octave: 3, accidental: '#' };
    case 37:
      return { display_name: 'A/3', vfnote: 'a', octave: 3, accidental: '' };
    case 38:
      return { display_name: 'A#/3', vfnote: 'a#', octave: 3, accidental: '#' };
    case 39:
      return { display_name: 'B/3', vfnote: 'b', octave: 3, accidental: '' };
    case 40:
      return { display_name: 'C/4', vfnote: 'c', octave: 4, accidental: '' };
    case 41:
      return { display_name: 'C#/4', vfnote: 'c#', octave: 4, accidental: '#' };
    case 42:
      return { display_name: 'D/4', vfnote: 'd', octave: 4, accidental: '' };
    case 43:
      return { display_name: 'D#/4', vfnote: 'd#', octave: 4, accidental: '#' };
    case 44:
      return { display_name: 'E/4', vfnote: 'e', octave: 4, accidental: '' };
    case 45:
      return { display_name: 'F/4', vfnote: 'f', octave: 4, accidental: '' };
    case 46:
      return { display_name: 'F#/4', vfnote: 'f#', octave: 4, accidental: '#' };
    case 47:
      return { display_name: 'G/4', vfnote: 'g', octave: 4, accidental: '' };
    case 48:
      return { display_name: 'G#/4', vfnote: 'g#', octave: 4, accidental: '' };
    case 49:
      return { display_name: 'A/4', vfnote: 'a', octave: 4, accidental: '' };
    case 50:
      return { display_name: 'A#/4', vfnote: 'a#', octave: 4, accidental: '#' };
    case 51:
      return { display_name: 'B/4', vfnote: 'b', octave: 4, accidental: '' };
    case 52:
      return { display_name: 'C/5', vfnote: 'c', octave: 4, accidental: '' };
    case 53:
      return { display_name: 'C#/5', vfnote: 'c#', octave: 5, accidental: '#' };
    case 54:
      return { display_name: 'D/5', vfnote: 'd', octave: 5, accidental: '' };
    case 55:
      return { display_name: 'D#/5', vfnote: 'd#', octave: 5, accidental: '#' };
    case 56:
      return { display_name: 'E/5', vfnote: 'e', octave: 5, accidental: '' };
    case 57:
      return { display_name: 'F/5', vfnote: 'f', octave: 5, accidental: '' };
    case 58:
      return { display_name: 'F#/5', vfnote: 'f#', octave: 5, accidental: '#' };
    case 59:
      return { display_name: 'G/5', vfnote: 'g', octave: 5, accidental: '' };
    case 60:
      return { display_name: 'G#/5', vfnote: 'g#', octave: 5, accidental: '#' };
    case 61:
      return { display_name: 'A/5', vfnote: 'a', octave: 5, accidental: '' };
    case 62:
      return { display_name: 'A#/5', vfnote: 'a#', octave: 5, accidental: '#' };
    case 63:
      return { display_name: 'B/5', vfnote: 'b', octave: 5, accidental: '' };
    default:
      return { display_name: null, vfnote: null, octave: null, accidental: null };
  }
}

export default translateKeyNumIntoNoteInformation;
