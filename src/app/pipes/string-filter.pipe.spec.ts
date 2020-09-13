import { StringFilterPipe } from './string-filter.pipe';

describe('StringFilterPipe', () => {
  const pipe = new StringFilterPipe();
  const testArray: string[] = [
    'Vertuo',
    'Original',
    'Gran Lungo',
    'Barista Creations',
    'Alto XL',
    'Espresso',
    'Double Espresso'
  ];

  it('should return an array with values with containing characters given', () => {
    expect(pipe.transform(testArray, '')).toEqual(testArray);
    expect(pipe.transform(testArray, 'Vertuo')).toEqual(['Vertuo']);
    // TODO: Should update so pipe returns no results with a query with just spaces.
    expect(pipe.transform(testArray, ' ')).toEqual(
      ['Gran Lungo', 'Barista Creations', 'Alto XL', 'Double Espresso']
    );
    expect(pipe.transform(testArray, 'a')).toEqual(
      ['Original', 'Gran Lungo', 'Barista Creations', 'Alto XL']
    );
    expect(pipe.transform(testArray, 'ar')).toEqual(['Barista Creations']);
    expect(pipe.transform(testArray, 'Lungo')).toEqual(['Gran Lungo']);
    expect(pipe.transform(testArray, 'inal')).toEqual(['Original']);
    expect(pipe.transform(testArray, 'Keurig')).toEqual([]);
    expect(pipe.transform(testArray, 'Vertua')).toEqual([]);
  });

  it('should return results that are case insensitive', () => {
    expect(pipe.transform(testArray, 'vErTuo')).toEqual(['Vertuo']);
  });
});
